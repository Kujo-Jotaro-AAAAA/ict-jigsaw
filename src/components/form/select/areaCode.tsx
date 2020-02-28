import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
// import { Picker, List } from 'antd-mobile';
import { Select } from 'antd';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/select.less';
const { Option } = Select;
interface PropsInterface {
    form: any;
}
@autobind
@observer
class CTAreaCode extends React.Component<PropsInterface & ComponentPropsType> {

    render() {
        const { disabled, style, handleInnerClick, handleInnerVal } = this.props;
        const selectProps = {
            className: className.areaCode,
            style,
            onChange: handleInnerVal,
            onClick: handleInnerClick,
            disabled
        }
        return (
            // <div className={className.inputItem} onClick={handleInnerClick} style={style}>
            <Select {...selectProps}>
                <Option value="+86">+86</Option>
                <Option value="+852">+852</Option>
                <Option value="+853">+853</Option>
                <Option value="+886">+886</Option>
            </Select>
            // </div >
        )
    }
}
export default CTAreaCode;