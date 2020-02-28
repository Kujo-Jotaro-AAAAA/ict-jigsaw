import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';
import className from '_@/assets/styles/banner.less';

interface PropsTypes extends ComponentPropsType { }

@autobind
@observer
class CTContactCustomerService extends React.Component<PropsTypes> {
  render() {
    const { style, text, handleInnerClick } = this.props
    return (
      <div className={className.right} onClick={handleInnerClick} style={style}>
        <div className={className.kefu} >{text || '联系客服'}</div>
      </div>
    )
  }
}
export default CTContactCustomerService