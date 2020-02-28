import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/banner.less';

@autobind
@observer
class CTSurplusQuota extends React.Component<ComponentPropsType> {
	@observable remainNumber: number = 0;
	@observable interval: number = null; // 剩余名额定时器
	componentDidMount() {
		this.surplus();
	}
	/**
	   * 剩余名额
	   */
	surplus() {
		this.remainNumber = Math.floor(Math.random() * 1e2) + 2e2;
		this.interval = window.setInterval(() => {
			if (this.remainNumber > 4) {
				this.remainNumber = this.remainNumber - (Math.floor(Math.random() * 3) + 1);
			} else {
				this.remainNumber = 0;
				clearInterval(this.interval);
				this.props.handleInnerVal(true);
			}
		}, 3000);
	}
	render() {
		const { style, text, handleInnerClick } = this.props
		return (
			<div className={className.center} style={style} onClick={handleInnerClick}>
				<div className={className.mTop}>{text || '剩余名额'}</div>
				<div className={className.mBottom}>{this.remainNumber}</div>
			</div>
		)
	}
}
export default CTSurplusQuota