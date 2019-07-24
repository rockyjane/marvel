<template>
    <div class="page_modal">
        <popup-modal :show="defaultShow" />
    </div>
</template>

<script>

import PopupModal from '@/components/modal/partials/PopupModal'
import {
    mapGetters,
  } from 'vuex';

export default {
    name: 'Modal',
    components: {
        PopupModal,
    },
    computed: {
      ...mapGetters('popupModal', ['defaultShow']),
    },
}
</script>
