<template>
    <header>
        <b-nav class="pierFont posf text-center">
            <b-nav-item :to="{ name: 'home' }">Rocky</b-nav-item>
            <b-nav-item-dropdown
                id="porojects"
                text="My-API">
                <b-dropdown-item :to="{ name: 'porojects.marvel' }">Marvel</b-dropdown-item>
                <b-dropdown-item href="http://rockyjane.tk" target="_blank">2019 Before Web</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
                id="plugins"
                text="Other-API">
                <b-dropdown-item :to="{ name: 'plugins.imgur' }">圖片上傳</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.photozoom' }">放大鏡</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.social' }">社交軟體</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
            </b-nav-item-dropdown>
        </b-nav>
    </header>
</template>

<script>
    export default {
        name: 'pageHeader',
        mounted() {
            $('.nav-link:not(".dropdown-toggle"), .dropdown-item').on('click touch', ()=>{
                if (this.$route.name == "porojects.marvel") return
                cl(this.$route.name)
                $('html, body').removeClass('o-hidden');
            })
        },
    }
</script>
