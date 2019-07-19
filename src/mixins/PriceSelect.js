export default {
    methods: {
        // 計算價格國碼後給予逗號
        Price(value) {
            let val = (value/1).toFixed(0)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
    },
}