<template>
    <div class="store_box labelWord posr">
        <input v-bind="$attrs"
               :type="type"
               :value="value"
               @input="updateValue"
               :placeholder="`請輸入${title}`" />
        <label class="posa">
            <div :class="className">{{ title }}</div>
        </label>
        <span v-if="error" class="text-danger">{{ error }}</span>
    </div>
</template>

<script>
    export default {
        name: 'LabelWord',
        $_veeValidate: {
            value() {
                return this.value;
            }
        },
        props: {
            value: String,
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
        computed: {
            className() {
                return this.title.length == 2 ? 'justify justWhite' : 'justWhite'
            },
        },
        methods: {
            updateValue(e) {
                this.$emit("input", e.target.value);
            }
        },
    }
</script>
