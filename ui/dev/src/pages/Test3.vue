<template>
  <q-page padding>
    <QCard :dark="dark">
      <QCardSection>
        <QbField v-model="text" @focus="onFocus" label="Input">
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>
          </template>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">
              {{ text }}
            </div>
          </template>
        </QbField>
      </QCardSection>
      <QCardSection>
        <QCheckbox
          v-model="autofocus"
          :dark="dark"
          label="autofocus"
        ></QCheckbox>
        <QCheckbox
          v-model="borderless"
          :dark="dark"
          label="borderless"
        ></QCheckbox>
        <QCheckbox
          v-model="bottomSlots"
          :dark="dark"
          label="bottomSlots"
        ></QCheckbox>
        <QCheckbox
          v-model="clearable"
          :dark="dark"
          label="clearable"
        ></QCheckbox>
        <QCheckbox v-model="counter" :dark="dark" label="counter"></QCheckbox>
        <QCheckbox
          v-model="dark"
          toggle-indeterminate
          :dark="dark"
          label="dark"
        ></QCheckbox>
        <QCheckbox v-model="dense" :dark="dark" label="dense"></QCheckbox>
        <QCheckbox v-model="disable" :dark="dark" label="disable"></QCheckbox>
        <QCheckbox
          v-model="error"
          toggle-indeterminate
          :dark="dark"
          label="error"
        ></QCheckbox>
        <QCheckbox v-model="filled" :dark="dark" label="filled"></QCheckbox>
        <QCheckbox
          v-model="hideBottomSpace"
          :dark="dark"
          label="hideBottomSpace"
        ></QCheckbox>
        <QCheckbox v-model="hideHint" :dark="dark" label="hideHint"></QCheckbox>
        <QCheckbox
          v-model="itemAligned"
          :dark="dark"
          label="itemAligned"
        ></QCheckbox>
        <QCheckbox
          v-model="labelSlot"
          :dark="dark"
          label="labelSlot"
        ></QCheckbox>
        <QCheckbox v-model="loading" :dark="dark" label="loading"></QCheckbox>
        <QCheckbox
          v-model="noErrorIcon"
          :dark="dark"
          label="noErrorIcon"
        ></QCheckbox>
        <QCheckbox v-model="outlined" :dark="dark" label="outlined"></QCheckbox>
        <QCheckbox
          v-model="reactiveRules"
          :dark="dark"
          label="reactiveRules"
        ></QCheckbox>
        <QCheckbox v-model="readonly" :dark="dark" label="readonly"></QCheckbox>
        <QCheckbox v-model="rounded" :dark="dark" label="rounded"></QCheckbox>
        <QCheckbox v-model="square" :dark="dark" label="square"></QCheckbox>
        <QCheckbox
          v-model="stackLabel"
          :dark="dark"
          label="stackLabel"
        ></QCheckbox>
        <QCheckbox v-model="standout" :dark="dark" label="standout"></QCheckbox>
      </QCardSection>
      <QCardSection class="row q-col-gutter-sm">
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="bgColor"
          :dark="dark"
          label="bgColor"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="clearIcon"
          :dark="dark"
          label="clearIcon"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="color"
          :dark="dark"
          label="color"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="errorMessage"
          :dark="dark"
          label="errorMessage"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="hint"
          :dark="dark"
          label="hint"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="labelColor"
          :dark="dark"
          label="labelColor"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="maxlength"
          :dark="dark"
          label="maxlength"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="prefix"
          :dark="dark"
          label="prefix"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="standout"
          :dark="dark"
          label="standout"
        ></QInput>
        <QInput
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          filled
          v-model="suffix"
          :dark="dark"
          label="suffix"
        ></QInput>
      </QCardSection>
    </QCard>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useFieldStore } from "ui";
import { QCheckbox, QInput, QAvatar, QCard, QCardSection } from "quasar";

const {
  autofocus,
  borderless,
  bottomSlots,
  clearable,
  counter,
  dark,
  dense,
  disable,
  error,
  filled,
  hideBottomSpace,
  hideHint,
  itemAligned,
  labelSlot,
  loading,
  noErrorIcon,
  outlined,
  reactiveRules,
  readonly,
  rounded,
  square,
  stackLabel,
  standout,
  bgColor,
  clearIcon,
  color,
  errorMessage,
  hint,
  labelColor,
  maxlength,
  prefix,
  suffix,
} = useFieldStore();
const text = ref("");
function onFocus() {
  console.log("blur: ", arguments);
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
