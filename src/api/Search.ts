import { useMutation, useQuery } from "@tanstack/react-query";
import api, { authHeader , apiML } from "./index";

export const FetchSearchQuery = () => {
  return useMutation((tags: string[]) => {

    const data = {
      search_key : tags
    }

    return apiML.post("/search", data);
  });
};


export const AutomaticQuery = () => {
  return useMutation((tags: string[]) => {

    const data = {
      search_key : tags
    }

    return apiML.post("/search", data);
  });
};