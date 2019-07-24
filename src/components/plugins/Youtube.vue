<template>
    <div class="youtube fullHeight">
        <div class="video-background mb-5">
            <div class="video-foreground">
                <iframe src="https://www.youtube.com/embed/HA1nf25wku8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=HA1nf25wku8"
                    allow="autoplay; encrypted-media"
                    frameborder="0"
                    allowfullscreen="1">
                </iframe>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="youListBox">
                        <div class="row youControll mb-4">
                            <div class="col-12 text-center">
                                <h5>搜尋妳想要觀看的影片</h5>
                            </div>
                            <div class="col">
                                <input class="mb-2"
                                    type="text"
                                    placeholder="請搜尋關鍵字: Avengers"
                                    v-model.trim="youListBox.youSearch"
                                    data-vv-name="youSearch"
                                    v-validate="'required'" >
                                <div class="text-danger mb-2" v-if="errors.has('youSearch')">
                                    {{ errors.first('youSearch') }}
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn clickEnter" @click="youtubeSearchAPI()">送出</button>
                            </div>
                        </div>
                        <div class="content" v-if="youListBoxLEN">
                            <paginate name="youListPage" :list="youListBox.youList" ref="paginator">
                                <a  class="row posr youList mb-3"
                                    v-for="(item, index) in paginated('youListPage')"
                                    v-bind:key="index"
                                    :href="`https://www.youtube.com/watch?v=${item.id.videoId}`"
                                    target="_blank"
                                    :title="`開啟新視窗觀看${item.snippet.title}`">
                                    <div class="col-sm-4 mb-2">
                                        <div class="youListCover" :style="`background-image:url(${item.snippet.thumbnails.high.url});`"></div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="youListItem">
                                            <h3 class="title">
                                                <v-clamp autoresize :max-lines="2">
                                                    影片名稱： {{ item.snippet.title }}
                                                </v-clamp>
                                            </h3>
                                            <h6>影片發表於： {{ item.snippet.publishedAt }} </h6>
                                            <p>
                                                <v-clamp autoresize :max-lines="3">
                                                    影片描述：{{ item.snippet.description }}
                                                </v-clamp>
                                            </p>
                                        </div>
                                    </div>
                                    <a href="javascript:;" class="posa subscriberCount" @click="WhoSubscriberCountAPI(item)">
                                        <i class="fa fa-question-circle"></i>
                                    </a>
                                </a>
                            </paginate>
                            <paginate-links for="youListPage" :limit="2" :show-step-links="true" @change="onLangsPageChange"></paginate-links>
                        </div>
                    </div>
                    <h6 v-if="youListBox.youHistory" class="text-center"> 時間紀錄器：{{ youListBox.youHistory }} </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VClamp from 'vue-clamp'
    import { 
        mapActions,
    } from 'vuex';

    export default {
        name: 'Youtube',
        data() {
            return {
                dict: {
                    custom: {
                        youSearch: {
                            required: '請輸入關鍵字'
                        },
                    }
                },
                youListBox: {
                    youSearch: '',
                    youList: [],
                    youHistory: null,
                },
                youPersonal: {
                    channelId: '',
                    channelTitle: '',
                    subscriberCount: '',
                    viewCount: '',
                    state: false,
                },
                paginate: ['youListPage']
            }
        },
        components: {
            VClamp,
        },
        computed: {
            youListBoxLEN() {
                let length = this.youListBox.youList.length
                if (length) {
                    this.pageInit(1)
                    return true
                }
                return false
            },
        },
        methods: {
            ...mapActions('popupModal', ['open', 'close']),
            youPersonalModal(nb) {
                this.$bvModal.show('popup_modal')
                this.open({
                    title: nb == 0 ? '搜尋後點擊 ？ 將有詳細資訊哦' : this.youPersonal.channelTitle,
                    message: nb == 0 ? '' : `作者頻道名稱： ${this.youPersonal.channelTitle}`,
                    message2: nb == 0 ? '' : `頻道訂閱人數： ${this.youPersonal.subscriberCount}`,
                    message3: nb == 0 ? '' : `目前影片觀看人數： ${this.youPersonal.viewCount}`,
                    button1Text: nb == 0 ? '' : '查看',
                    button1Click: ()=>{
                        window.open(`https://www.youtube.com/channel/${this.youPersonal.channelId}`)
                    },
                    button2Text: '關閉',
                    button2Click: ()=>{
                        $('#popup_modal .close').click()
                    },
                    closeShow: false,
                });
            },
            WhoSubscriberCountAPI(item) {
                let url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${item.snippet.channelId}&key=${process.env.VUE_APP_YOUTUBE_ID}`,
                    vm = this;
                axios({
                    method: 'GET',
                    url: url,
                }).then(res => {
                    // 寫入資料存於當頁
                    vm.youPersonal.channelId = res.data.items[0].id;
                    vm.youPersonal.channelTitle = item.snippet.channelTitle;
                    vm.youPersonal.subscriberCount = res.data.items[0].statistics.subscriberCount;
                    vm.youPersonal.viewCount = res.data.items[0].statistics.viewCount;
                    vm.youPersonal.state = true;
                    // 寫入共用 Modal 並存於 Vuex
                    vm.youPersonalModal(1)
                    cl('WhoSubscriberCountAPI', res)
                }).catch(err => {
                    cl('WhoSubscriberCountAPI', err)
                })
            },
            youtubeSearchAPI() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let vm = this,
                            total = 30,
                            url = `https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=${process.env.VUE_APP_YOUTUBE_ID}&part=snippet&q=${vm.youListBox.youSearch}&type=video&videoCaption=closedCaption&maxResults=${total}`;
                        axios({
                            method: 'GET',
                            url: url,
                        }).then(res => {
                            vm.youListBox.youHistory = res.headers.date
                            vm.asciiChange(res.data.items ,vm)
                            cl('youtubeSearchAPI', res)
                        }).catch(err => {
                            cl('youtubeSearchAPI', err)
                            alert('別鬧，配額沒了拉！得等我新開專案再接一次了...')
                        })
                    }
                });
            },
            // 特殊符號轉換
            asciiChange(arr, vm) {
                let newArr = [...arr],
                    _title = arr.map(item => {
                        return item.snippet.title
                    })
                for (let i in _title) {
                    _title[i] = _title[i].replace(/&quot;/g, '"')
                }
                for (let i in _title) {
                    _title[i] = _title[i].replace(/&amp;/g, '&')
                }
                for (let i in _title) {
                    _title[i] = _title[i].replace(/&#39;/g, "'")
                }
                for (let data in newArr) {
                    newArr[data].snippet.title = _title[data]
                }
                vm.youListBox.youList = newArr;
            },
            // 頁碼
            pageInit(toPage) {
                this.$router.push({ name: 'plugins.youtube.page', params:{page: toPage} });
            },
            onLangsPageChange(toPage) {
                this.pageInit(toPage)
            },
        },
        created() {
            this.$validator.localize('zh_TW', this.dict);
            this.youPersonalModal(0)
        },
        watch: {
            $route(now, to, from) {
                if (!this.paginate.youListPage.list.length) {
                    this.$router.push({ name: 'plugins.youtube', params:{page: ''} });
                } else {
                    let params = parseInt(now.params.page),
                        nowPage = this.paginate.youListPage.page + 1,
                        allPage = this.$refs.paginator.lastPage;
                    if (params > allPage) params = allPage;
                    if (params <= 0 || isNaN(params)) params = 1;
                    if (params != nowPage) {
                        this.$refs.paginator.goToPage(params);
                        this.pageInit(params)
                    }
                    cl('params', params, 'nowPage', nowPage, 'length', allPage)
                }
            },
        },
    }
</script>
