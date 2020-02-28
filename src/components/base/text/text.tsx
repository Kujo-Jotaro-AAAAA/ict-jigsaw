import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';

@autobind
@observer
class CTText extends React.Component<ComponentPropsType> {

    render() {

        return (
            <div onClick={this.props.handleInnerClick} className="ict_jigsaw_text" style={this.props.style}>
                {this.props.text}
            </div>
        )
    }
}
export default CTText