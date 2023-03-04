import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './TagCreate.module.scss';
export const TagCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup: (props, context) => {
        return () => <>
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <Icon name="left" class={s.navIcon} onClick={() => { }} />,
                default: () => <>
                    <form>
                        <div>
                            <label>标签名</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                <span>符号</span>
                                <nav>
                                    <span>表情</span>
                                    <span>手势</span>
                                    <span>职业</span>
                                    <span>衣服</span>
                                    <span>动物</span>
                                    <span>自然</span>
                                    <span>食物</span>
                                    <span>运动</span
                                    ><span>...</span>
                                </nav>
                                <ol>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                    <li>32</li>
                                    <li>33</li>
                                    <li>34</li>
                                    <li>35</li>
                                    <li>36</li>
                                    <li>37</li>
                                    <li>38</li>
                                    <li>39</li>
                                    <li>40</li>
                                    <li>41</li>
                                    <li>42</li>
                                    <li>43</li>
                                    <li>44</li>
                                    <li>45</li>
                                    <li>46</li>
                                    <li>47</li>
                                    <li>48</li>
                                    <li>49</li>
                                    <li>50</li>
                                </ol>
                            </label>
                        </div>
                        <div>
                            <p>长按表情进行编辑</p>
                        </div>
                        <div>
                            <button>确定</button>
                        </div>
                    </form>
                </>
            }}</MainLayout>
        </>
    }
})