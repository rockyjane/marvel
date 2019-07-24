<template>
    <div v-if="show" class="popup_modal_box">
        <b-modal ref="modal" id="popup_modal" :title="title" hide-footer centered size="md">
            <div class="popup_content">
                <div class="panel">
                    <p>{{ message }}</p>
                    <p>{{ message2 }}</p>
                    <p>{{ message3 }}</p>
                </div>
                <div class="btn-row" style="text-align: center;">
                    <button v-if="button1Text" @click.prevent="button1Click" class="btn clickEnter mr-2">{{ button1Text }}</button>
                    <button v-if="button2Text" @click.prevent="button2Click" class="btn clickEnter ml-2">{{ button2Text }}</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import { 
        mapGetters,
        mapActions,
    } from 'vuex';

    export default {
        name: 'PopupModal',
        props:{
            show:{
                type: Boolean,
                default(){
                    return false
                }
            },
        },
        computed:{
            ...mapGetters('popupModal', [
                'title',
                'message',
                'message2',
                'message3',
                'button1Text',
                'button2Text',
                'button1Click',
                'button2Click',
                'closeShow',
            ])
        },
        methods:{
            ...mapActions('popupModal', [
                'open',
                'close',
            ]),
        }
    }
</script>

