import jsonBinApi from '@/api/jsonbin.io';
import changeMarvel from '@/mixins/changeMarvel'
import {
    mapMutations,
} from 'vuex';

export default {
    data() {
        return {
            fakeCouple: [],
        }
    },
    mixins: [
        changeMarvel,
    ],
    methods: {
        // 改變資料進 Vuex
        ...mapMutations('marvel', [
            'setMarvel',
            'setMarvelLen',
        ]),
        // 抓取資料
        byJsonBinGet() {
            jsonBinApi.byJsonBinGetMarvelCouple((res)=>{
                this.setMarvel(res);
                this.setMarvelLen(res.length);
                this.fakeCouple = [...res];
                this.changeMarvelApiSingle(res);
            })
        },
    },
    created() {
        this.byJsonBinGet();
    },
}