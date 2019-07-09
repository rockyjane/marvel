<template>
    <div class="card-list mb-3 first-ca posr">
        <img :src="item.cover" class="mb-3">
        <h2>{{ item.nickName }}</h2>
        <p>{{ item.intro }}</p>
        <div class="info-plan">
            <ul>
                <li v-for="(liItem, liIndex) in item.abilities" v-bind:key="liIndex" class="posr">{{ liItem }}
                </li>
            </ul>
            <!-- <button>蒐藏我最愛的英雄</button> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cardList',
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
    }
</script>
