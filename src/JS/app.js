//markers para el mapa
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.164021 },
    content: '<p>Mural café Olé</p>'
});
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.1662225 },
    content: '<p>Bar café Colón</p>'
});
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.1662225},
    content: '<p>La Pizzeria Argentina</p>'
});
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.1662225},
    content: '<p>Panaderia Artesanal</p>'
});
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.1662225},
    content:'<p>Café AMAKAFE</p>'
});

const initMap = () => {
  let location = {lat: 19.432608, lng:-99.133208};
  let options = new google.maps.Map(document.getElementById('map'), {
    center: location, 
    zoom: 8
  });

const addMarker = (props) => {
  let marker = new google.map.Marker({
    position: props.coordenadas,
    map: map
  }
}
if (props.content) {
  let infoWindow = new google.maps.InfoWindow({
    content: props.content
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
}

        // let mapWeb = new google.map.Maps(document.getElementById('map'), options);

        // //marker en el map, para poner opciones manualmente
        // let marker = new google.map.Marker({
        //     position: { lat: 19.4045352, lng: 99.164021 },
        //     map: map
        // });

        // let infoWindow = new google.maps.InfoWindow({
        //     content: '<p>Bar Café Colón</p>'
        // })
        // marker.addListener('click', function(){
        //   infoWindow.open(map, marker);
        // });