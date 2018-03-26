$(function() {
  
  var yandex_map_div_id = 'yandex-map';
  //var CMS__TPL_PATH = '/bitrix/templates/azbn7theme';
  //var CMS__TPL_PATH = '';
  var CMS__TPL_PATH = '/korsun/';
  
  var yandex_map = $('#' + yandex_map_div_id);
  var centerMap = centerMap = [52.7189,36.9904];
  var zoomMap = 16;
  /*if (screenJS.device()){
    var centerMap = [52.7190,36.9960];
  }
  if (screenJS.isXS()){
    var zoomMap = 15;
  }*/
  if(yandex_map.length) {    
      var 
        map_area = yandex_map, 
        map_area_center = {   
          center: centerMap,
          zoom: zoomMap,
          controls: ['smallMapDefaultSet']
        },
        map_area_block;
      var initYandexMapGlonass = function() {
        
        var map_area_block = new ymaps.Map(yandex_map_div_id, map_area_center, {
          //searchControlProvider: 'yandex#search'
        });       
        $('.azbn__contacts__item').each(function(index){
          var block = $(this);
          var block_data = JSON.parse(block.attr('data-contact') || '{}');
          var polygonLayout_isActive = (index > 0) ? '' : 'is--active';
          var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="kontakty-map__panel  ' + polygonLayout_isActive + '"><div class="kontakty-map__icon"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="' + CMS__TPL_PATH + '/img/svg/sprite.svg#plus"></use></svg></div><div class="kontakty-map__tooltip"><div class="kontakty-map__tooltip-heading"><div class="kontakty-map__tooltip-icon"><svg class="icon-svg icon-icon-tooltip" role="img"><use xlink:href="' + CMS__TPL_PATH + '/img/svg/sprite.svg#icon-tooltip"></use></svg></div>' + block_data.title + '</div><div class="kontakty-map__tooltip-btn"><a href="' + block_data.link + '" class="btn-link__item "><span class="btn-link__item-name">Подробнее</span></a></div></div>');
          
          var map_placemark = new ymaps.Placemark(block_data.coords, {
            hintContent: ''
          }, {
            iconLayout: polygonLayout,
            iconImageOffset: [0, 0]
          });
          
          map_area_block
            .geoObjects
              .add(map_placemark)
          ;          
        });
        $('.azbn__contacts__item-point').each(function(index){
          var block = $(this);
          var block_data = JSON.parse(block.attr('data-contact') || '{}');
          var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="kontakty-map__panel  is--location"><div class="kontakty-map__location"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="' + CMS__TPL_PATH + '/img/svg/sprite.svg#map-location"></use></svg></div></div>');
          
          var map_placemark = new ymaps.Placemark(block_data.coords, {
            hintContent: ''
          }, {
            iconLayout: polygonLayout,
            iconImageOffset: [0, 0]
          });
          
          map_area_block
            .geoObjects
              .add(map_placemark)
          ;          
        });        
        var myGeoObject = new ymaps.GeoObject({
              geometry: {
                  type: "Polygon",
                  coordinates:  [[[52.722382,36.992921],[52.722454,36.994096],[52.72219,36.994812],[52.721745,36.996329],[52.72194,36.99668],[52.723646,36.997588],[52.723584,36.997851],[52.723652,36.998157],[52.723945,36.999069],[52.72448,37.00085],[52.724486,37.001601],[52.724414,37.002266],[52.723424,37.003511],[52.72177,37.005077],[52.720793,37.005656],[52.720408,37.005399],[52.718148,37.003468],[52.718095,37.001665],[52.71648,36.994606],[52.71674,36.993018],[52.717222,36.991752],[52.718148,36.990829],[52.718942,36.990421],[52.71949,36.990507],[52.72018,36.990443],[52.720662,36.990486],[52.721535,36.990894],[52.722213,36.991387],[52.722382,36.992921]]],
                  fillRule: "nonZero"
              }/*,
              properties:{
                  // Содержимое балуна.
                  balloonContent: "Корсунская пустынь"
              }*/
          }, {
              fillColor: 'rgba(212, 243, 172, .55)',
              strokeColor: '#ecb418',
              opacity: 1,
              strokeWidth: 2,
              strokeStyle: 'solid'
          });
          map_area_block.geoObjects.add(myGeoObject);
      }
      
      if(map_area.length) {
        ymaps.ready(initYandexMapGlonass);
      }
    
  }
  
});
/*function initMap() {  
  var map_container_div_id = 'map-google';
  var cont = $('#' + map_container_div_id);  
  var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
  if(cont.length) {    
    var map_data = JSON.parse(cont.attr('data-map') || '{}');    
    var coordMapOfficeOne = map_data.center;
    var zoomMapOfficeOne = map_data.zoom,
        styleMapOfficeOne = [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}],
        optionsMapOfficeOne = {
          zoom: zoomMapOfficeOne, 
          center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
          styles: styleMapOfficeOne
        }, 
      idOfficeOne = document.getElementById(map_container_div_id),
      mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne), 
      //iconOfficeOne = '/wp-content/themes/azbn7theme/img/default/map-placeholder.png';
      //iconOfficeOne = '/img/default/icon-map.png',
      iconOfficeOne = {   
        //path: "M25,0C12.1,0.5,1.4,10.5,0.1,23.4C-0.1,26,0,28.5,0.5,30.9l0,0c0,0,0,0.3,0.2,0.8c0.4,1.8,1,3.5,1.7,5.1 C5,43,11,53.3,24.5,64.5c0.8,0.7,2,0.7,2.9,0C40.9,53.3,46.9,43,49.5,36.8c0.8-1.6,1.3-3.3,1.7-5.1c0.1-0.5,0.2-0.8,0.2-0.8l0,0 c0.3-1.6,0.5-3.2,0.5-4.9C51.9,11.3,39.7-0.5,25,0z M25.9,38.8c-7,0-12.6-5.6-12.6-12.6S19,13.6,25.9,13.6s12.6,5.6,12.6,12.6     S32.9,38.8,25.9,38.8z", 
        path: "M24,64c0,0,23.8-27,23.8-40.2C47.8,10.7,37.2,0,24,0S0.2,10.7,0.2,23.8S24,64,24,64z M24,7.4 c9.1,0,16.5,7.4,16.5,16.5S33.1,40.3,24,40.3c-9.1,0-16.5-7.4-16.5-16.5S14.9,7.4,24,7.4z", 
        fillColor: '#0a4587',
        strokeColor: '#000000',
        fillOpacity: 1,
        //anchor: new google.maps.Point(26,65),
        anchor: new google.maps.Point(24,64),
        strokeWeight: 0,
        scale: 1,
      }; 
      if(map_data.placemarks.length) {
        for(var i = 0; i < map_data.placemarks.length; i++) {
          var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks[i].title,
              //animation: google.maps.Animation.DROP
          });
        }
      }     
      //$(window).on('resize', function() {
      //  google.maps.event.trigger(mapOfficeOne, "resize");
      //  mapOfficeOne.setCenter(OfficeOne);
      //});
      
      $(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
        event.preventDefault();
        var btn = $(this);
        var coord = btn.attr('data-coord');
        var coord_arr = coord.split(',');
        console.dir(coord_arr);
        mapOfficeOne.setCenter({
          lat : parseFloat((coord_arr[0] || '').trim()),
          lng : parseFloat((coord_arr[1] || '').trim()),
        });
        
      });
      
    
  }
  
}; 
$(function () {
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
    event.preventDefault();
    $(window).trigger('resize');    
  });  
});
*/