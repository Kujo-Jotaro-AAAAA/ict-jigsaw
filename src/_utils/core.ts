import { isString } from './tools';
interface ModalProtocolInterface {
    modalName: string; // 模态框名称
    modalChildrenSub: string; // 第 N 个modal
}
export let _divide = '_';
export let protocolDivide = '://';
/**------------------------------------Modal 相关-------------------------------------------------*/
/**
 * 解析出配置中模态框种类列表
 * @param modalConfig 
 */
function parseModalTypeList(modalConfig: any) {
    const modalChildren: any = {};
    const modalTypeSet: Set<string> = new Set();
    Object.keys(modalConfig).forEach((key: string) => {
        const currConfig = modalConfig[key]; // modal的配置
        const keyList = key.split(_divide);
        keyList.splice(-1, 1);
        let type: string = keyList.join(_divide);
        modalTypeSet.add(type); // modal_common;
        if (Array.isArray(modalChildren[type])) {
            modalChildren[type].push(currConfig);
        } else {
            modalChildren[type] = [currConfig];
        }
    });
    return {
        modalTypeList: Array.from(modalTypeSet),
        modalChildren
    };
}
/**
 *  将 ModalCommon => modal_common
 * @param camelStr ModalCommon
 */
function handleTransformCamelReserve(camelStr: string) {
    let toCamelStr = camelStr.replace(/[A-Z]/g, (str) => {
        return `_${str.toLocaleLowerCase()}`;
    });
    return toCamelStr.slice(1);
}
/**
 * 解析 modal 协议
 * @param mttp - 协议内容 modal://modal_common_1
 */
function handleModalProtocol(mttp: string): ModalProtocolInterface {
    if (!isString(mttp)) return;
    if (!(mttp.startsWith(`modal${protocolDivide}`))) return;
    let [protocol, url] = mttp.split(protocolDivide);
    if (protocol !== 'modal') return;
    const modalNameList = url.split(_divide);
    const [modalChildrenSub] = modalNameList.splice(-1); // 要渲染的子组件下标
    let modalName = modalNameList.join(_divide); // modal_common
    if (modalChildrenSub === 'close') { // 兼容 close
        modalName = 'close'
    }
    return {
        modalName,
        modalChildrenSub,
    }
}
/**------------------------------------Modal 相关-------------------------------------------------*/

export default {
    protocolDivide,
    _divide,
    parseModalTypeList,
    handleTransformCamelReserve,
    handleModalProtocol
}