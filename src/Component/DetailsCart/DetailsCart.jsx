import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const DetailsCart = (ai) => {
    console.log(ai.ai);
    const {id,image, phone, email, ip, macAddress, firstName, maidenName, lastName, address, bloodGroup, eyeColor, company, username, gender, age, height, weight, password, domain, ein, userAgent, university} = ai.ai || {};
    const fullName = firstName + ' ' + maidenName+ ' ' + lastName
    const navigate = useNavigate();

    const handleClickGoBack = () => {
        navigate(-1)
    }

    const handleAddToFavorites = () => {
        const addedFavoritesArray = [];
        const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
        if(!favoriteItem){
            addedFavoritesArray.push(ai.ai);
            localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
            swal("Good job!", "Successfully add to favorite", "success");
        }
        else{
            const have = favoriteItem.find(ai=> ai.id === id)
            if(!have){
                addedFavoritesArray.push(...favoriteItem, ai.ai)
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
            <figure><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">{fullName}</h2>
                <p><b>User name</b>: {username}</p>
                <p><b>Address</b>: {address?.address} , {address?.state} , {address?.city}</p>
                <p><b>Post</b>: {address?.postalCode}</p>
                <p><b>Address</b>: ( {ip} -ip ) __ ( {macAddress} -mac )</p>
                <p><b>Gender</b>: {gender}</p>
                <p><b>Age</b>: {age}</p>
                <p><b>Blood group</b>: {bloodGroup}</p>
                <p><b>Height - Weight</b>: {height}cm - {weight}kg</p>
                <p><b>Eye color</b>: {eyeColor}</p>
                <p><b>Email</b>: {email}</p>
                <p><b>Phone</b>: {phone}</p>
                <p><b>Password</b>: {password}</p>
                <p><b>EIN</b>: {ein}</p>
                <p><b>Domain</b>: {domain}</p>
                <p><b>User agent</b>: {userAgent}</p>
                <p><b>Company name</b>: {company?.name}</p>
                <p><b>Company title</b>: {company?.title}</p>
                <p><b>Department</b>: {company?.department ? company?.department : ''}</p>
                <p><b>Company address</b>: {company?.address?.address} , {company?.address?.state} , {company?.address?.city} , Post: {address?.postalCode}</p>
                <p><b>University</b>: {university}</p>
            </div>
            <div className="modal-action justify-center gap-5 mb-5">
                <button 
                    onClick={handleClickGoBack}
                    className="btn btn-primary"
                >Go Back</button>
                <button 
                    onClick={handleAddToFavorites}
                    className="btn btn-success"
                >Favorite</button>
            </div>
        </div>
    );
};

DetailsCart.propTypes = {
    ai: PropTypes.object,
};

export default DetailsCart;