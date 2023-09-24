import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AiCard = ({ai}) => {
    const {id,image, phone, email, ip, macAddress, firstName, maidenName, lastName} = ai || {};
    const fullName = firstName + ' ' + maidenName+ ' ' + lastName

    const handleAddToFavorites = () => {
        const addedFavoritesArray = [];
        const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
        if(!favoriteItem){
            addedFavoritesArray.push(ai);
            localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
            swal("Good job!", "Successfully add to favorite", "success");
        }
        else{
            const have = favoriteItem.find(ai=> ai.id === id)
            if(!have){
                addedFavoritesArray.push(...favoriteItem, ai)
                localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray))
                swal("Good job!", "Successfully add to favorite", "success");
            }
            else{
                swal("Error!", "Already added", "error");
            }
        }
    }
    return (
        <div className='card card-compact border'>
            <figure className="m-0 p-0 h-48"><img src={image} alt="img" className="h-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{fullName.slice(0,20)}</h2>
                        <p><b>Phone</b>: {phone}</p>
                        <p><b>Email</b>: {email}</p>
                        <p><b>IP address</b>: {ip}</p>
                        <p><b>MAC address</b>: {macAddress}</p>
                        <Link to={`/${id}`} state={firstName} className='font-bold underline text-center text-gray-500'>Details</Link>
                    <div className="card-actions justify-center">
                        <button 
                            onClick={handleAddToFavorites}
                            className="btn btn-success"
                        >Favorite</button>
                    </div>
                </div>
        </div>
    );
};

AiCard.propTypes = {
    ai: PropTypes.object,
};

export default AiCard;