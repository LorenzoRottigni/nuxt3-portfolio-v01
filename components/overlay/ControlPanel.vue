<template lang="pug">
#control-panel.container-fluid
    .row
        .col-4.offset-8.px-0
            .bg-primary.p-3
                h1.text-center control panel  
                Dropdown(v-model="selectedCity", :options="cities", optionLabel="name", placeholder="select a city")
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
const selectedCity = null
const cities = [
	{name: 'New York', code: 'NY'},
	{name: 'Rome', code: 'RM'},
	{name: 'London', code: 'LDN'},
	{name: 'Istanbul', code: 'IST'},
	{name: 'Paris', code: 'PRS'}
]
const color = ref('1976d2')
</script>

<style lang="sass" scoped>
#control-panel
    position: absolute
    top: 10px
    right: 10px
    max-height: 320px
    z-index: 99
</style>