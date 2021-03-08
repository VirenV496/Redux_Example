import {INPUT_UPDATE} from './Types'


export const Action = (value) => {
    return {
        type:INPUT_UPDATE,
        data:value
    }
}