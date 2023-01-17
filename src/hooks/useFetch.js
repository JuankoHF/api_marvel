import { useEffect, useState } from "react";

export default function useFetch(url, options) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const marvelApi = async () => {
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResult(json);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        
        if(loading) {
            marvelApi();
        }
    
    },)
   
    return {loading, result, error} 
};