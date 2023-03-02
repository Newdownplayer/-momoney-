import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from './InputPad.module.scss';
import { DatePicker, Popup, } from 'vant';
import { time } from "../../shared/time";
export const InputPad = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup: (props, context) => {
        
        const now = new Date()
        const refDate = ref<Date>(now)
        const appendText = (n: number | string) => {
            const nString = n.toString()
            const dotIndex = refAmount.value.indexOf('.')
            if (refAmount.value.length >= 13) {
                return
            }
            if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) {
                return
            }
            if (nString === '.') {
                if (dotIndex >= 0) { // 已经有小数点了
                    return
                }
            } else if (nString === '0') {
                if (dotIndex === -1) { // 没有小数点
                    if (refAmount.value === '0') { // 没小数点，但是有0
                        return
                    }
                }
            } else {
                if (refAmount.value === '0') {
                    refAmount.value = ''
                }
            }
            refAmount.value += n.toString()
        }
        const buttons = [
            { text: '1', onClick: () => { } },
            { text: '2', onClick: () => { } },
            { text: '3', onClick: () => { } },
            { text: '清空', onClick: () => { } },
            { text: '4', onClick: () => { } },
            { text: '5', onClick: () => { } },
            { text: '6', onClick: () => { } },
            { text: '删除', onClick: () => { } },
            { text: '7', onClick: () => { } },
            { text: '8', onClick: () => { } },
            { text: '9', onClick: () => { } },
            { text: '+', onClick: () => { } },
            { text: '.', onClick: () => { } },
            { text: '0', onClick: () => { } },
            { text: '-', onClick: () => { } },
            { text: '提交', onClick: () => { } },
        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
        const refAmount = ref('0')
        return () => (<>
        <van-button plain type="success">朴素按钮</van-button>
            <div class={s.dateAndAmount}>   
                <span class={s.date}>
                    <Icon name="date" class={s.navIcon} />
                    <span>
                        <span onClick={showDatePicker}
                        >
                            {time(refDate.value).format('YYYY-MM-DD')}
                        </span>
                        <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
                            <van-time-picker value={refDate.value} type="date" title="选择年月日"
                                onConfirm={setDate} onCancel={hideDatePicker}
                            />
                        </Popup>

                    </span>
                    <span class={s.amount}>{refAmount.value}</span>
                </span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button => <button onClick={button.onClick}>{button.text}</button>)}
            </div>
        </>
        )
        
    }
    
})