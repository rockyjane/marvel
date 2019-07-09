<template>
    <div class="strips">
        <article class="strips__strip" :id="`strip${index}_${stripIndex}`" v-for="(itemContent, stripIndex) in itemList.stripContent"
            v-bind:key="stripIndex">
            <div class="strip__content"
                 @click="openFull(tileLink, tileText, stripClose, stripIndex, index)"
                 :style="`background-image:url(${itemContent.cover});`">
                <h2 class="strip__title">{{ itemContent.name }}</h2>
                <div class="strip__inner-text">
                    <h2>{{ itemContent.nickName }}</h2>
                    <p>{{ itemContent.intro }}</p>
                    <!-- <p>
                        <a :href="itemContent.link" target="_blank"><i class="fa fa-twitter"></i></a>
                    </p> -->
                </div>
            </div>
            <i class="fa fa-close strip__close"
                @click="closeFull(tileLink, tileText, stripClose, stripIndex, index)"></i>
        </article>
    </div>
</template>

<script>
    export default {
        name: 'strips',
        props: {
            itemList: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                expanded: false,
            }
        },
        computed: {
            tile() {
                return $('.strips__strip');
            },
            tileLink() {
                return $('.strips > .strips__strip > .strip__content');
            },
            tileText() {
                return this.tileLink.find('.strip__inner-text');
            },
            stripClose() {
                return $('.strips__strip > .strip__close');
            },
        },
        methods: {
            openFull(tileLink, tileText, stripClose, stripIndex, index) {
                if (stripIndex == 2 || $('html, body').hasClass('o-hidden')) return
                let _this = tileLink.parent(),
                    tileWho = $(_this[stripIndex]),
                    tileWhoBoxs = $(_this.parent()[index]),
                    tile = $(`.${tileWhoBoxs.attr('class')}`).eq(index).children(`.${tileWho.attr('class')}`)
                    .eq(stripIndex),
                    stripDoClose = tile.children('i'),
                    $html = $('html, body'),
                    rwdTargetId = tile.attr('id'),
                    nav_h = $('.nav').outerHeight(true)

                // 如果是 RWD start
                if ($(window).width() < 768) {
                    $html.animate({
                        scrollTop: $(`#${rwdTargetId}`).offset().top - nav_h
                    }, 500);
                    $html.addClass('o-hidden');
                }
                // 如果是 RWD end

                if (!this.expanded) {
                    tile.addClass('strips__strip--expanded');
                    // add delay to inner text
                    tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
                    stripDoClose.addClass('strip__close--show');
                    stripDoClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
                    this.expanded = true;
                }
            },
            closeFull(tileLink, tileText, stripClose, stripIndex, index) {
                let _this = tileLink.parent(),
                    tileWho = $(_this[stripIndex]),
                    tileWhoBoxs = $(_this.parent()[index]),
                    tile = $(`.${tileWhoBoxs.attr('class')}`).eq(index).children(`.${tileWho.attr('class')}`)
                    .eq(stripIndex),
                    stripDoClose = tile.children('i')

                if (tile.length == 0 && stripDoClose.length == 0) {
                    let nowThis = $('.strips').eq(0)
                    tile = nowThis.children().eq(stripIndex)
                    stripDoClose = tile.children('i')
                }

                if (this.expanded) {
                    tile.removeClass('strips__strip--expanded');
                    // remove delay from inner text
                    tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
                    stripDoClose.removeClass('strip__close--show');
                    stripDoClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
                    this.expanded = false;
                }
                $('html, body').removeClass('o-hidden');
            },
        },
    }
</script>
