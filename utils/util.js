import { ComponentFlag, EventFlag } from "../config/config.js"

export const getAttributes = (element) => {
    if(!element) return {}
    const attrs = {}
    const attrSource = Object.values(element.attributes)

    attrSource && attrSource.length > 0 && attrSource.forEach(attr => {
        const { name, value } = attr
        if(name.startsWith(ComponentFlag) || name.startsWith(EventFlag)) {
            const _name = textToUpperCase(name.replace(ComponentFlag, ''))
            attrs[_name] = value
        }
    })

    return attrs
}

export const textToUpperCase = text => {
    if(!text) return '';
    return text.replace(/-(\w)/g, (all,letter) => letter.toUpperCase());
}

export const isType = (target, type) => target && type && typeof target === type;

export const isStr = target => isType(target, 'string');

export const warpFun = (fnStr) => {
    if(!fnStr || typeof fnStr !== 'string') return () => {};
    return Function();
}

export const runFun = ($event, fn) => {
    if(!fn) return;
    $event.stopPropagation();
    $event.preventDefault();
    isStr(fn) && (fn = warpFun(fn));
    fn();
}