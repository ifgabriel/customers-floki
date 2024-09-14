import { AxiosHeaders } from "axios"

export enum HttpStatusCode {
    ok = 200,
    created = 201,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    conflict = 429,
    serverError = 500,
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type HttpRequest = {
    url: string
    method: HttpMethod
    body?: unknown
    headers?: AxiosHeaders
}

export type HttpResponse<T = unknown> = {
    statusCode: HttpStatusCode
    data?: T
}

export interface HttpClient<R = unknown> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>
}