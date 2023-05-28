import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

/**
 * React hook for loading fake data
 */
export function useFakeData() {
  const { data, error, isLoading } = useSWR("/api/fake-data", fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}
