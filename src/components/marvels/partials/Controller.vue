<template>
    <div class="controllerBox posr">
        <input id="nextCheck" type="checkbox" v-model="nextCheck">
        <div class="controller">
            <label for="nextCheck" class="posa"></label>
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 pt-5 pb-5">
                        <div class="row justify-content-between">
                            <div class="col-sm-6">
                                <div class="row name">
                                    <div class="col-auto pt-2">
                                        丈夫姓名：
                                    </div>
                                    <div class="col">
                                        <input class="mb-2"
                                            type="text"
                                            placeholder="Jane"
                                            v-model.trim="coupleInput.husband"
                                            data-vv-name="husband"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has('husband')">
                                            {{ errors.first('husband') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row nameNick">
                                    <div class="col-auto pt-2">
                                        丈夫綽號：
                                    </div>
                                    <div class="col">
                                        <input class="mb-2"
                                            type="text"
                                            placeholder="Juan lover"
                                            v-model.trim="coupleInput.husbandNickname"
                                            data-vv-name="husbandNickname"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has('husbandNickname')">
                                            {{ errors.first('husbandNickname') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row intro">
                                    <div class="col-12">
                                        <label>丈夫資訊：</label>
                                        <textarea class="store_textarea mb-2"
                                                placeholder="731"
                                                v-model.trim="coupleInput.husbandIntro"
                                                data-vv-name="husbandIntro"
                                                v-validate="'required'"></textarea>
                                        <div class="text-danger mb-2" v-if="errors.has('husbandIntro')">
                                            {{ errors.first('husbandIntro') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row abItemBox">
                                    <div class="col-12 mb-3">
                                        丈夫能力：
                                        <button class="btn clickEnter mr-2" @click="addAbilitie('husband')">獲得</button>
                                        <button class="btn clickEnter" @click="resAbilitie('husband')">遺忘</button>
                                    </div>
                                    <label v-for="(item, index) in coupleInput.husbandAbilities" v-bind:key="index" class="col-sm-6">
                                        <input type="text"
                                            v-model.trim="coupleInput.husbandAbilities[index]"
                                            placeholder="Learning"
                                            :data-vv-name="`husbandAbilities${index}`"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has(`husbandAbilities${index}`)">
                                            {{ errors.first(`husbandAbilities${index}`) }}
                                        </div>
                                    </label>
                                </div>
                                <up-file-box v-model="coupleInput.husbandCover"
                                            type="file"
                                            v-validate="'required'"
                                            :error="errors.first('husbandCover')"
                                            data-vv-name="husbandCover"
                                            :upId="'husbandCover'"
                                            :title="'丈夫的照片'" />
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-auto pt-2">
                                        妻子姓名：
                                    </div>
                                    <div class="col">
                                        <input class="mb-2"
                                            type="text"
                                            placeholder="Juan"
                                            v-model.trim="coupleInput.wife"
                                            data-vv-name="wife"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has('wife')">
                                            {{ errors.first('wife') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto pt-2">
                                        妻子綽號：
                                    </div>
                                    <div class="col">
                                        <input class="mb-2"
                                            type="text"
                                            placeholder="Jane lover"
                                            v-model.trim="coupleInput.wifeNickname"
                                            data-vv-name="wifeNickname"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has('wifeNickname')">
                                            {{ errors.first('wifeNickname') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row intro">
                                    <div class="col-12">
                                        <label>妻子資訊：</label>
                                        <textarea class="store_textarea mb-2"
                                                placeholder="523"
                                                v-model.trim="coupleInput.wifeIntro"
                                                data-vv-name="wifeIntro"
                                                v-validate="'required'"></textarea>
                                        <div class="text-danger mb-2" v-if="errors.has('wifeIntro')">
                                            {{ errors.first('wifeIntro') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row abItemBox">
                                    <div class="col-12 mb-3">
                                        妻子能力：
                                        <button class="btn clickEnter mr-2" @click="addAbilitie('wife')">獲得</button>
                                        <button class="btn clickEnter" @click="resAbilitie('wife')">遺忘</button>
                                    </div>
                                    <label v-for="(item, index) in coupleInput.wifeAbilities" v-bind:key="index" class="col-sm-6">
                                        <input type="text"
                                            v-model.trim="coupleInput.wifeAbilities[index]"
                                            placeholder="Healing"
                                            :data-vv-name="`wifeAbilities${index}`"
                                            v-validate="'required'">
                                        <div class="text-danger mb-2" v-if="errors.has(`wifeAbilities${index}`)">
                                            {{ errors.first(`wifeAbilities${index}`) }}
                                        </div>
                                    </label>
                                </div>
                                <up-file-box v-model="coupleInput.wifeCover"
                                            type="file"
                                            v-validate="'required'"
                                            :error="errors.first('wifeCover')"
                                            data-vv-name="wifeCover"
                                            :upId="'wifeCover'"
                                            :title="'妻子的照片'" />
                            </div>
                            <div class="col-12">
                                <div class="row justify-content-center">
                                    <div class="col-6 col-sm-3">
                                        <a id="testAtag" class="btn clickEnter" href="javascript:;"
                                            @click="byJsonBinSubmit(coupleIndex + 1)">送出</a>
                                    </div>
                                    <div class="col-6 col-sm-3">
                                        <a class="btn clickEnter" href="javascript:;" @click="resetCoupleInput">取消</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marvelApi from '@/api/marvel';
    import imgurApi from '@/api/imgur';
    import jsonBin from '@/mixins/jsonBin.io';
    import jsonBinApi from '@/api/jsonbin.io';

    import UpFileBox from '@/components/partials/StoreBox/UpFileBox';
    import zh_TW from 'vee-validate/dist/locale/zh_TW';

    export default {
        name: 'controller',
        props: {
            // couple: {
            //     type: Array,
            //     required: true,
            // },
            coupleIndex: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                dict: {
                    custom: {
                        husband: {
                            required: '請輸入丈夫姓名'
                        },
                        husbandNickname: {
                            required: '請輸入丈夫綽號'
                        },
                        husbandCover: {
                            required: '請上傳丈夫照片'
                        },
                        husbandIntro: {
                            required: '請輸入丈夫資訊'
                        },
                        wife: {
                            required: '請輸入妻子姓名'
                        },
                        wifeNickname: {
                            required: '請輸入妻子綽號'
                        },
                        wifeCover: {
                            required: '請上傳妻子照片'
                        },
                        wifeIntro: {
                            required: '請輸入妻子資訊'
                        },
                    }
                },
                coupleInput: {
                    husband: '',
                    husbandNickname: '',
                    husbandCover: null,
                    husbandIntro: '',
                    husbandAbilities: [],
                    wife: '',
                    wifeNickname: '',
                    wifeCover: null,
                    wifeIntro: '',
                    wifeAbilities: [],
                    id: null
                },
                nextCheck: true,
            }
        },
        mixins: [
            jsonBin,
        ],
        watch: {
            'coupleInput.husbandCover': function(value) {
                if (value) {
                    cl('有東西')
                } else {
                    cl('沒東西')
                }
            },
            'nextCheck': function(value) {
                if (value) {
                    window.scrollTo(0, 0);
                }
            },
        },
        components: {
            UpFileBox,
        },
        methods: {
            byJsonBinSubmit(index) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.coupleInput.id = index;
                        let {
                            husband,
                            husbandNickname,
                            husbandCover,
                            husbandIntro,
                            husbandAbilities,
                            wife,
                            wifeNickname,
                            wifeCover,
                            wifeIntro,
                            wifeAbilities,
                            id
                        } = this.coupleInput;
                        this.fakeCouple.push(this.coupleInput)
                        jsonBinApi.byJsonBinPutMarvelCouple(this.fakeCouple, (res)=>{
                            this.fakeCouple = []
                            this.resetCoupleInput()
                            this.byJsonBinGet()
                        }, (err)=>{
                            this.fakeCouple = []
                            this.resetCoupleInput()
                        });
                    }
                });
            },
            resetCoupleInput() {
                this.coupleInput = {
                    husband: '',
                    husbandNickname: '',
                    husbandCover: null,
                    husbandIntro: '',
                    husbandAbilities: [],
                    wife: '',
                    wifeNickname: '',
                    wifeCover: null,
                    wifeIntro: '',
                    wifeAbilities: [],
                    id: null
                }
                this.errors.clear();
                this.nextCheck = true
            },
            addAbilitie(who) {
                if (who === 'husband') this.coupleInput.husbandAbilities.push('');
                if (who === 'wife') this.coupleInput.wifeAbilities.push('');
            },
            resAbilitie(who) {
                if (who === 'husband') this.coupleInput.husbandAbilities = [];
                if (who === 'wife') this.coupleInput.wifeAbilities = [];
            },
            // josnbin.org server 壞掉，改用 josnbin.io，以下廢除至作者修復 --- start
            // submitCoupleApi(index) {
            //     this.$validator.validateAll().then((result) => {
            //         if (result) {
            //             this.coupleInput.id = index;
            //             let {
            //                 husband,
            //                 husbandNickname,
            //                 husbandCover,
            //                 husbandIntro,
            //                 husbandAbilities,
            //                 wife,
            //                 wifeNickname,
            //                 wifeCover,
            //                 wifeIntro,
            //                 wifeAbilities,
            //                 id
            //             } = this.coupleInput
            //                 // method = 'patch',
            //                 // data;

            //             // if (!husband || !wife || !id) {
            //             //     alert('尚未完整填寫')
            //             //     return
            //             // }
            //             if (!husbandCover || !wifeCover) {
            //                 alert('伴侶未配對成功，失敗上陣')
            //                 this.coupleInput = {
            //                     husband: `路人丈夫${index}`,
            //                     husbandCover: 'https://image.shutterstock.com/image-vector/businessman-icon-450w-564112600.jpg',
            //                     wife: `路人妻子${index}`,
            //                     wifeCover: 'https://image.shutterstock.com/image-vector/business-woman-icon-avatar-symbol-450w-790518412.jpg',
            //                 }
            //             }

            //             marvelApi.patchMarvelCouple({
            //                 husband,
            //                 husbandNickname,
            //                 husbandCover,
            //                 husbandIntro,
            //                 husbandAbilities,
            //                 wife,
            //                 wifeNickname,
            //                 wifeCover,
            //                 wifeIntro,
            //                 wifeAbilities,
            //                 id
            //             } ,(res)=>{
            //                 cl('OKOK', res)
            //                 this.resetCoupleInput()
            //             })

            //             // 若是使用 jsonbin server 要改成 patch 才是真正的新增，它的 post 是整筆換
            //             // 以下已改成 Vue 形式來串 api
            //             // if (method == 'post') {
            //             //     // post
            //             //     this.couple.push(this.coupleInput)
            //             //     data = this.couple
            //             // } else if (method == 'patch') {
            //             //     // patch
            //             //     data = this.coupleInput
            //             // } else {
            //             //     return
            //             // }
            //             // axios({
            //             //         method: method,
            //             //         url: `${apiUrl}`,
            //             //         headers: headersObj,
            //             //         data: data
            //             //     })
            //             //     .then((res) => {
            //             //         this.getCoupleApi()
            //             //         this.resetCoupleInput()
            //             //         cl(method, 'ok')
            //             //     }, (err) => {
            //             //         cl(method, err.status)
            //             // });
            //         }
            //     });
            // },
            // josnbin.org server 壞掉，改用 josnbin.io，以下廢除至作者修復 --- end
        },
        created() {
            this.$validator.localize('zh_TW', this.dict);
        },
    }
</script>
