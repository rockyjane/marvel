import {
    mapMutations,
} from 'vuex';

export default {
    methods: {
        ...mapMutations('marvel', [
            'setMarvelCardList',
            'setMarvelStripBox',
        ]),
        changeMarvelApiSingle(res) {
            let takeHusband = res.map(item => item.husband),
                takeHusbandNick = res.map(item => item.husbandNickname),
                takeHusbandCover = res.map(item => item.husbandCover),
                takeHusbandIntro = res.map(item => item.husbandIntro),
                takeHusbandAb = res.map(item => item.husbandAbilities),
                takeWife = res.map(item => item.wife),
                takeWifeNick = res.map(item => item.wifeNickname),
                takeWifeCover = res.map(item => item.wifeCover),
                takeWifeIntro = res.map(item => item.wifeIntro),
                takeWifeAb = res.map(item => item.wifeAbilities)

            let singleBoxArr = new Array,
                singleArr = new Array,
                onlyArr = new Array,
                boxNum = 0,
                boxNumCl = 4,
                index = 1

            // 分別插入 1 - only (需要知道 key 名稱)
            for(let data in takeHusband) {
                setArr(onlyArr, {
                    name: takeHusband[data],
                    nickName: takeHusbandNick[data],
                    cover: takeHusbandCover[data],
                    intro: takeHusbandIntro[data],
                    abilities: takeHusbandAb[data],
                })
                setArr(onlyArr, {
                    name: takeWife[data],
                    nickName: takeWifeNick[data],
                    cover: takeWifeCover[data],
                    intro: takeWifeIntro[data],
                    abilities: takeWifeAb[data],
                })
            }

            // 分別插入 2 single (需要知道 key 名稱)
                // 你要知道---
                // singleArr = onlyArr          // 只會替代過去而已
                // singleArr = onlyArr.slice()  // clone 的 舊寫法
                singleArr = [...onlyArr]        // clone 的 es6 寫法，已被打散
            // 每 5 個為 1 個 list
            for(let data in singleArr) {
                boxNum++
                if (boxNum % 4 === 0) {
                    singleBoxArr.push({
                        stripContent: singleArr.slice(boxNumCl - 4, boxNumCl),
                        id: index
                    })
                    boxNum = 0
                    index++
                    boxNumCl+=4
                } else if (data == singleArr.length - 1) {
                    singleBoxArr.push({
                        stripContent: singleArr.slice(data - 1, singleArr.length),
                        id: index
                    })
                    index++
                }
            }
            // 每個 list 裡的 array 第二組穿插 object
            for(let data in singleBoxArr) {
                singleBoxArr[data].stripContent.splice(2, 0, {
                    name: 'MARVEL'
                })
            }

            // this.cardList = onlyArr;
            this.setMarvelCardList(onlyArr)
            // this.stripBox = singleBoxArr;
            this.setMarvelStripBox(singleBoxArr)
            // cl('onlyArr', onlyArr, 'singleBoxArr', singleBoxArr)

            function setArr(arr, info={}) {
                arr.push(info)
            }
        },
        changeMarvelApiNeighbor(res) {

            let oldData = res,
                num = 0,
                newData = [],
                newArray = [],
                index = 1

            for(let data in oldData) {
                num++
                newArray.push(oldData[data]);
                if (num % 2 === 0) {
                    setArr([...newArray], index)
                } else if (data == oldData.length - 1) {
                    setArr([...newArray], index)
                }
            }

            function setArr(arr, i) {
                num = 0
                newData.push({
                    list: arr,
                    id: i
                })
                index++
                newArray = []
            }
            cl('NeighborData', newData)
        },
    }
}