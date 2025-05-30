import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/ApiAuth";
import toast from "react-hot-toast";

export function useSignup(){
   const {mutate:signup,isLoading}= useMutation({
        mutationFn:signupApi,
        onSuccess:(user)=>{
console.log(user)
toast.success ("account successfully created! please verify the new account from the user's email address")
        }
    })
    return{signup,isLoading}
}