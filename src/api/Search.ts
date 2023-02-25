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

export const SearchIndividualQuery = (documentID : string) => {
    const {data , isLoading , isError} = useQuery([`/fetch/${documentID}`]   , async () => {
      const res: any = await api.get(`/fetch/${documentID}`, authHeader());
      console.log(res);
      
      return res;
    },)
}
