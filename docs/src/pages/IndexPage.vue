<template>
  <q-page class="row items-center justify-evenly">
    <q-list>
      <q-item>
        <q-input type="number" filled v-model="page" label="Page"></q-input>
      </q-item>
      <q-item>
        <q-input type="number" filled v-model="rows" label="rows"></q-input>
      </q-item>
      <q-item>
        <q-input v-model="order" filled label="Order By"></q-input>
      </q-item>
      <q-item>
        <q-checkbox v-model="desc" label="Desc"></q-checkbox>
      </q-item>
      <q-item>
        <q-input v-model="search" filled label="Search"></q-input>
      </q-item>
      <q-item>
        <q-btn color="primary" label="Update" @click="update"></q-btn>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { updateRouteOptions } from 'src/utils/route'

export const indexPageStoreName = 'index-page'
export const useIndexPageStore = defineStore(indexPageStoreName, {
  state: () => ({
    page: 1,
    rows: 10,
    order: 'name',
    desc: false,
    search: ''
  }),
  actions: {
    update () {
      const query: Record<string, string> = {};
      if (this.page && this.page !== 1) {
        query.page = this.page.toString()
      }
      if (this.rows && this.rows !== 10) {
        query.rows = this.rows.toString()
      }
      if (this.order && this.order !== 'name') {
        query.order = this.order
      }
      if (this.desc) {
        query.desc = 'true'
      }
      if (this.search) {
        query.search = this.search
      }
      const route = updateRouteOptions({
        to: this.router.currentRoute.value,
        query: query
      })
      this.router.replace(route)
    }
  }
})

export default defineComponent({
  name: 'IndexPage'
});
</script>
<script setup lang="ts">
import { computed, defineProps, onBeforeUnmount } from 'vue';

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 10
  },
  order: {
    type: String,
    default: 'name'
  },
  desc: Boolean,
  search: {
    type: String,
    default: ''
  }
})
const store = useIndexPageStore()
onBeforeUnmount(() => store.$dispose())

const { page, rows, order, desc, search } = storeToRefs(store);
const { update } = store;

const _props = computed(() => props);
page.value = _props.value.page
rows.value = _props.value.rows
order.value = _props.value.order
desc.value = _props.value.desc
search.value = _props.value.search
</script>
