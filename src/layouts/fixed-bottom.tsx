import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../types';
import { isMobile } from '../_utils/index';
import classNames from './styles/layout.less';
const __FIX_BOTTOM_ID__ = 'ict-jigsaw-fix-bottom';
@autobind
@observer
class FixedBottom extends React.Component<ComponentPropsType> {
    componentDidMount() {
        this.handleMobile();
    }
    handleMobile() {
        if (!isMobile) {
            const area = this.props.handleParseAreaPosition && this.props.handleParseAreaPosition();
            const fixedDom: any = document.querySelector(`#${__FIX_BOTTOM_ID__}`);
            if (fixedDom && area) {
                fixedDom.style.width = `${area.width}px`;
                fixedDom.style.top = `${area.bottom}px`;
                fixedDom.style.left = `${area.left}px`;
            }
        }
    }
    render() {
        return (
            <div id={__FIX_BOTTOM_ID__} className={classNames.fixedBottom}>
                {this.props.children}
            </div>
        )
    }
}
export default FixedBottom