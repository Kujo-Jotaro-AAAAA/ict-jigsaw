//  将一个字符串首字母大写
export const firstUpperCase = (str: string) => {
    let [first, ...rest] = str;
    return first.toUpperCase() + rest.join('')
}

//  类型判断函数的生成函数，可以生成 isArray, isFunction 等等
export const is = function (type: any) {
    return function (target: any) {
        return ({}).toString.call(target) === `[object ${firstUpperCase(type)}]`
    }
}

//  判断一个对象是否是数组
export const isArray = Array.isArray || is('array')

export const isObject = is('object')

export const isEmptyObject = (target: any) => JSON.stringify(target) === '{}';
export const isJSON = (str: string): boolean => {
    if (isObject(str)) return true
    if (!isString(str)) return false;
    str = str.replace(/\s/g, '').replace(/\n|\r/, '');
    if (/^\{(.*?)\}$/.test(str))
        return /"(.*?)":(.*?)/g.test(str);
    if (/^\[(.*?)\]$/.test(str)) {
        return str.replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/},{/g, '}\n{')
            .split(/\n/)
            .map(function (s) { return isJSON(s); })
            .reduce(function (prev, curr) {
                console.log(prev);
                return !!curr;
            });
    }
    return false;
};

export const isDate = is('date')

export const isFunction = is('function')

export const isString = is('string')

export const isBoolean = is('boolean')

export const isRegExp = is('regExp')

export const isNumber = is('number')

export const isAtom = (it: any) => (typeof it !== 'object' || it === null)