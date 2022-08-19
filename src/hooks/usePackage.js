
import { useState } from "react"


const usePackage = () =>{
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useState(() => {
        fetch('packages.json')
        .the(res => res.json())
        .then( data => {
            setPackages(data);
            setIsLoading(false)
        })
        return [packages, isLoading]
    } , [])
}
export default usePackage;