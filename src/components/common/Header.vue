<template>
    <header>
        <b-nav class="pierFont posf text-center">
            <b-nav-item :to="{ name: 'home' }">{{ $t('headerNav.rocky') }}</b-nav-item>
            <b-nav-item-dropdown
                id="porojects"
                :text="$t('headerNav.myNav.title')">
                <b-dropdown-item :to="{ name: 'porojects.marvel' }">{{ $t('headerNav.myNav.marvel') }}</b-dropdown-item>
                <b-dropdown-item href="http://rockyjane.tk" target="_blank">{{ $t('headerNav.myNav.portfolio') }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
                id="plugins"
                :text="$t('headerNav.pluginNav.title')">
                <b-dropdown-item :to="{ name: 'plugins.imgur' }">{{ $t('headerNav.pluginNav.imgur') }}</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.photozoom' }">{{ $t('headerNav.pluginNav.photozoom') }}</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.social' }">{{ $t('headerNav.pluginNav.social') }}</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.googlemap' }">{{ $t('headerNav.pluginNav.googlemap') }}</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.youtube' }">{{ $t('headerNav.pluginNav.youtube') }}</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'plugins.language' }">{{ $t('headerNav.pluginNav.language') }}</b-dropdown-item>
                <b-dropdown-item href="http://rockyjane-donut.ml" target="_blank">{{ $t('headerNav.pluginNav.game') }}</b-dropdown-item>
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
