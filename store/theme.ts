import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

interface ThemeState { theme: Ref<string> }

export const ThemeState = defineStore('theme', {
    state: (): ThemeState => ({
        theme: ref('default')
    }),
    actions: {
        loadTheme(theme: String){
            console.log(theme)
            this.theme = theme
        }
    }
})