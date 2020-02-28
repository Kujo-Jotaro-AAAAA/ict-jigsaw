import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Button } from 'antd-mobile';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/button.less';
@autobind
@observer
class CTButton extends React.Component<ComponentPropsType> {
    render() {
        const { text, style, handleInnerClick } = this.props;
        return (
            <Button className={className.button} onClick={handleInnerClick} style={style}>{text || '按钮'}</Button>
        )
    }
}
export default CTButton