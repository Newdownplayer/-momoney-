import { defineComponent, ref } from "vue";
import { RouterView } from 'vue-router'

export const APP = defineComponent({
    setup() {
        const refCount = ref(0)
        const onClick = () => {
            refCount.value += 1
        }
        return () => <>
            <header>导航</header>
            <ul>
                <li>
                    <router-link to="/">Bar</router-link>
                </li>
                <li>
                    <router-link to="/about">Foo</router-link>
                </li>
            </ul>
            <div>
                <RouterView />
            </div>
            <footer>页脚</footer>
        </>
    }
})