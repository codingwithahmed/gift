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



//////////////////////CONST 


export const example_setting = {
    name : 'Untitled',
    mask : {
        selected : 'polygon',
        isVisible : false
    },
    conditions : [],
    button_text : {
        text : 'Add To Card',
        size : 18,
        alignment : 'left',
        label : '* Upload For Adding To Cart',
        color : '#fffffff',
        bold : true,
        labelColor : '#FF0000'
    },
    button_bg : {
        transparent : true,
        color : '#000000',
        border : {
            color : '#000000',
            size : 4,
            hidden : true
        },
        
    },
    other : {
        all_pages : false,
        order_page : {
            show_dashboard : false,
            images_include_top : false 
        }
    }
}