import { defineComponent, ref } from "vue";
import { RouterView } from 'vue-router'

export const APP = defineComponent({
    setup() {
        return () => (
            <div>
                <RouterView />
            </div>
        )
    }
})