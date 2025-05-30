import { useMutation} from "@tanstack/react-query";
import { Login as loginApi } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function UseLogin() {

  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard",{replace:true});
    },
    onError: (err) => {
      console.log(err);
      toast.error("provider email or password is incorrect");
    },
  });
  return { login, isLoading };
}
