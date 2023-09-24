import { useEffect, useState } from "react";

const useGetAllAi = () => {
 const [allAi, setAllAi] = useState();

 useEffect(()=>{
    fetch(`https://dummyjson.com/users`)
    .then(res=> res.json())
    .then(data=> setAllAi(data.users))

},[])

return[allAi]

}

export default useGetAllAi;