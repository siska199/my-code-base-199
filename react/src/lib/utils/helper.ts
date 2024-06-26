import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const isEmptyValue = (value: any): boolean => {
    if (value === undefined || value === null || value === '') {
        return true;
    }
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return value.length === 0;
        }
        return Object.keys(value).length === 0;
    }
    return false;
};

interface TParamsSpreadArrayTemp {
    newValue: any;
    array: any[]
}
export const spreadArrayAttemp = (params: TParamsSpreadArrayTemp) => {
    const { newValue, array } = params

    return isEmptyValue(array) ? [newValue] : [...array, newValue]
}

export const isolateEvent = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation()
}

interface TParamsFieldFromObjectList {
    array: any[];
    fieldNameTarget: string;
    fieldNameValue: string;
    value: any;
}
export const getFieldFromObjectList = (params: TParamsFieldFromObjectList) => {
    const { array, fieldNameTarget, fieldNameValue, value, } = params
    return array?.filter(data => data?.[fieldNameValue] === value)?.[0]?.[fieldNameTarget]
}

export const getFieldLabelFromOptions = (params: Pick<TParamsFieldFromObjectList, "array" | "value">) => {
    const { array, value, } = params
    return array?.filter(data => data?.value === value)?.[0]?.label
}

interface TParamsGetAssetURl {
    name: string;
    folder?: 'images' | 'icons'
}

export const getAssetURL = (params: TParamsGetAssetURl) => {
    const { name, folder = 'images' } = params
    return new URL(`../../assets/${folder}/${name}`, import.meta.url)?.href
}

export function checkVisibleElmnInScreen(elm: any) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export function checkElmnOnTopOfPage(elm: any) {
    const rect = elm.getBoundingClientRect();
    return rect.top === 0;
}

export const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e?.stopPropagation()

export function arraysHaveSameMembers(array1: string[], array2: string[]) {
    if (array1.length !== array2.length) {
        return false; // Arrays have different lengths, so they can't have the same members
    }

    const sortedArray1 = array1.slice().sort();
    const sortedArray2 = array2.slice().sort();

    return sortedArray1.every((value, index) => value === sortedArray2[index]);
}

export function generateDisplayComponent(ComponentName: string, dynamic: string) {
    return `import ${ComponentName} from "@components/ui/${ComponentName}";
    
const DisplayComponent = () => {
    ${dynamic}
};`;
}


export const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};





