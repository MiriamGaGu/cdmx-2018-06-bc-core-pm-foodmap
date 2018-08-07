//Timer for splash
let showApp;

function splashIntro() {
    showApp = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("map").style.display = "block";
}

//confi del mapa, opciones de mapa
// let map;

addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.164021 },
    content: '<p>Mural cafè Olè</p>'
});
addMarker({
    coordenadas: { lat: 19.4045352, lng: -99.1662225 },
    content: '<p>Bar cafè Colòn</p>'
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
    coordenadas: { lat: 19.4045352, lng: -99.1662225}
    content: '<p>Cafè AMAKAFE</p>'
});

const initMap = () => {
        let options = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -19° 25′ 42, lng: 99° 07′ 39 },
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