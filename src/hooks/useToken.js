import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('user', user);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {

        }

    }, [user]);
    return [token];
}

export default useToken;