export const API_KEY = 'AIzaSyAHau_rm0ppDW3da6ogE9Ou6J4u_lpkEg4';

export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
        else if(value>=1000)
            {
                return Math.floor(value/1000)+"k";
            }
        else{
            return value;
        }
}