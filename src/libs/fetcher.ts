/**
 * Wrapper for native fetch
 */
export async function fetcher(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init)

  return response.json()
}
