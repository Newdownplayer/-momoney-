import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router"
import s from "./Welcome.module.scss"
import logo from '../assets/icons/logo.svg'
export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={s.wrapper}>
            <header>
                <img class={s.logo} src={logo} />
                <h1>MO记账</h1>
            </header>
            <main class={s.main}>
                <RouterView name="main">
                    {({ Component: Content, route: R }: {
                        Component: VNode;
                        route: RouteLocationNormalizedLoaded
                    }) =>
                        <Transition
                            enterActiveClass={s.slide_fade_enter_active}
                            enterFromClass={s.slide_fade_enter_from}
                            leaveToClass={s.slide_fade_leave_to}
                            leaveActiveClass={s.slide_fade_leave_active}
                        >
                            {Content}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer"></RouterView>
            </footer>
        </div>
    }
})