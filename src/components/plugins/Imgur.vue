<template>
    <section class="imgur fullHeight pt-5 pb-5">
        <div class="content">
            <!-- 選取圖片的 input -->
            <label class="store_label curPoin mb-5">
                選擇上傳圖檔
                <input type="file" accept="image/*" @change="showFile" data-vv-name="imgFile.fs.image" v-validate="'required'">
                <img class="pt-3 pb-3" :src="imgFile.fs.image" v-if="imgFile.fs.image">
                <span v-if="errors.has('imgFile.fs.image')" class="text-danger"> {{ errors.first('imgFile.fs.image') }} </span>
            </label>
            <!-- 圖片標題 -->
            <label for="title" class="mb-2">圖片名稱</label>
            <input class="form-control mb-2" id="title" type="text" v-model="imgFile.title" @keyup.13="submit" required>
            <!-- 圖片描述 -->
            <label for="des" class="mb-2">圖片描述</label>
            <input class="form-control mb-5" id="des" type="text" v-model="imgFile.des" @keyup.13="submit" required>
            <!-- 上傳按鈕 -->
            <div class="text-center">
                <button class="btn clickEnter" type="button" @click="submit">上傳</button>
            </div>
            <div class="uped text-center mt-5" v-if="uped.link">
                <h4 class="mb-3">請記住您的資訊，離開或重整後將不保留</h4>
                <p>
                    妳上傳圖檔後的網址:
                    <br>
                    <a :href="uped.link" target="_blank"><u>查看</u></a>
                </p>
                <p>
                    它的ID: 
                    <br>
                    <u>
                        {{ uped.id }}
                    </u>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    // let imgClientID = '90989f59ed21745',
    //     imgToken = 'f240474fe6799634b6779c171226c0be55a1c064'
    // import axios from 'axios'
    import imgurApi from '@/api/imgur';
    import zh_TW from 'vee-validate/dist/locale/zh_TW';
    
    export default {
        name: 'Imgur',
        data() {
            return {
                dict: {
                    custom: {
                        "imgFile.fs.image": {
                            required: '請上傳圖檔'
                        },
                    }
                },
                imgFile: {
                    file: null, // 準備拿 input type="file" 的值
                    fs: {
                        name: '', // input的圖檔名稱
                        thumbnail: null, // input的圖片縮圖
                        size: null, // input的圖片大小
                        image: null,
                    },
                    title: '', // 圖片標題
                    des: '', // 圖片描述
                },
                uped: {
                    link: null,
                    id: null,
                },
            }
        },
        methods: {
            // 即時顯示圖片
            showFile(e) {
                let vm = this,
                    reader = new FileReader();

                vm.imgFile.file = e.target.files[0]; // input type="file" 的值
                vm.imgFile.fs.name = vm.imgFile.file.name; // input的圖檔名稱
                vm.imgFile.fs.size = Math.floor(vm.imgFile.file .size * 0.001) + 'KB'; // input的圖片大小
                vm.imgFile.fs.thumbnail = window.URL.createObjectURL(vm.imgFile.file); // input的圖片縮圖網路位置
                vm.imgFile.title = vm.imgFile.fs.name; // 預設 input 的圖檔名稱為圖片上傳時的圖片標題

                reader.addEventListener('load',(e)=>{
                    cl(e)
                    vm.imgFile.fs.image = e.target.result; // input圖片的原生data名稱
                });
                reader.readAsDataURL(vm.imgFile.file);
            },
            // 重置
            resetFile() {
                let vm = this
                vm.imgFile.file = null
                vm.imgFile.title = null
                vm.imgFile.des = null
                vm.imgFile.fs.image = null
                vm.imgFile.fs.name = null
                vm.imgFile.fs.size = null
                vm.imgFile.fs.thumbnail = null
            },
            // Imgur Api event
            // 抓取指定圖片
            getPic(id) {
                imgurApi.getImgur({id}, (res)=>{
                    cl('getImg', res)
                })
            },
            // 刪除指定圖片
            delPic(id) {
                imgurApi.delImgur({id}, (res)=>{
                    cl(id, 'getImg del OK')
                })
            },
            // 新增圖片
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let image = this.imgFile.file,
                            title = this.imgFile.title,
                            description = this.imgFile.des
                        imgurApi.upload({image, title, description}, (res)=>{
                            alert('已成功上傳')
                            this.uped.link = res.data.link;
                            this.uped.id = res.data.id;
                            this.resetFile()
                        })
                    }
                })
            },
            // submit_noUse() {
            //     let vm = this,
            //         settings = {
            //             async: false,
            //             crossDomain: true,
            //             processData: false,
            //             contentType: false,
            //             type: 'POST',
            //             url: 'https://api.imgur.com/3/image',
            //             headers: {
            //                 Authorization: 'Bearer ' + imgToken
            //             },
            //             mimeType: 'multipart/form-data'
            //         },
            //         form = new FormData();

            //     form.append('image', this.imgFile.file);
            //     form.append('title', this.imgFile.title);
            //     form.append('description', this.imgFile.des);

            //     axios({
            //         method: 'POST',
            //         url: 'https://api.imgur.com/3/image',
            //         data: form,
            //         headers: {
            //         Authorization: 'Bearer ' + imgToken
            //         },
            //         mimeType: 'multipart/form-data'
            //     }).then(res => {
            //             cl(res)
            //             vm.resetFile()
            //         }).catch(e => {
            //             cl(e)
            //     })
            // },
        },
        created() {
            // this.delPic('你圖片名稱')
            // this.getPic('你圖片名稱')
            this.$validator.localize('zh_TW', this.dict);
        },
    }
</script>
