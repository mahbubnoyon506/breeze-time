
import { useEffect, useState } from "react"


const usePackage = () =>{
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .the(res => res.json())
        .then( data => {
            setPackages(data);
            setIsLoading(false)
        })
        return [packages, isLoading]
    } , [packages, isLoading])
}
export default usePackage;