import { useState, useEffect } from 'react';
export default function useFetch (url){
    const [data, setData] = useState(null);
    
    useEffect(() => {
        
        const fetchData = async () => {

            try {
                const resProductos = await fetch(url);
                console.log(resProductos);
                const jsonData = await resProductos.json();
                
                setData(jsonData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return { data }
}