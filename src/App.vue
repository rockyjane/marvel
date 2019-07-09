<template>
    <div id="app">
        <page-header />
        <router-view></router-view>
        <page-footer />
        <loading />
    </div>
</template>

<script>
    import pageHeader from '@/components/common/Header';
    import pageFooter from '@/components/common/Footer';
    import Loading from '@/components/partials/Loading'

    export default {
        name: 'app',
        components: {
            pageHeader,
            pageFooter,
            Loading,
        },
    }
</script>