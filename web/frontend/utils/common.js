import {
    useRecoilState
} from 'recoil'


export  const recoil_to_json =  (recoil_object) => {

    let x = useRecoilState(recoil_object)[0];
    const keys =  Object.keys(x)
    const values = Object.values(x)

    let return_obj = {}

    if (keys.length == values.length) {
        for (let index = 0; index < keys.length; index++) {
            return_obj[keys[index]] = values[index]
        }
    }

    console.log("Setting : ",return_obj)
    return return_obj
}