import { useMutation, useQuery } from "@tanstack/react-query";
import api, { authHeader , apiML } from "./index";

export const FetchSearchQuery = () => {
  return useMutation((documentID: string) => {
    const data = {
      id : documentID,
      spell : "false"
    }
    return apiML.post("/update",data );
  });
};

