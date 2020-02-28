import { firstUpperCase, isString } from './tools';
/**
 * 将 modal_common => ModalCommon
 * @param _modalStr modal_common
 */
export function handleTransformCamel(_modalStr: string) {
    if (!isString(_modalStr)) return;
    let toCamelStr = `_${_modalStr}`.replace(/\_\w/ig, (str) => {
        return firstUpperCase(str.slice(1));
    });
    return toCamelStr;
}

/**
 *  将 ModalCommon => modal_common
 * @param camelStr ModalCommon
 */
export function handleTransformCamelReserve(camelStr: string) {
    let toCamelStr = camelStr.replace(/[A-Z]/g, (str) => {
        return `_${str.toLocaleLowerCase()}`;
    });
    return toCamelStr.slice(1);
}

export default {
    handleTransformCamel,
    handleTransformCamelReserve
}