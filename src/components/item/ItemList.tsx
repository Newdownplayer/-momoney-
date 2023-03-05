import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from './ItemList.module.scss';
import { ItemSummary } from "./ItemSummary";
export const ItemList = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup: (props, context) => {
        const refSelected = ref('本月')
        return () => (<>
            <MainLayout>{{
                title: () => 'MO记账',
                icon: () => <Icon name="menu" />,
                default: () => (<>
                    <Tabs v-model:selected={refSelected.value} class={s.tabs}>
                        <Tab name="本月">
                            <ItemSummary startDate="2021-01-01" endDate="2021-01-31" />
                        </Tab>
                        <Tab name="上月">
      
                        </Tab>
                        <Tab name="今年">
                     
                        </Tab>
                        <Tab name="自定义">
                        
                        </Tab>
                    </Tabs>
                </>)
            }}</MainLayout>
        </>)
    }
})