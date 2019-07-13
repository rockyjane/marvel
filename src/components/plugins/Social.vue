<template>
    <div class="social">
        <SocialLogin />
    </div>
</template>

<script>
    import SocialLogin from '@/components/plugins/partials/SocialLogin'

    export default {
        name: 'Social',
        components: {
            SocialLogin
        },
    }
</script>

