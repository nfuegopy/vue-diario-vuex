<template>
    <Navbar />
    <div class="d-flex">
        <div class="col-4">
            <EntryListVue />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/NavBarBanner.vue')),
        EntryListVue: defineAsyncComponent(() => import('../components/EntryListVue.vue'))

    }

}
</script>

