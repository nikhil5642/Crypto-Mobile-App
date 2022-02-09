import {Action} from '@action-land/core'

const baseUrl = 'http://10.0.2.2:8000'

export const HTTP_QUERY = 'httpQuery'
export type HTTP_QUERY = typeof HTTP_QUERY

export interface HTTPParams<T> {
  endpoint: string
  method: 'GET' | 'POST'
  variables?: T
  responseType: string
}

export const HTTPRequest = <T>(
  p: HTTPParams<T>,
): Action<HTTPParams<T>, HTTP_QUERY> => Action.of(HTTP_QUERY, p)

export const HTTPQuery = async (request: HTTPParams<any>) =>
  await fetch(baseUrl + request.endpoint, {
    method: request.method,
    headers: getHeaders(),
    body: JSON.stringify(request.variables),
  })
    .then((response) => response.json())
    .then((data) => Action.of(request.responseType, data))
    .catch((error) => Action.of(request.responseType, error))

export const getHeaders = () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return myHeaders
}
export const isHTTPRequestSuccess = (response: any) =>
  !(response instanceof Error)
