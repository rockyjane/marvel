<template>
    <section class="marvel fullHeight">
        <controller :coupleIndex="coupleLEN"/>
        <div class="text-center mb-4">
            <h3>Disassembly && Combination</h3>
            <h5>- The same api, loaded in different forms -</h5>
        </div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="一對" active>
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <couple-tem v-for="(item,index) in coupleED"
                                        v-bind:key="index" :item="item" 
                                        :index="index"/>
                                        <!-- @give="updateFake($event)" -->
                        </div>
                    </div>
                </b-tab>
                <b-tab title="單獨">
                    <div class="container">
                        <div class="card-box posr">
                            <card-list-tem v-for="(item, index) in cardListED" v-bind:key="index" :item="item"/>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="鄰居">
                    <div class="stripsBox">
                        <strips-tem v-for="(itemList, index) in stripBoxED" v-bind:key="index" :itemList="itemList" :index="index"/>
                    </div>
                </b-tab>
            </b-tabs>
        </b-card>
    </section>
</template>

<script>
    // let apiUrl = 'https://jsonbin.org/apiusejson/marvel/couple',
    //     token = '4c9da477-3408-4cce-81fd-f9894223b06d',
    //     headersObj = {
    //         'Authorization': `token ${token}`,
    //         'Content-Type': 'application/json',
    //     }
    // import axios from 'axios'
    // import _ from 'lodash'
    // import marvelApi from '@/api/marvel';
    import {
        mapActions,
        mapGetters,
    } from 'vuex';

    import Controller from '@/components/marvels/partials/Controller'
    import CoupleTem from '@/components/marvels/partials/Couple'
    import CardListTem from '@/components/marvels/partials/CardList'
    import StripsTem from '@/components/marvels/partials/Strips'

    export default {
        name: 'Marvel',
        data() {
            return {
                couple: [],
                coupleIndex: 0,
                cardList: [{
                        nickName: 'STARTING UP',
                        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Pt3S5PNPlK-bw6_Na4-R77s0rAjOcnffNb4uO2l9wG22bYeQ',
                        intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
                        abilities: ['1 Domain', 'Email Suppart', '200GB Cloud Space'],
                    }, {
                        nickName: 'GROWING BUSINES',
                        cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/d9/10/80/d91080b3-e752-afcc-9411-210dbd5b10ce/cover-.jpg/600x600bf.png',
                        intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
                        abilities: ['10 Domain', 'Email and Phone Support', '500GB Cloud Space'],
                    }, {
                        nickName: 'STARTING UP',
                        cover: 'https://i1.jpopasia.com/assets/1/20-hyuna-0rxg.jpg',
                        intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
                        abilities: ['100 Domain', '24/7 Email and Phone Support', 'Unlimited Clous Space'],
                    }, {
                        nickName: 'GROWING BUSINES',
                        cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/d9/10/80/d91080b3-e752-afcc-9411-210dbd5b10ce/cover-.jpg/600x600bf.png',
                        intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
                        abilities: ['10 Domain', 'Email and Phone Support', '500GB Cloud Space'],
                    },
                ],
                stripBox: [{
                        stripContent: [{
                            name: 'Awesome',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Words',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Go',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Inside',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Here',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, ],
                        id: 0
                    }, {
                        stripContent: [{
                            name: 'Awesome',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Words',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Go',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Inside',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Here',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, ],
                        id: 1
                    }, {
                        stripContent: [{
                            name: 'Awesome',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Words',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Go',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Inside',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, {
                            name: 'Here',
                            nickName: 'Ettrics',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!',
                            cover: 'https://twitter.com/ettrics',
                        }, ],
                        id: 2
                    }
                ],
            }
        },
        components: {
            Controller,
            CoupleTem,
            CardListTem,
            StripsTem,
        },
        computed: {
            ...mapGetters('marvel', {
                couple2: 'marvel',   // 若是要存在 VueX ， data() 裡就不能有相同的名稱，但單純只有 [拿] 的功能
                cardList2: 'marvelCard',
                stripBox2: 'marvelStrip',
            }),
            coupleED() {
                return this.couple2.length ? this.couple2 : this.couple
            },
            coupleLEN() {
                return this.couple2.length ? this.couple2.length : this.couple.length
            },
            cardListED() {
                return this.cardList2.length ? this.cardList2 : this.cardList
            },
            stripBoxED() {
                return this.stripBox2.length ? this.stripBox2 : this.stripBox
            },
        },
        // methods: {
        //     // API event
        //     // josnbin.org server 壞掉，改用 josnbin.io，以下廢除至作者修復 --- start
        //     // 抓取資料進 Vuex
        //     ...mapActions('marvel', [
        //         'getMarvelCoupleApi_ByVueX'
        //     ]),
        //     getMarvelCoupleApi_ByVue() {
        //         marvelApi.getMarvelCouple((res)=>{
        //             this.couple = res;
        //             this.coupleIndex = res.length;
        //             // cl('get', this.coupleIndex)
        //             // clTb(this.couple)
        //             // clDir(document.getElementById('testAtag'))
        //             let GroupBy = _.groupBy(res, (item) => item.id)
        //             // cl('GroupBy',GroupBy)

        //             // this.changeMarvelApiNeighbor(res)
        //             this.changeMarvelApiSingle(res)
        //         })
        //     },
        //     // 純打 axios
        //     // 修改資料
        //     putOpenApi() {
        //         axios.put(`${apiUrl}/_perms`, {
        //                 headers: headersObj
        //             })
        //             .then((res) => {
        //                 cl('put 開啟 yes')
        //             }, (err) => {
        //                 cl('put 開啟 no')
        //             });
        //     },
        //     // 刪除資料
        //     deleteOpenApi() {
        //         axios.delete(`${apiUrl}/_perms`, {
        //                 headers: headersObj
        //             })
        //             .then((res) => {
        //                 cl('delete 關閉 yes')
        //             }, (err) => {
        //                 cl('delete 關閉 no')
        //             });
        //     },
        //     // 抓取資料
        //     getMarvelCoupleApi_ByAxios() {
        //         axios.get(apiUrl, {
        //                 headers: headersObj
        //             })
        //             .then((res) => {
        //                 this.couple = res.data;
        //                 this.coupleIndex = res.data.length;
        //                 cl('get', this.coupleIndex)
        //                 clTb(this.couple)
        //                 clDir(document.getElementById('testAtag'))

        //                 let GroupBy = _.groupBy(res.data, (item) => item.id)
        //                 let takeHusband = res.data.map(item => item.husband)
        //                 cl(takeHusband, 'key', GroupBy)
        //             }, (err) => {
        //                 var err = res.status
        //                 cl('get', err)
        //             });
        //     },
        //     // josnbin.org server 壞掉，改用 josnbin.io，以上廢除至作者修復 --- end
        // },
    }
</script>
