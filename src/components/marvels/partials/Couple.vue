<template>
    <div class="col-sm-6">
        <div class="couple coupleFake mb-3" v-if="!fixInfo">
            <div class="row">
                <div class="col-12 mb-3 text-center">
                    <div class="number">第 {{ item.id }} 對</div>
                </div>
                <div class="col-6 mb-4">
                    <div class="item">
                        <p class="text-center">{{ item.husband }}</p>
                        <div class="cover" :style="`background-image:url(${item.husbandCover});`"></div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="item">
                        <p class="text-center">{{ item.wife }}</p>
                        <div class="cover" :style="`background-image:url(${item.wifeCover});`"></div>
                    </div>
                </div>
                <div class="col-6 offset-6 mb-3">
                    <div class="item" v-if="!counting">
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a href="javascript:;" class="btn clickEnter editCouple" @click="editCouple(true)">修改</a>
                            </div>
                            <div class="col-6">
                                <a href="javascript:;" class="btn clickEnter deleteCouple" @click="deleteCoupleApi">刪除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="couple coupleForm mb-3" v-if="fixInfo">
            <div class="row">
                <div class="col-12 mb-3 text-center">
                    <div class="number">第 {{ item.id }} 對</div>
                </div>
                <div class="col-6">
                    <div class="item">
                        <input class="mb-4"
                               type="text"
                               :placeholder="item.husband"
                               v-model.trim="coupleForm.husband"
                               data-vv-name="coupleFormHusband"
                               v-validate="'required'">
                        <div class="text-danger mb-2" v-if="errors.has('coupleFormHusband')">
                            {{ errors.first('coupleFormHusband') }}
                        </div>
                        <up-file-box v-model="coupleForm.husbandCover"
                                     type="file"
                                     v-validate="'required'"
                                     :error="errors.first('coupleFormHusbandCover')"
                                     data-vv-name="coupleFormHusbandCover"
                                     :upId="'coupleFormHusbandCover'"
                                     :title="'丈夫的照片'"
                                     :style="`background-image:url(${item.husbandCover});`" />
                    </div>
                </div>
                <div class="col-6">
                    <div class="item">
                        <input class="mb-4"
                               type="text"
                               :placeholder="item.wife"
                               v-model.trim="coupleForm.wife"
                               data-vv-name="coupleFormWife"
                               v-validate="'required'">
                        <div class="text-danger mb-2" v-if="errors.has('coupleFormWife')">
                            {{ errors.first('coupleFormWife') }}
                        </div>
                        <up-file-box v-model="coupleForm.wifeCover"
                                     type="file"
                                     v-validate="'required'"
                                     :error="errors.first('coupleFormWifeCover')"
                                     data-vv-name="coupleFormWifeCover"
                                     :upId="'coupleFormWifeCover'"
                                     :title="'妻子的照片'"
                                     :style="`background-image:url(${item.wifeCover});`" />
                    </div>
                </div>
                <div class="col-6 offset-6 mb-3">
                    <div class="item">
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a href="javascript:;" class="btn clickEnter editApi" @click="submitEditApi()">確定</a>
                            </div>
                            <div class="col-6">
                                <a href="javascript:;" class="btn clickEnter editClose" @click="editCouple(false)">放棄</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jsonBinApi from '@/api/jsonbin.io';
    import changeMarvel from '@/mixins/changeMarvel'
    import {
        mapMutations,
    } from 'vuex';

    import UpFileBox from '@/components/partials/StoreBox/UpFileBox';

    export default {
        name: 'couple',
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                dict: {
                    custom: {
                        coupleFormHusband: {
                            required: '請輸入丈夫姓名'
                        },
                        coupleFormHusbandCover: {
                            required: '請上傳丈夫照片'
                        },
                        coupleFormWife: {
                            required: '請輸入妻子姓名'
                        },
                        coupleFormWifeCover: {
                            required: '請上傳妻子照片'
                        },
                    }
                },
                coupleForm: {},
                fixInfo: false,
            }
        },
        mixins: [
            changeMarvel
        ],
        components: {
            UpFileBox,
        },
        computed: {
            counting() {
                return this.item.id < 5
            },
        },
        methods: {
            ...mapMutations('marvel', [
                'setMarvel',
                'setMarvelLen',
            ]),
            setDefault() {
                this.$set(this.coupleForm, 'husband', '');
                this.$set(this.coupleForm, 'husbandCover', null);
                this.$set(this.coupleForm, 'wife', '');
                this.$set(this.coupleForm, 'wifeCover', null);
                this.$set(this.coupleForm, 'id', this.item.id);
            },
            editCouple(action) {
                this.fixInfo = action;
                this.$nextTick(() => {
                    this.setDefault();
                })
            },
            submitEditApi() {
                // this.$emit('give', this.coupleForm)
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        jsonBinApi.byJsonBinGetMarvelCouple((res)=>{
                            let fackGroup = [...res]
                            fackGroup[this.coupleForm.id - 1].husband = this.coupleForm.husband
                            fackGroup[this.coupleForm.id - 1].husbandCover = this.coupleForm.husbandCover
                            fackGroup[this.coupleForm.id - 1].wife = this.coupleForm.wife
                            fackGroup[this.coupleForm.id - 1].wifeCover = this.coupleForm.wifeCover
                            jsonBinApi.byJsonBinPutMarvelCouple(fackGroup, (res)=>{
                                this.setMarvel(res.data)
                                this.setMarvelLen(res.data.length)
                                this.changeMarvelApiSingle(res.data)
                                this.editCouple(false)
                            });
                        })
                    }
                });
            },
            deleteCoupleApi() {
                this.setDefault();
                if (confirm('刪除後將無法復原哦') && confirm("確定要刪除？")) {
                    jsonBinApi.byJsonBinGetMarvelCouple((res)=>{
                        let fackGroup = res,
                            // eslint-disable-next-line
                            remove = fackGroup.splice(this.coupleForm.id - 1, 1)
                        for(let data in fackGroup) {
                            fackGroup[data].id = (parseInt(data, 10) + 1);
                        }
                        jsonBinApi.byJsonBinPutMarvelCouple(fackGroup, (res)=>{
                            this.setMarvel(res.data)
                            this.setMarvelLen(res.data.length)
                            this.changeMarvelApiSingle(res.data)
                        });
                    })
                }
            },
        },
        created() {
            this.$validator.localize('zh_TW', this.dict);
        },
    }
</script>

