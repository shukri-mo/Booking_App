import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function UseSettings(){
    const{isLoading,error,data:settings}=useQuery({
        queryKey:['setting'],
        queryFn:getSettings,
    })
    return {isLoading,error,settings}
}