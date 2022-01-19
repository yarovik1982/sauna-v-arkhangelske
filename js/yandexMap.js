// ymaps.ready(init);

// function init () {
//     var myMap = new ymaps.Map("map", {
//             center: [54.83, 37.11],
//             zoom: 5
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         myPlacemark = new ymaps.Placemark([55.907228, 31.260503], {
//             // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
//             balloonContentHeader: "Балун метки",
//             balloonContentBody: "Содержимое <em>балуна</em> метки",
//             balloonContentFooter: "Подвал",
//             hintContent: "Хинт метки"
//         });

//     myMap.geoObjects.add(myPlacemark);

//     // Открываем балун на карте (без привязки к геообъекту).
//     myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
//         // Опция: не показываем кнопку закрытия.
//         closeButton: false
//     });

//     // Показываем хинт на карте (без привязки к геообъекту).
//     myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
//         // Опция: задержка перед открытием.
//         openTimeout: 1500
//     });
// }
	
ymaps.ready(init);
function init() {
 
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [56, 37],
        zoom: 12,
    });
 
    // Строка с адресом, который необходимо геокодировать
   //  var address = 'Москва, ул. Льва Толстого, 16';
   var address = 'Архангельск, СНТ Транспортник, стр 11';
 
    // Ищем координаты указанного адреса
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
    var geocoder = ymaps.geocode(address);
 
    // После того, как поиск вернул результат, вызывается callback-функция
    geocoder.then(
        function (res) {
 
            // координаты объекта
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
 
            // Добавление метки (Placemark) на карту
            var placemark = new ymaps.Placemark(
                coordinates, {
                    'hintContent': address,
                    'balloonContent': 'Время работы: Пн-Пт, с 9 до 20'
                }, {
                    'preset': 'islands#redDotIcon'
                }
            );
 
            myMap.geoObjects.add(placemark);
        }
    );
 
}