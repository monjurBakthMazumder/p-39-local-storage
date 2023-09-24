import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FavoritesCard = ({ai}) => {
    const {id,image, phone, email, ip, macAddress, firstName, maidenName, lastName} = ai || {};
    const fullName = firstName + ' ' + maidenName+ ' ' + lastName
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
                </div>
        </div>
    );
};

FavoritesCard.propTypes = {
    ai: PropTypes.object,
};

export default FavoritesCard;