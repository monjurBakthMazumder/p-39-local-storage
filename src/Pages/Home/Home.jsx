import AiCard from "../../Component/AiCard/AiCard";
import useGetAllAi from "../../Hock/useGetAllAi";

const Home = () => {
    const [allAi] = useGetAllAi()
    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold underline mb-5 text-center">Ai: {allAi?.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {
                    allAi?.map(ai=> 
                        <AiCard
                            key={ai.id}
                            ai={ai}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Home;