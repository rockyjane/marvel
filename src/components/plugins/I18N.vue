<template>
    <div class="language_box fullHeight">
        <div class="google_language_box">
            <h5>Google 簡易翻譯</h5>
            <div class="google_language" id="google_translate_element"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'I18N',
        methods: {
            googleLanguage() {
                new google.translate.TranslateElement({
                    pageLanguage: 'zh-TW',
                    includedLanguages: 'en,ja,ko,tl,vi,zh-TW',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element')
            },
        },
        beforeMount() {
            this.$nextTick(()=>{
                this.googleLanguage();
            })
        },  
    }
</script>

