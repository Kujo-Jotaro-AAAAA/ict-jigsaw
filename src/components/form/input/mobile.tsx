import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { InputItem } from 'antd-mobile';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/input.less';
interface PropsInterface {
    form: any;
}
@autobind
@observer
class CTMobile extends React.Component<PropsInterface & ComponentPropsType> {

    render() {
        const { disabled, placeholder, text, style, handleInnerClick, handleInnerVal } = this.props;
        return (
            <InputItem
                className={className.inputItem}
                onClick={handleInnerClick} style={style}
                type="phone"
                defaultValue={text}
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
export default CTMobile;
// export default createForm()(CTMobile);