<template>
    <div class="language_box fullHeight">
        <div class="container">
            <div class="language_content row align-items-center pt-5">
                <div class="col-12 align-self-start">
                    <div class="google_language_box">
                        <h5>
                            Google 簡易翻譯
                            <br>
                            <span>(跟妳點右鍵沒啥兩樣，只是多了些選擇，連同語言包也全部翻譯)</span>
                        </h5>
                        <div class="google_language" id="google_translate_element"></div>
                    </div>
                </div>
                <div class="col-12 align-self-end">
                    <div class="i18n">
                        <h5>
                            語言包-「可自定義」
                            <br>
                            <span>(目前只針對首頁與頁首做翻譯-無需重整)</span>
                        </h5>
                        <b-nav>
                            <b-nav-item-dropdown :text="currentLang" right>
                                <b-dropdown-item @click="changeLang(item.id)" v-for="(item, index) in lang" v-bind:key="index">{{ item.name }}</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Lang from '@/mixins/Lang'

    export default {
        name: 'I18N',
        mixins: [
            Lang,
        ],
        methods: {
            googleTranslateInit() {
                let checkIfGoogleLoaded = setInterval(() => {
                    if (google.translate.TranslateElement != null) {
                        clearInterval(checkIfGoogleLoaded);
                        this.googleLanguage('google_translate_element');
                    }
                }, 1000);
            },
            googleLanguage(id) {
                new google.translate.TranslateElement({
                    pageLanguage: 'zh-TW',
                    includedLanguages: 'en,ja,ko,tl,vi,zh-TW',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, id)
            },
        },
        mounted() {
            this.$nextTick(()=>{
                this.googleTranslateInit();
            })
        },
    }
</script>

