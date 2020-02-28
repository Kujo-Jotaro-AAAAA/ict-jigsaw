import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import { autobind } from 'core-decorators';
import { Button } from 'antd-mobile';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/button.less';

let timer: any = null;
let countDownNum: number = 60;
@autobind
@observer
class CTCountDown extends React.Component<ComponentPropsType> {
    @observable num: number = countDownNum;
    @observable disabled: boolean = false;
    handleReset() {
        this.disabled = false;
        this.num = countDownNum;
    }
    handleCountDown() {
        this.disabled = true;
        timer = window.setInterval(() => {
            if (this.num > 0) {
                this.num--;
            } else {
                clearInterval(timer);
                // 倒计时结束给出触发事件
                this.props.handleInnerVal(true);
                this.disabled = false;
                this.num = countDownNum;
            }
        }, 1e3);
    }
    /**
     * 此处的点击事件,根据业务在 HOC中重写,比如校验手机号后再倒计时
     */
    handleClick() {
        this.props.handleInnerClick(true, () => {
            this.handleCountDown();
        });
    }
    @computed get countDownText() {
        return this.num == countDownNum ? '获取验证码' : this.num;
    }
    render() {
        return (
            <Button
                className={className.button}
                disabled={this.disabled}
                onClick={this.handleClick}
                style={this.props.style}>
                {this.countDownText}
            </Button>
        )
    }
}
export default CTCountDown