let log = process.env.VUE_APP_LOG;
/* eslint-disable */
global.cl = (...arg) => {       // 一般
    if (log === 'true') {
        console.log(...arg)
    }
}

global.clTb = (...arg) => {     // 將數據以表格的形式顯示
    if (log === 'true') {
        console.table(...arg)
    }
}

global.clDir = (...arg) => {    // 打印出該對象的所有屬性和屬性值
    if (log === 'true') {
        console.dir(...arg)
    }
}