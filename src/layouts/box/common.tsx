/**
 * 空白的占位盒子
 */
import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../types';
@autobind
@observer
class CTBoxCommon extends React.Component<ComponentPropsType> {
    render() {
        return (
            <div onClick={(e) => { e.stopPropagation(); this.props.handleInnerClick(); }} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
export default CTBoxCommon