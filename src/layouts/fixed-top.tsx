import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../types';
import classNames from './styles/layout.less';
import { isMobile } from '../_utils/index';
const __FIX_TOP_ID__ = 'ict-jigsaw-fix-top';

@autobind
@observer
class FixedTop extends React.Component<ComponentPropsType> {
    componentDidMount() {
        this.handleMobile();
    }
    handleMobile() {
        if (!isMobile) {
            const area = this.props.handleParseAreaPosition && this.props.handleParseAreaPosition();
            const fixedDom: any = document.querySelector(`#${__FIX_TOP_ID__}`);
            if (fixedDom && area) {
                fixedDom.style.width = `${area.width}px`;
                fixedDom.style.top = `${area.top}px`;
                fixedDom.style.left = `${area.left}px`;
                setTimeout(() => {
                    let fixedDomH = fixedDom.offsetHeight;
                    const parentDom = fixedDom.parentNode;
                    parentDom.style.paddingTop = `${fixedDomH}px`;
                }, 200)
            }
        }
    }
    render() {
        return (
            <div id={__FIX_TOP_ID__} className={classNames.fixedTop}>
                {this.props.children}
            </div>
        )
    }
}
export default FixedTop