<template lang="pug">
#app.border-primary.full-height.bg-circuit(:theme="getActiveTheme")
    header
        overlay-radar
        overlay-control-panel
        overlay-controller-top
    main.h-100.px-1
        overlay-controller-left
        slot
        overlay-controller-right
    footer
        overlay-controller-bottom
        overlay-footer
</template>

<script lang="ts" setup>
//import { loadTheme } from './../store/theme.ts'
import { useI18n } from 'vue-i18n'
import { ThemeState } from '../store/theme';
const { t, locale, availableLocales } = useI18n()
const themeStore = ThemeState()

const getActiveTheme = computed(() => {
    return themeStore.$state.theme
})

const setActiveTheme = () => themeStore.loadTheme('amethyst')


//console.log(getActiveTheme)
locale.value = 'ja'
</script>

<style lang="sass" scoped>
#app
    border: ridge 10px
    postion: relative
</style>