import { useParams } from "react-router-dom";
import useGetAllAi from "../../Hock/useGetAllAi";
import { useEffect, useState } from "react";
import DetailsCart from "../../Component/DetailsCart/DetailsCart";

const AiDetails = () => {
    const [allAi] = useGetAllAi();
    const [ai, setAi] = useState({})
    
    const { id } = useParams();
    
    useEffect(() => {

        const findAi = allAi?.find((a) => a?.id === Number(id));

        setAi(findAi)
    },[id, allAi])
    
    return (
        <div className="sm:w-[500px] mx-auto">
            <DetailsCart ai={ai} />
        </div>
    );
};

export default AiDetails;