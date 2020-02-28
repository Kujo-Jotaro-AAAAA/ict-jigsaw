/*
 * @Description: tabList
 * @Author: Ada
 * @Date: 2019-11-26 15:50:52
 * @LastEditors: Ada
 * @LastEditTime: 2019-11-27 17:38:31
 */
import { ReactElement } from 'react';
/**
 * 组件属性
 */
export interface ComponentPropsType {
  imgs?: string[]; // 图片路径
  tabList: string[]; // tab
  icon?: string; // 图标路径
  text?: string;
  num?: number;
  placeholder?: string;
  disabled?: boolean;
  startTime?: number; // 倒计时开始时间，以分钟为单位
  autoStop?: boolean; // 倒计时结束后是否自动停止，默认否，重新开始倒计时
  style?: Object;
  handleInnerClick?: (params?: any, callback?: (params?: any) => void) => void;
  handleInnerVal?: (params?: any) => void; // 组件内部，往外面冒出值
  handleCollocate?: (params?: any) => void;
  handleParseAreaPosition?: () => any;
  childrens: ComponentPropsType[]
}
/**
 * modal属性
 */
export interface ModalPropsType {
  visiable: boolean;
  style?: Object;
  handleChildren: () => ReactElement[];
  handleParseAreaPosition?: () => any;
}
/**
 * 神策配置
 */
export interface SensorsdataTypes {
  [propsName: string]: any;
}