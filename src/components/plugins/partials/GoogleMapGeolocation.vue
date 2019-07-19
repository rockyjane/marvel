<template>
    <div class="googleMapGeolocation"></div>
</template>

<script>
    import axios from 'axios';
    import gmapsInit from '@/mixins/GoogleMap';
    import {
        mapMutations,
    } from 'vuex';

    export default {
        name: 'GoogleMapGeolocation',
        // methods: {
        //     makeRequest() {
        //         let url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.VUE_APP_GOOGLE_MAP_PAY_ID}`;
        //         axios.post(url).then(response => {
        //             // let res = JSON.parse(this.response);
        //             cl(response)
        //         }).catch(error => {
        //             cl(error);
        //         });
        //     },
        // },
        // beforeMount() {
        //     this.makeRequest();
        // },
        methods: {
			...mapMutations('googleGeolocation', [
                'setGoogleLat',
                'setGoogleLng',
			]),
		},
        async mounted() {
            try {
                const google = await gmapsInit();
                let map, marker, lat, lng,
                    vm = this,
                    url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.VUE_APP_GOOGLE_MAP_PAY_ID}`;

                function makeRequest() {
                    axios.post(url).then(response => {
                        cl(response.data.location)
                        lat = response.data.location.lat;
                        lng = response.data.location.lng;
                        // 初始化地圖
                        map = new google.maps.Map(vm.$el, {
                            zoom: 18,
                            center: { lat: lat, lng: lng }
                        });
                        marker = new google.maps.Marker({
                            position: { lat: lat, lng: lng },
                            map: map
                        });
                        vm.setGoogleLat(lat)
                        vm.setGoogleLng(lng)
                    }).catch(error => {
                        cl(error);
                    });
                }
                makeRequest()
                
            } catch (error) {
                cl(error);
            }
        },
    }
</script>

