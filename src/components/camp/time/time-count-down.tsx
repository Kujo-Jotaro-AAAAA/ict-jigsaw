import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';

let timer: any = null;
@autobind
@observer
class CTCountDown extends React.Component<ComponentPropsType> {
    @observable disabled: boolean = false;
    @observable min = (this.props.num || 36) * 60 * 1e3;
    componentWillMount() {
        this.handleCountDown();
    }
    handleCountDown() {
        // 分钟为单位
        this.disabled = true;
        timer = window.setInterval(() => {
            if (this.min >= 1000) {
                this.min = this.min - 1000;
            } else {
                this.min = 0;
                clearInterval(timer);
            }
        }, 1e3);
    }
    // ms转成时间
    msToTime(ms: number) {
        let time = ms / 1000;
        let minute = Math.floor(time / 60) % 60;
        let second = Math.floor(time) % 60;
        let min: string;
        let sec: string;
        if (minute === 0) {
            min = '00';
        } else if (minute < 10) {
            min = '0' + minute;
        } else {
            min = minute + '';
        }
        if (second === 0) {
            sec = '00';
        } else if (second < 10) {
            sec = '0' + second;
        } else {
            sec = second + '';
        }
        return min + ':' + sec;
    }
    /**
     * 此处的点击事件,根据业务在 HOC中重写,比如校验手机号后再倒计时
     */
    handleClick() {
        this.handleCountDown();
        this.props.handleInnerClick(true);
    }
    @computed get countDownText() {
        return this.msToTime(this.min);
    }
    render() {
        const { style, handleInnerClick } = this.props;
        return (
            <span onClick={handleInnerClick} style={style}>{this.countDownText}</span>
        )
    }
}
export default CTCountDown