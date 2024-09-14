import { useQuery } from "@tanstack/react-query"

import { RemoteCustomer, RemoteRequestInfo } from "../../data"
import { Api, buildUrl } from "../utils"
import { converter } from "./converter"
import endpoints from "./endpoints"

interface GetCustomerParams {
    name?: string,
    gender?: 'male' | 'female',
    results?: number,
    page?: number
}


const getCustomers = ({ name, gender, results, page }: GetCustomerParams) => {
  return Api.get<GetCustomerParams, { results: RemoteCustomer[], info: RemoteRequestInfo }>(
    buildUrl({ route: endpoints.getCustomers, queryParams: { name, gender, results, page } })
  ).then(({ data }) => ({ info: data?.info, results: converter(data?.results) }))
}

export const useGetCustomers = (params: GetCustomerParams) => {
  return useQuery({
    queryKey: ['users', params],
    queryFn: () => {
      return getCustomers(params)
    },
  })
}
