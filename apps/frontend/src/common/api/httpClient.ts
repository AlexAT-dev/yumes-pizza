import qs from 'qs'

const BASE_URL = 'http://localhost:3001/api/'

const serializeParams = (params: any) =>
  qs.stringify(params, { arrayFormat: 'repeat' })

interface RequestOptions {
  params?: any
  headers?: Record<string, string>
  body?: any
}

async function request<T>(
  path: string,
  {
    method = 'GET',
    params,
    body,
    headers,
  }: RequestOptions & { method?: string } = {},
): Promise<{ data: T | null; status: number }> {
  let url = BASE_URL + path
  if (params) {
    const query = serializeParams(params)
    if (query) url += `?${query}`
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug('[httpClient] request', { method, url, params, body, headers })
  }

  const res = await fetch(url, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body != null ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => null)
  if (process.env.NODE_ENV === 'development') {
    console.debug('[httpClient] response', { url, status: res.status, data })
  }
  return { data, status: res.status }
}

const httpClient = {
  get: <T>(path: string, options?: { params?: any; headers?: any }) =>
    request<T>(path, { method: 'GET', ...options }),
  post: <T>(
    path: string,
    body?: any,
    options?: { params?: any; headers?: any },
  ) => request<T>(path, { method: 'POST', body, ...options }),
  put: <T>(
    path: string,
    body?: any,
    options?: { params?: any; headers?: any },
  ) => request<T>(path, { method: 'PUT', body, ...options }),
  delete: <T>(path: string, options?: { params?: any; headers?: any }) =>
    request<T>(path, { method: 'DELETE', ...options }),
}

export default httpClient
