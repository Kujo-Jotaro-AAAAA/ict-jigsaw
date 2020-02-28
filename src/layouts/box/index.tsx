/**
 * 空白的占位盒子
 */
import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../types';
import className from '_@/assets/styles/box.less';
@autobind
@observer
class CTBox extends React.Component<ComponentPropsType> {
    render() {
        return (
            <div className={className.box} onClick={this.props.handleInnerClick} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
export default CTBox