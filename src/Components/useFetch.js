import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const FetchDatafromUrl = async (url) => {
        try {
            setLoading(true) ;
            const response = await fetch(url)
            const responseData = await response.json()
            setData(responseData);
            setLoading(false);
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        if (url) {
            FetchDatafromUrl(url)
        }
    }, [url])
    
    return {data, loading, error}
}
