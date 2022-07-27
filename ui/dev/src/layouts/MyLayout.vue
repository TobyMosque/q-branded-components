<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round to="/" icon="home" />

        <q-toolbar-title>
          quasar-ui-q-branded-components v{{ version }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from "ui"; // "ui" is aliased in quasar.conf.js
import { QCard, QCardActions, QBtn, QIcon, QDate, QTime } from 'quasar'
import { onMounted, ref } from "vue";

export default {
  name: "MyLayout",

  setup() {
    const panels = ref(null)
    const panel = ref(null)
    onMounted(() => {
      console.log('props: ', {
        card: Object.keys(QCard.props),
        actions: Object.keys(QCardActions.props),
        button: Object.keys(QBtn.props),
        icon: Object.keys(QIcon.props),
        date: Object.keys(QDate.props),
        time: Object.keys(QTime.props)
      })
      console.log('refs:', {
        panels: panels,
        panel: panel
      })
    })
    return {
      name: ref('mails'),
      panels,
      panel,
      version,
    };
  },
};
</script>
