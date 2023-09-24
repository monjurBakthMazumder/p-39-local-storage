import { useEffect, useState } from "react";
import FavoritesCard from "../../Component/FavoritesCard/FavoritesCard";
import swal from 'sweetalert';
const Favorites = () => {
    const [favorites,setFavorites] = useState()
    const [NotFound, SetNotFound] = useState()
    useEffect(()=>{
        const favoriteItem = JSON.parse(localStorage.getItem('favorites'))

        if(favoriteItem){
            setFavorites(favoriteItem)
        }
        else{
            SetNotFound("No Favorite Added")
        }
    },[])
    const handleRemoved = () => {
        localStorage.clear()
        setFavorites([])
        SetNotFound("No Favorite Added")
        swal("Successful", "Removed all favorite Ai", "success");
    }
    return (
        <div>
            {
                NotFound
                ?
                <p className="text-2xl md:text-4xl lg:text-6xl flex justify-center items-center font-bold h-[75vh]">{NotFound}</p>
                :
                <>
                    {
                        favorites?.length > 0
                        &&
                        <div className="mb-5 text-center">
                            <button
                                onClick={handleRemoved}
                                className="btn btn-error"
                            >Removed all</button>
                        </div>
                    }
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {
                            favorites?.map((ai,i)=>
                                <FavoritesCard
                                    key={i}
                                    ai={ai}
                                />
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Favorites;