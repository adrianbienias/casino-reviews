import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

/**
 * React hook for loading fake data
 */
export function useFakeData<T>() {
  const { data, error, isLoading } = useSWR<T>("/api/fake-data", fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}
