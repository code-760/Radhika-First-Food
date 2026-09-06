import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api/web/auth",
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



