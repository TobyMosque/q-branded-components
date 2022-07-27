<template>
  <q-layout class="l-main bg-main" view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn flat round :icon="darkIcon" @click="toggleDark" />
      </q-toolbar>
    </q-header>

    <q-drawer
      :mini="mini"
      v-model="drawer"
      content-class="bg-content"
      overlay
      show-if-above
      bordered
    >
      <essential-link
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <locale-switch></locale-switch>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { defineStore } from 'pinia';
import { useAppStore } from 'src/stores/app';

interface LinkList {
  title: string;
  caption: string;
  icon: string;
  link: string;
}

export const authLayoutStoreName = 'mainLayout';
export const useMainLayoutStore = defineStore(authLayoutStoreName, {
  state: () => ({
    mini: true,
    drawer: true,
  }),
  getters: {
    linksList(): LinkList[] {
      return [
        {
          title: this.$t('l-main.docs'),
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev',
        },
        {
          title: this.$t('l-main.github'),
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework',
        },
        {
          title: this.$t('l-main.discord'),
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev',
        },
        {
          title: this.$t('l-main.forum'),
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev',
        },
        {
          title: this.$t('l-main.twitter'),
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev',
        },
        {
          title: this.$t('l-main.facebook'),
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev',
        },
        {
          title: this.$t('l-main.awesome.title'),
          caption: this.$t('l-main.awesome.caption'),
          icon: 'favorite',
          link: 'https://awesome.quasar.dev',
        },
      ];
    },
  },
  actions: {
    toggleLeftDrawer() {
      this.mini = !this.mini;
    },
  },
});

export default defineComponent({
  name: 'MainLayout',

  components: {
    'locale-switch': defineAsyncComponent(
      () => import('src/components/LocaleSwitch.vue')
    ),
    'essential-link': defineAsyncComponent(
      () => import('src/components/EssentialLink.vue')
    ),
  },
});
</script>
<script setup lang="ts">
import { onBeforeUnmount, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { matDarkMode, matLightMode } from '@quasar/extras/material-icons';
import { onBeforeRouteUpdate } from 'vue-router';

const store = useMainLayoutStore();
onBeforeUnmount(() => store.$dispose());

const { drawer, mini } = storeToRefs(store);
const essentialLinks = computed(() => store.linksList);
const { toggleLeftDrawer } = store;

onBeforeRouteUpdate(() => {
  requestAnimationFrame(() => {
    drawer.value = true
  })
})

const appStore = useAppStore();
const { dark } = storeToRefs(appStore);
const { toggleDark } = appStore;
const darkIcon = computed(() => (dark.value ? matDarkMode : matLightMode));
</script>
