import { useMutation, useQuery } from "@tanstack/react-query";
import api, { authHeader } from "./index";

export const FetchSearchQuery = () => {
  return useMutation((tags: string[]) => {
    return api.post("/search", tags);
  });
};