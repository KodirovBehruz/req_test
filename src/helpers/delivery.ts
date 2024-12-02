import { AxiosResponse, isAxiosError } from 'axios'

import { IApiResult, IResponseJson } from '../models/delivery/common/IResultJSON.ts'

import { HTTP_STATUSES } from "../constants/httpsStatuses.ts"

export class CustomError extends Error {
    response: any
    constructor(message: string, response?: any) {
        super(message)
        this.response = response
    }
}

export const apiRequestWrapper = async <T>(
    request: Promise<AxiosResponse<IResponseJson<T>>>,
    successStatusCode = HTTP_STATUSES.OK,
): Promise<IApiResult<T>> => {
    const result: IApiResult<T> = {
        value: null,
        error: null,
    }

    try {
        const response = await request
        if (response.status !== successStatusCode) {
            const error = !isAxiosError(response)
                ? new CustomError(`API error, status: ${response.status}.`, response)
                : new CustomError(
                    `API error, status: ${response.response?.status}.`,
                    response,
                )
            throw error
        }
        if (
            (response.data.result === null || response.data.result === undefined) &&
            response.status !== HTTP_STATUSES.ACCEPTED &&
            response.status !== HTTP_STATUSES.NO_CONTENT
        ) {
            throw new Error(`API returned an empty response`)
        }

        result.value = response.data.result
    } catch (error_) {
        const error = error_ as CustomError
        const detailsMessage =
            error.response && !isAxiosError(error.response)
                ? error.response?.data?.error?.code
                : null
        const errorMessage =
            error.response && !isAxiosError(error.response)
                ? error.response?.data?.error?.code
                : null
        result.error =
            errorMessage ||
            detailsMessage ||
            error.message ||
            'Network error, try again late'
    }

    return result
}
