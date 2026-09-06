import axios from "axios";
import { cache } from "react";

const api=axios.create({
    baseURL:"/api/web/auth",
    withCredentials:true
    
});

export const register=async(formData)=>{
    try{
        const response=await api.post("/register",formData);
        return response.data;   
    }catch(error){
        return error.response.data;
    }       
}

export const login=async(formData)=>{
    try{
        const response=await api.get("/login",formData)
        return response.data
    }
    catch(error){
 return error.response.data;
    }
}



