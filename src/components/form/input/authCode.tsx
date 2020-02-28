import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { InputItem } from 'antd-mobile';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/input.less';
console.log('authCode', className);

@autobind
@observer
class CTInputAuthCode extends React.Component<ComponentPropsType> {

    render() {
        const { disabled, placeholder, text, style, handleInnerClick, handleInnerVal } = this.props;
        return (
            <InputItem
                className={className.inputItem} onClick={handleInnerClick} style={style}
                defaultValue={text}
                maxLength={4}
                disabled={Boolean(disabled)}
                placeholder={placeholder}
                clear={true}
                onChange={handleInnerVal}
                onBlur={handleInnerVal}
                onFocus={handleInnerVal}
            />
        )
    }
}
export default CTInputAuthCode