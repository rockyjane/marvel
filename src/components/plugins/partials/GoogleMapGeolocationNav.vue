<template>
    <div class="googleMapGeolocationNav"></div>
</template>

<script>
    import gmapsInit from '@/mixins/GoogleMap';
    import {
        mapMutations,
    } from 'vuex';

    export default {
        name: 'GoogleMapGeolocationNav',
        methods: {
			...mapMutations('googleGeolocation', [
                'setGoogleLat',
                'setGoogleLng',
			]),
		},
        async mounted() {
            try {
                const google = await gmapsInit();
                let map, marker, lat, lng, vm = this;
                function initGeolocation() {
                    navigator.geolocation.watchPosition((position) => {
                        cl(position.coords);
                        lat = position.coords.latitude;
                        lng = position.coords.longitude;
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
                    });
                }
                initGeolocation();
            } catch (error) {
                cl(error);
            }
        },
    }
</script>
