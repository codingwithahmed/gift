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


export const hsl2rgb = (h,s,l) => 
{
   let a=s*Math.min(l,1-l);
   let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);
   return [f(0),f(8),f(4)];
}   