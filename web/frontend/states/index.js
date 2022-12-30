import {atom} from 'recoil'

export const settings = atom({
    key:'settings',
    default:[]
})

export const default_Settings = atom ({
    key:'default_setting',
    default :{
        name : 'Untitled',
        mask : {
            selected : 'polygon'
        }
    }
})