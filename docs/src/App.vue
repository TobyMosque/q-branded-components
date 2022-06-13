<template>
  <router-view />
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useAppStore } from './stores/app';

export default defineComponent({
  name: 'App',
  setup() {
    if (process.env.SERVER) {
      const quasar = useQuasar();
      const appStore = useAppStore();
      const { dark } = storeToRefs(appStore);
      if (dark.value !== undefined) {
        quasar.dark.set(dark.value);
      }
    }
  },
});
</script>
