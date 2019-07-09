<template>
    <div class="loading_box" :style="style">
        <div class="loading"></div>
        <div class="loading_text">loading</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
            ...mapGetters('loading', ['display']),
            style() {
                if (this.display) {
                    return {};
                }
                
                return { display: 'none' };
            },
        }
    }
</script>