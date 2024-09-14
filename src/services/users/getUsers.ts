import { useQuery } from "@tanstack/react-query"

import { RemoteRequestInfo, RemoteUser } from "../../data"
import { Api, buildUrl } from "../utils"
import { converter } from "./converter"
import endpoints from "./endpoints"

interface GetUserParams {
    name?: string,
    gender?: 'male' | 'female',
    results?: number,
    page?: number
}


const getUsers = ({ name, gender, results, page }: GetUserParams) => {
    return Api.get<GetUserParams, { results: RemoteUser[], info: RemoteRequestInfo }>(
        buildUrl({ route: endpoints.getUsers, queryParams: { name, gender, results, page } })
    ).then(({ data }) => ({ info: data?.info, results: converter(data?.results) }))
}

export const useGetUsers = (params: GetUserParams) => {
    return useQuery({
        queryKey: ['users', params],
        queryFn: () => {
            return getUsers(params)
        },
    })
}
