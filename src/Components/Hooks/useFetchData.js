import { useEffect, useState } from "react";

const useFetchData = (endPoint, requestOptions = {}) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)
    console.log("Custom Hook", loaded)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const options = {
                    method: requestOptions.method || 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(requestOptions.headers || {}),

                    },
                    body: JSON.stringify(requestOptions.body) || undefined
                }
                console.log(options)

                const response = await fetch(endPoint, options)

                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }

                const jsonData = await response.json()
                setData(jsonData)
                setLoaded(true)
            } catch (error) {
                console.error("Error while fetching data from API : ", error)
            }
        }

        fetchdata();
    }, [endPoint]);

    return { data, loaded }
}

export default useFetchData;