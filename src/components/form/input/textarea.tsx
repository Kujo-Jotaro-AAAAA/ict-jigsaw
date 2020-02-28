import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { TextareaItem } from 'antd-mobile';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/input.less';

@autobind
@observer
class CTTextArea extends React.Component<ComponentPropsType> {

    render() {
        const { disabled, placeholder, text, style, handleInnerClick, handleInnerVal } = this.props;
        return (
            <TextareaItem
                className={className.inputItem} onClick={handleInnerClick} style={style}
                rows={3}
                defaultValue={text}
                disabled={Boolean(disabled)}
                placeholder={placeholder}
                onChange={handleInnerVal}
                onBlur={handleInnerVal}
                onFocus={handleInnerVal}
            />
        )
    }
}
export default CTTextArea