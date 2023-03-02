import { defineComponent, PropType, ref } from "vue";
import { DatePicker } from 'vant';
import { Button } from 'vant';
import { Calendar } from 'vant';
import { Popup, NumberKeyboard, Form, Field, CellGroup } from 'vant';

import 'vant/lib/index.css';
import { time } from "../shared/time";

export const vantTest = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    components: {
        [Button.name]: Button,
        [Calendar.name]: Calendar,
        [DatePicker.name]: DatePicker,
        [Popup.name]: Popup,
        [NumberKeyboard.name]: NumberKeyboard,
        [Form.name]: Form,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
    },
    setup: (props, context) => {
        const refshow = ref(false)
        const now = new Date()
        const refDate = ref<Date>(now)
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
        const showKeyboard=()=>{
            if(refshow.value){
                refshow.value=false
            }else{
                refshow.value=true
            }
        }
        return () => (<>
            <van-button type="primary" onClick={showDatePicker}>选择日期</van-button>
            <van-popup v-model={refDatePickerVisible.value} position="bottom">
                <van-date-picker v-model={refDate.value} title="选择年月日"
                    onConfirm={setDate.toString} onCancel={hideDatePicker}
                />
            </van-popup>
            <van-button type="danger">危险按钮</van-button>
            <van-button plain type="success">朴素按钮</van-button>
            <van-button type="info">信息按钮</van-button>
            <van-cell onClick={showKeyboard} >弹出默认键盘</van-cell>
            <van-number-keyboard show={refshow.value} />
        </>
        )
    }
})