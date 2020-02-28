import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';

@autobind
@observer
class CTImgs extends React.Component<ComponentPropsType> {
    render() {
        const { style, imgs } = this.props;
        return (
            <div onClick={this.props.handleInnerClick} style={style}>
                {Array.isArray(imgs) && imgs.map((imgSrc, idx) => {
                    return (
                        <img src={imgSrc} key={idx} style={{
                            width: "100%",
                            height: 'inherit'
                        }} />
                    )
                })}
            </div>
        )
    }
}
export default CTImgs