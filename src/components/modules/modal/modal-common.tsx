import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Modal } from 'antd-mobile';
import { autobind } from '@/utils/decorators';
import { ModalPropsType } from '../../../types';
import className from './modal.less';

@autobind
@observer
class ModalCommon extends React.Component<ModalPropsType> {
  @observable pcStyle: any;
  render() {
    const { style, visiable } = this.props;
    const modalProps = {
      title: '基础模态框',
      transparent: true,
      className: className.modalCommon,
      mask: false,
      style,
      visible: visiable,
    }
    return (
      <Modal
        {
        ...modalProps
        }
      >
        <div style={{ minHeight: 100, maxHeight: 350, overflow: 'scroll' }}>
          {this.props.handleChildren && this.props.handleChildren()}
        </div>
      </Modal>
    )
  }
}
export default ModalCommon