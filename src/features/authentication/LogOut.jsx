import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./UseLogout";
import SpinnerMini from "../../ui/SpinnerMini";


export default function LogOut() {
    const {logout,isLoading}=useLogout()
  return (
    <ButtonIcon onClick={logout}>
    {isLoading ? <SpinnerMini/>:  <HiArrowRightOnRectangle/>}
    </ButtonIcon>
  )
}
