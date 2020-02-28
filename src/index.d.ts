/*
 * @Author: zzc 
 * @Date: 2019-10-17 08:55:11 
 * @Last Modified by: zzc
 * @Last Modified time: 2019-12-11 10:02:25
 */

// 布局组件
export { default as FixedTop } from './layouts/fixed-top';
export { default as FixedBottom } from './layouts/fixed-bottom';
export { default as BoxCommon } from './layouts/box/common';
export { default as Box } from './layouts/box';
// 基础组件
export { default as Imgs } from './components/base/imgs';
export { default as ImgsSlot } from './components/base/imgs/imgs-slot';
export { default as SurplusQuota } from './components/camp/banner/surplus-quota';
export { default as ContactCustomerService } from './components/camp/banner/contact-customer-service';
export { default as Text } from './components/base/text/text';
export { default as Button } from './components/base/button';
export { default as ButtonCountDown } from './components/base/button/button-count-down';
export { default as Tab } from './components/base/tab';
export { default as SlidersBase } from './components/base/sliders/sliders-base';
export { default as TimeCountDown } from './components/camp/time/time-count-down';

// form 表单
export { default as Input } from './components/form/input/input';
export { default as AuthCode } from './components/form/input/authCode';
export { default as Textarea } from './components/form/input/textarea';
export { default as Mobile } from './components/form/input/mobile';
export { default as AreaCode } from './components/form/select/areaCode';
export { default as Icon } from './components/base/icon/icon';

// 其他模块
export { default as IctModal } from './components/modules/modal';

export { default as zh_CN } from './locale/zh-CN';
export { default as en_US } from './locale/en-US';