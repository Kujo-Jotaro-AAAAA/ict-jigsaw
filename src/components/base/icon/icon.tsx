/*
 * @Author: zzc 
 * @Date: 2019-12-03 17:39:25 
 * @Last Modified by: zzc
 * @Last Modified time: 2019-12-11 18:32:48
 */
/**
 * 单张带子组件的图片
 */
import React from 'react';
import { observer } from 'mobx-react';
import { Icon } from 'antd';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';
@autobind
@observer
class CTImgs extends React.Component<ComponentPropsType> {
    render() {
        const { style, handleInnerClick, icon, text } = this.props;
        const iconProps = {
            theme: (text as 'outlined') || 'outlined',
            style,
            type: icon || 'user',
            onClick: handleInnerClick
        }
        return (
            <Icon {...iconProps} />
        )
    }
}
export default CTImgs