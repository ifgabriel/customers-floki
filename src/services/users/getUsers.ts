import { useQuery } from "@tanstack/react-query"

import { RemoteUser } from "../../data"
import { Api, buildUrl } from "../utils"
import endpoints from "./endpoints"

interface GetUserParams {
    name?: string,
    gender?: 'male' | 'female',
}


const getUsers = ({ name, gender }: GetUserParams) => {
    return Api.get<GetUserParams, { results: RemoteUser[] }>(buildUrl({ route: endpoints.getUsers, queryParams: { name, gender, results: 15 } })).then(({ data }) => data?.results)
}

export const useGetUsers = ({ name, gender }: GetUserParams) => {
    return useQuery({
        queryKey: ['users', name, gender],
        queryFn: () => {
            return getUsers({ name, gender })
        }
    })
}
