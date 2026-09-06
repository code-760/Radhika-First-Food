import {    useDispatch } from "react-redux";
import { register } from "../Service/auth.api";
import { setError, setLoading, setUser } from "../state/api.slice";
import { redirect } from "react-router";



export const userauth=()=>{
    const dispatch=useDispatch();

    const handelregister=async (formData)=>{ 
        
        try{
            setLoading(true)
            const response=await register(formData)  ;
            dispatch(setUser(response.data));
            setLoading(false)
            return response.data;       
          
        }catch(error){
            dispatch(setError(error.response.data));
                setLoading(false)
            return error.response.data;
        }
    }

    return {handelregister}

    
}