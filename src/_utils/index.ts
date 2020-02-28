export let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
export { default as Tools } from './tools';
export { default as Core } from './core';
export { default as transform } from './transform';
export { default as pxToVw } from './px-to-vw';