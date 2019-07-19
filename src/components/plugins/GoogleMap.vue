<template>
    <div class="googleMap fullHeight">
        <div class="container pt-5 pb-5">
            <!-- noAPI -->
            <h2 class="mb-3">
                <label class="curPoin">
                    No API <i :class="`fa ${ noAPI ?'fa-minus' : 'fa-plus'}`"></i>
                    <input type="checkbox" v-model="noAPI">
                </label>
            </h2>
            <div class="row" v-if="noAPI">
                <div class="col-sm-12 mb-3">
                    <h5>
                        嵌入地圖
                        <span>(復聯彩蛋沙威瑪店家)</span>
                    </h5>
                    <div class="store_box">
                        <iframe class="noapi" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3305.5703018281765!2d-118.39405999999998!3d34.054892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d0b057dfe296497!2sShalom+Grill+-+Burgers%2C+Kabob%2C+Shawarma!5e0!3m2!1szh-TW!2suk!4v1563112400429!5m2!1szh-TW!2suk" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <!-- embedAPI -->
            <h2 class="mb-3">
                <label class="curPoin">
                    Maps Embed API <i :class="`fa ${ embedAPI.state ?'fa-minus' : 'fa-plus'}`"></i>
                    <input type="checkbox" v-model="embedAPI.state">
                </label>
            </h2>
            <div class="row" v-if="embedAPI.state">
                <div class="col-md-6 mb-3">
                    <div class="store_box">
                        <h5>店家標記</h5>
                        <iframe frameborder="0" 
                                style="border:0" 
                                :src="`https://www.google.com/maps/embed/v1/place?key=${token}&q=Sublimotion`"
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="store_box">
                        <h5>
                            目標搜索
                            <span>
                                [以上未被Google開啟收費]
                                <br>
                                (美國隊長出生地)
                            </span>
                        </h5>
                        <input type="text" class="search mb-2" v-model="embedAPI.place.addressKey" placeholder="美國隊長出生地" @blur="embedPlaceAddressOut" @keyup.enter="embedPlaceAddressOut">
                        <iframe frameborder="0" 
                                style="border:0" 
                                :src="`https://www.google.com/maps/embed/v1/place?key=${token}&q=${embedAPI.place.addressSet}`"
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="store_box">
                        <h5>
                            路線規劃
                            <span>
                                [地圖太小，中間路徑就不給您改了，避開功能也關閉哦]
                                <br>
                                (鋼鐵人住家-中間點是'史塔克大廈位址')
                            </span>
                        </h5>
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="from mb-2" v-model="embedAPI.directions.originKey" placeholder="鋼鐵人住處" @blur="embedDirectionsOriginOut" @keyup.enter="embedDirectionsOriginOut">
                            </div>
                            <div class="col-6">
                                <input type="text" class="to mb-2" v-model="embedAPI.directions.destinationKey" placeholder="漢堡王" @blur="embedDirectionsDestinationOut" @keyup.enter="embedDirectionsDestinationOut">
                            </div>
                            <div class="col-12">
                                <div class="row embedMode">
                                    <div class="col-2dot4">
                                        <label class="curPoin">
                                            <input type="radio" v-model="embedAPI.directions.mode" value="&mode=driving" @click="embedModeSameReset(embedAPI.directions.mode)">
                                            <i class="fa fa-car"></i>
                                        </label>
                                    </div>
                                    <div class="col-2dot4">
                                        <label class="curPoin">
                                            <input type="radio" v-model="embedAPI.directions.mode" value="&mode=walking" @click="embedModeSameReset(embedAPI.directions.mode)">
                                            <i class="fa fa-paw"></i>
                                        </label>
                                    </div>
                                    <div class="col-2dot4">
                                        <label class="curPoin">
                                            <input type="radio" v-model="embedAPI.directions.mode" value="&mode=bicycling" @click="embedModeSameReset(embedAPI.directions.mode)">
                                            <i class="fa fa-bicycle"></i>
                                        </label>
                                    </div>
                                    <div class="col-2dot4">
                                        <label class="curPoin">
                                            <input type="radio" v-model="embedAPI.directions.mode" value="&mode=transit" @click="embedModeSameReset(embedAPI.directions.mode)">
                                            <i class="fa fa-train"></i>
                                        </label>
                                    </div>
                                    <div class="col-2dot4">
                                        <label class="curPoin">
                                            <input type="radio" v-model="embedAPI.directions.mode" value="&mode=flying" @click="embedModeSameReset(embedAPI.directions.mode)">
                                            <i class="fa fa-plane"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <iframe frameborder="0" 
                                style="border:0"
                                :src="`https://www.google.com/maps/embed/v1/directions?key=${pay_token}&origin=${embedAPI.directions.originSet}&waypoints=Hudson Yards${embedAPI.directions.mode}&destination=${embedAPI.directions.destinationSet}`">
                        </iframe>
                    </div>
                </div>
                <div class="col-md-6 mb-3 embedZoom">
                    <div class="store_box">
                        <h5>
                            廣泛搜索
                            <span>(蜘蛛人出生地)</span>
                        </h5>
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="search mb-2" v-model="embedAPI.zoom.addressKey" placeholder="皇后區周圍711" @blur="embedZoomAddressOut" @keyup.enter="embedZoomAddressOut">
                            </div>
                            <div class="col-6">
                                <vue-slider v-model="embedAPI.zoom.range.points" v-bind="embedAPI.zoom.range.options" />
                                <span>範圍值</span>
                            </div>
                            <div class="col-6">
                                <input type="text" class="mb-2" v-model="embedAPI.zoom.insetKey" placeholder="中心經緯度內圈" @blur="embedZoomInsetOut" @keyup.enter="embedZoomInsetOut">
                            </div>
                            <div class="col-6">
                                <input type="text" class="mb-2" v-model="embedAPI.zoom.outsetKey" placeholder="中心經緯度外圈" @blur="embedZoomOutsetOut" @keyup.enter="embedZoomOutsetOut">
                            </div>
                        </div>
                        <iframe frameborder="0" 
                                style="border:0"
                                :src="`https://www.google.com/maps/embed/v1/search?key=${pay_token}&q=New York Queens ${embedAPI.zoom.addressSet}&zoom=${embedAPI.zoom.range.points}&center=${embedAPI.zoom.insetSet},${embedAPI.zoom.outsetSet}`">
                        </iframe>
                    </div>
                </div>
                <div class="col-12 mb-3 embedStreetview">
                    <div class="store_box">
                        <h5>
                            街景服務 || 3D
                            <span>(沉思者-漫威宇宙12元老之一))</span>
                        </h5>
                        <iframe frameborder="0" 
                                style="border:0"
                                :src="`https://www.google.com/maps/embed/v1/streetview?key=${pay_token}&location=48.8555501,2.3155387&heading=328.46&pitch=30&fov=90`">
                        </iframe>
                    </div>
                </div>
            </div>
            <!-- jsAPI -->
            <h2 class="mb-3">
                <label class="curPoin">
                    Maps JavaScript API <i :class="`fa ${ jsAPI.state ?'fa-minus' : 'fa-plus'}`"></i>
                    <input type="checkbox" v-model="jsAPI.state">
                </label>
            </h2>
            <div class="row" v-if="jsAPI.state">
                <div class="col-12 mb-3">
                    <h5>
                        自訂 / 專屬
                        <span>
                            [創造屬於個人或商家的專屬地圖]-商家icon、拖曳、點擊、資訊框、雙層點擊交換...等
                            <br>
                            (漫威英雄工作所在地)
                        </span>
                    </h5>
                    <google-map-js />
                </div>
            </div>
            <!-- Geolocation API -->
            <h2 class="mb-3">
                <label class="curPoin">
                    Geolocation API <i :class="`fa ${ geolocationAPI.state ?'fa-minus' : 'fa-plus'}`"></i>
                    <input type="checkbox" v-model="geolocationAPI.state">
                </label>
            </h2>
            <div class="row" v-if="geolocationAPI.state">
                <div class="col-12 mb-3">
                    <div class="row justify-content-around text-center">
                        <div class="col-sm-4">
                            <h5>
                                <label class="curPoin">
                                    Google 提供 <i :class="`fa ${ geolocationAPI.use == '1' ? 'fa-ban' : 'fa-plus'}`"></i>
                                    <input type="radio" v-model="geolocationAPI.use" value="1">
                                </label>
                            </h5>
                        </div>
                        <div class="col-sm-4">
                            <p v-if="lat && lng">
                                {{ geolocationAPI.use == '1' ? 'Google' : '瀏覽器' }}
                                提供給妳的目前位址經緯度 
                                <br>
                                {{ lat }}, {{ lng }}
                            </p>
                            <p v-else>尚未抓取到</p>
                        </div>
                        <div class="col-sm-4">
                            <h5>
                                <label class="curPoin">
                                    瀏覽器 提供 <i :class="`fa ${ geolocationAPI.use == '2' ? 'fa-ban' : 'fa-plus'}`"></i>
                                    <input type="radio" v-model="geolocationAPI.use" value="2">
                                </label>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <google-map-geolocation v-if="geolocationAPI.use == '1'"/>
                    <google-map-geolocation-nav v-if="geolocationAPI.use == '2'" />
                </div>
            </div>
            <hr>
            <!-- End -->
            <h2 class="mb-3">
                Google Map API 目前使用價格表參照 <i class="fa fa-hand-o-down"></i>
                <span>(點擊後可放大查看)</span>
            </h2>
            <a :href="require('@/assets/images/pic/pay.png')" target="_blank">
                <img :src="require('@/assets/images/pic/pay.png')" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'    // range input css
    import GoogleMapJs from '@/components/plugins/partials/GoogleMapJs'
    import GoogleMapGeolocation from '@/components/plugins/partials/GoogleMapGeolocation'
    import GoogleMapGeolocationNav from '@/components/plugins/partials/GoogleMapGeolocationNav'
    import { mapGetters } from 'vuex'

    export default {
        name: 'GoogleMap',
        data() {
            return {
                noAPI: false,
                embedAPI: {
                    place: {
                        addressKey: '',
                        addressSet: '',
                    },
                    directions: {
                        originKey: '',
                        originSet: '',
                        destinationKey: '',
                        destinationSet: '',
                        mode: null,
                    },
                    zoom: {
                        addressKey: '',
                        addressSet: '',
                        insetKey: '',
                        insetSet: '',
                        outsetKey: '',
                        outsetSet: '',
                        range: {
                            points: 10,
                            options: {
                                width: 'auto',
                                height: 4,
                                contained: false,
                                direction: 'ltr',
                                min: 0,
                                max: 21,
                            },
                        },
                    },
                    state: false,
                },
                jsAPI: {
                    state: false,
                },
                geolocationAPI: {
                    use: null,
                    state: false,
                },
            }
        },
        components: {
            VueSlider,
            GoogleMapJs,
            GoogleMapGeolocation,
            GoogleMapGeolocationNav,
        },
        computed: {
            ...mapGetters('googleGeolocation', {
                lat: 'googleLat',
                lng: 'googleLng',
            }),
            token() {
                return process.env.VUE_APP_GOOGLE_MAP_ID
            },
            // Set data start
            embed_place_address() {
                return (this.embedAPI.place.addressKey == '' || this.embedAPI.place.addressKey == null) ? 'Brooklyn' : this.embedAPI.place.addressKey
            },
            embed_directions_origin() {
                return (this.embedAPI.directions.originKey == '' || this.embedAPI.directions.originKey == null) ? '9826 La Jolla Farms Rd' : this.embedAPI.directions.originKey
            },
            embed_directions_destination() {
                return (this.embedAPI.directions.destinationKey == '' || this.embedAPI.directions.destinationKey == null) ? 'Burger King, 9500 McGill Way, San Diego, CA 92093美國' : this.embedAPI.directions.destinationKey
            },
            embed_zoom_address() {
                return (this.embedAPI.zoom.addressKey == '' || this.embedAPI.zoom.addressKey == null) ? '711' : this.embedAPI.zoom.addressKey
            },
            embed_zoom_inset() {
                return (this.embedAPI.zoom.insetKey == '' || this.embedAPI.zoom.insetKey == null) ? '40.75' : this.embedAPI.zoom.insetKey
            },
            embed_zoom_outset() {
                return (this.embedAPI.zoom.outsetKey == '' || this.embedAPI.zoom.outsetKey == null) ? '-73.85' : this.embedAPI.zoom.outsetKey
            },
            // Set data end
            pay_token() {
                return process.env.VUE_APP_GOOGLE_MAP_PAY_ID
            },
        },
        methods: {
            // Set data start
            embedPlaceAddressOut() {
                this.embedAPI.place.addressSet = this.embed_place_address
            },
            embedDirectionsOriginOut() {
                this.embedAPI.directions.originSet = this.embed_directions_origin
            },
            embedDirectionsDestinationOut() {
                this.embedAPI.directions.destinationSet = this.embed_directions_destination
            },
            embedZoomAddressOut() {
                this.embedAPI.zoom.addressSet = this.embed_zoom_address
            },
            embedZoomInsetOut() {
                this.embedAPI.zoom.insetSet = this.embed_zoom_inset
            },
            embedZoomOutsetOut() {
                this.embedAPI.zoom.outsetSet = this.embed_zoom_outset
            },
            // Set data end
            embedModeSameReset(val) {
                if (val != this.embedAPI.directions.mode) return false;
                this.embedAPI.directions.mode = null;
            },
        },
        created() {
            this.embedPlaceAddressOut()
            this.embedDirectionsOriginOut()
            this.embedDirectionsDestinationOut()
            this.embedZoomAddressOut()
            this.embedZoomInsetOut()
            this.embedZoomOutsetOut()
        },
    }
</script>

<style lang="scss">
    .vue-slider-process{background-color: #B5B5B5;}
    .vue-slider-dot-handle {border-color: #B5B5B5;}
</style>