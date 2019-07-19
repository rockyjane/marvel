<template>
    <div class="googleMapJs"></div>
</template>

<script>
    import gmapsInit from '@/mixins/GoogleMap';

    export default {
        name: 'GoogleMapJs',
        async mounted() {
            try {
                const google = await gmapsInit();
                const geocoder = new google.maps.Geocoder();
                // 參照 https://www.oxxostudio.tw/articles/201707/google-maps-2-map-class.html
                // default
                let vmEl = this.$el,
                    map,
                    markers = [],
                    infowindow = []
                // data set
                let infowindowContent = [{
                            content: '<h4>美國隊長</h4><button class="infoBtn0">點我</button>',
                            othContent: '<h4>盾牌</h4><button class="infoBtn0">點我</button>',
                        }, {
                            content: '<h3>鋼鐵人</h3><button class="infoBtn1">點我</button>',
                            othContent: '<h3>激光</h3><button class="infoBtn1">點我</button>',
                        }, {
                            content: '<h3>蜘蛛人</h3><button class="infoBtn2">點我</button>',
                            othContent: '<h3>絲</h3><button class="infoBtn2">點我</button>',
                        }, {
                            content: '<h3>黑寡婦</h3><button class="infoBtn3">點我</button>',
                            othContent: '<h3>電擊</h3><button class="infoBtn3">點我</button>',
                        }, {
                            content: '<h3>浩克</h3><button class="infoBtn4">點我</button>',
                            othContent: '<h3>粉碎</h3><button class="infoBtn4">點我</button>',
                        },
                    ],
                    centerPos = {
                        lat: 40.689104,
                        lng: -74.044599
                    },
                    position = [{
                            label: {
                                text: 'Catch Me 1',
                                color: '#fbb'
                            },
                            lat: 40.6892,
                            lng: -74.045,
                            icon: {
                                url: 'https://i.imgur.com/zWblNv2.png',
                                // size: new google.maps.Size(100, 100),
                            },
                        }, {
                            label: {
                                text: 'Catch Me 2',
                                color: '#fbb'
                            },
                            lat: 40.6893,
                            lng: -74.046,
                            icon: {
                                url: 'https://i.imgur.com/zWblNv2.png',
                            },
                        }, {
                            label: {
                                text: 'Catch Me 3',
                                color: '#fbb'
                            },
                            lat: 40.6902,
                            lng: -74.145,
                            icon: {
                                url: 'https://i.imgur.com/zWblNv2.png',
                            },
                        }, {
                            label: {
                                text: 'Catch Me 4',
                                color: '#fbb'
                            },
                            lat: 40.6895,
                            lng: -74.049,
                            icon: {
                                url: 'https://i.imgur.com/zWblNv2.png',
                            },
                        }, {
                            label: {
                                text: 'Catch Me 5',
                                color: '#fbb'
                            },
                            lat: 40.7892,
                            lng: -74.145,
                            icon: {
                                url: 'https://i.imgur.com/zWblNv2.png',
                            },
                        }
                    ],
                    a = -1;
                // Map 初始功能
                function initMap() {
                    map = new google.maps.Map(vmEl, {
                        mapTypeControl: false,
                        fullscreenControl: false,
                        zoomControl: false,
                        center: centerPos,
                        zoom: 9,
                        fullscreenControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},
                        scaleControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},
                        streetViewControlOptions:{position:google.maps.ControlPosition.TOP_LEFT},
                        zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},
                        styles: [{
                                "featureType": "all",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    },
                                    {
                                        "saturation": "-100"
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": 36
                                    },
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 40
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    },
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 17
                                    },
                                    {
                                        "weight": 1.2
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#4d6059"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#4d6059"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.natural",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#4d6059"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#4d6059"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#4d6059"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    },
                                    {
                                        "lightness": 29
                                    },
                                    {
                                        "weight": 0.2
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 18
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#7f8d89"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 19
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#2b3638"
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#2b3638"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#24282b"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#24282b"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            }
                        ],
                    });
                    for (let i = 0; i < position.length; i++) {
                        addMarker(i);
                        addInfowindow(i)
                    }
                }
                // 座標
                function addMarker(e) {
                    markers[e] = new google.maps.Marker({
                        position: {
                            lat: position[e].lat,
                            lng: position[e].lng
                        },
                        map: map,
                        label: position[e].label,
                        icon: position[e].icon,
                        draggable: true,
                        zIndex: e,
                    });
                }
                // 內容
                function addInfowindow(e) {
                    infowindow[e] = new google.maps.InfoWindow({
                        content: infowindowContent[e].content
                    });
                }

                initMap()

                // 監聽事件
                for (let i = 0; i < position.length; i++) {
                    markers[i].addListener('click', ()=>{
                        a = a * -1;
                        if(a > 0){
                            infowindow[i].open(map, markers[i]);
                        }else{
                            infowindow[i].close();
                        }
                    });
                    infowindow[i].addListener('domready', function(){
                        $(`.infoBtn${i}`).on('click', function(){
                            a = a * -1;
                            if (a > 0) {
                                infowindow[i].setContent(infowindowContent[i].content);
                            } else {
                                infowindow[i].setContent(infowindowContent[i].othContent);
                            }
                        });
                    });
                    google.maps.event.addListener(infowindow[i], 'closeclick', ()=>{
                        a = a * -1;
                    });
                }
                
                // 參照 https://markus.oberlehner.net/blog/using-the-google-maps-api-with-vue/
                // 使用原生寫入 vue cli
                // geocoder.geocode({ address: 'Austria' }, (results, status) => {
                //     if (status !== 'OK' || !results[0]) {
                //     throw new Error(status);
                //     }
                //     map.setCenter(results[0].geometry.location);
                //     map.fitBounds(results[0].geometry.viewport);
                // });
            } catch (error) {
                cl(error);
            }
        },   
    }
</script>

<style>
    .gm-style{
        padding-top: 50px;
    }
</style>


