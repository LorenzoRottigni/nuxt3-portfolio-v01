import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ColorPicker from 'primevue/colorpicker'
import Dropdown from 'primevue/dropdown'

export default defineNuxtPlugin(nuxtApp => {
    console.dir(nuxtApp)
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true
    })
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('ColorPicker', ColorPicker)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    console.log('rec dropdown')
})