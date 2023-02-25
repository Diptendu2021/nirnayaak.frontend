import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import api, { authHeader } from "./index";

// export const FetchSearchQuery = () => {
//   return useMutation((tags: string[]) => {
//     return api.post("/search", tags);
//   });
// };

export function useLoginQuery() {
    const navigate = useNavigate();
    return useMutation((data: any) => api.post("/auth/login", data, { withCredentials: true }), {
      onSuccess: (res: AxiosResponse) => {
        localStorage.setItem("token", res.data.result.accessToken);
        navigate("/dashboard");
        // setShow("setup");
      },
    });
  }

  export function useRegisterUser() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {
      isLoading,
      isSuccess,
      isError,
      mutate: handleRegister,
    } = useMutation((registerData: any) => api.post("/register", registerData), {
      onSuccess: (res) => {
        // localStorage.setItem("email", res.data.result.user.email);
        // navigate("/verification");
        console.log("register" , );
        
      },
      onError: (err: any) => {
        setError(err.response.data.message);
      },
    });
    return { isLoading, isSuccess, isError, error, handleRegister };
  }
  