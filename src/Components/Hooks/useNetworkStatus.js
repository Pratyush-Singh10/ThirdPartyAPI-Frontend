import { useEffect, useState } from "react"

const useNetworkStatus = () => {

  const [networkStatus, setNetworkStatus] = useState(navigator.onLine)

  useEffect(() => {
    const setOnline = () => {
      setNetworkStatus(true)
    }

    const setOffline = () => {
      setNetworkStatus(false)
    }
    window.addEventListener("online", () => setNetworkStatus(true))
    window.addEventListener("offline", () => setNetworkStatus(false))

    return () => {
      window.removeEventListener("online", setOnline)
      window.removeEventListener("offline", setOffline)
    }

  }, [])

  return networkStatus
}

export default useNetworkStatus