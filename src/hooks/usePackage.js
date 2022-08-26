
import { useEffect, useState } from "react"

const usePackage = () =>{
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://floating-basin-72615.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setIsLoading(false)
            })
    }, [])
    return [packages, isLoading];
}

export default usePackage;