/*
 * @Author: zzc 
 * @Date: 2019-12-03 17:39:25 
 * @Last Modified by: zzc
 * @Last Modified time: 2019-12-04 14:03:33
 */
/**
 * 单张带子组件的图片
 */
import React from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/imgs.less';

@autobind
@observer
class CTImgs extends React.Component<ComponentPropsType> {
    @computed get imgUrl() {
        const { imgs } = this.props;
        return Array.isArray(imgs) && imgs[0];
    }
    render() {
        const { style, handleInnerClick } = this.props;
        return (
            <div
                className={className.imgSlot}
                onClick={handleInnerClick}
                style={style}
            >
                <img src={this.imgUrl} style={{
                    width: "100%",
                    height: 'inherit'
                }} />
                <div className={className.slot}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default CTImgs