import { defineComponent } from "vue";
import { RouterView } from 'vue-router'
import "./App.scss"

export const APP = defineComponent({
    setup() {
        return () => (
            <div class="page">
                <RouterView />
            </div>
        )
    }
})