<template>
    <div class="zoomBox fullHeight">
        <vue-photo-zoom-pro
            :url="zoomUrl"
            :type="zoomType"
            :scale="zoomScale"
            :width="zoomWidth">
        </vue-photo-zoom-pro>
        <input type="text" class="store_input mt-5" v-model="set_url" placeholder="請傳入妳想看的圖片網址">
    </div>
</template>

<script>
    export default {
        name: 'PhotoZoom',
        data() {
            return {
                set_url: '',
            }
        },
        computed: {
            zoomUrl() {
                let set = 'https://i.imgur.com/Tg6drXP.jpg'
                if (!this.set_url == '') set = this.set_url
                return set
            },
            zoomType() {
                return this.windowWidth ? 'square' : 'circle'
            },
            zoomScale() {
                return this.windowWidth ? 6 : 4
            },
            zoomWidth() {
                return this.windowWidth ? 80 : 100
            },
            windowWidth() {
                return $(window).width() < 768
            },
        },
        created() {
            $(function () {
                $('.img-container img').bind('error', function (el) {
                    let e = el.type,
                        url = 'https://i.imgur.com/Tg6drXP.jpg'
                    switch(e){
                        case 'error':
                            $(this).attr('src', url);
                        break;
                    }
                });
            });
        }
    }
</script>

