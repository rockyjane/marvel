<template>
    <div class="store_box upFileBox">
        <input v-bind="$attrs"
               :type="type"
               accept=".jpg,.png,.gif"
               :id="upId"
               class="upFile"
               @change="upFileChange" />
        <label :for="upId" class="upFileView text-center posr">
            上傳{{ title }}
            <template v-if="value">
                <img :src="value" class="posa" />
            </template>
        </label>
        <span v-if="error" class="text-danger">{{ error }}</span>
    </div>
</template>

<script>
    import imgurApi from '@/api/imgur';

    export default {
        name: 'UpFileBox',
        $_veeValidate: {
            value() {
                return this.innerValue;
            }
        },
        props: {
            value: {
                type: String,
            },
            upId: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                default() {
                    return ''
                },
            },
            type: {
                type: String,
                default: 'text',
                validator: val => {
                    return (
                        ['url', 'text', 'password', 'email', 'search', 'file'].indexOf(val) !== -1
                    );
                }
            },
            error: {
                type: String,
                required: false
            },
        },
        data() {
            return {
                innerValue: 'initial',  // vee-validate 因為 input type File 被 W3C 規定 value 只能是個空值，所以套件為了配合偵測是否填空，則使用這方式偵查上層 data 是否為空
            }
        },
        methods: {
            upFileChange(e) {
                let files = e.target.files || e.dataTransfer.files,
                    reader = new FileReader(),
                    image = e.target.files[0];
                if (!files.length) return false
                // imgur api 支援線上拿圖
                imgurApi.upload({image}, (res)=>{
                    alert('已成功上傳')
                    this.$emit('input', res.data.link);
                })
                // 無 api 支援時從本地拿取圖片後即時顯現
                // reader.addEventListener('load',(e)=>{
                //     cl(e)
                //     this.$emit('input', e.target.result);   // input圖片的原生data名稱
                // });
                // reader.readAsDataURL(files[0]);
            },
            removeImage: function () {
                this.$emit('input', '');
            }
        },
    }
</script>
