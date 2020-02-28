import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';
import classNames from '_@/assets/styles/tab.less';

@autobind
@observer
class CTTab extends React.Component<ComponentPropsType> {

    render() {
        const { style, children } = this.props;
        return (
            <div className={classNames.tab} style={style} onClick={this.props.handleInnerClick}>
                {children}
            </div>
        )
    }
}
export default CTTab