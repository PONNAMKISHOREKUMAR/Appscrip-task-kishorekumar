import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import './index.css';

const ProductCard = ({ eachProduct, onFavoriteClick, isFavorited }) => {
  const { title, imageUrl } = eachProduct;

  const handleFavoriteClick = () => {
    onFavoriteClick(eachProduct); // Toggle the favorite state
  };

  return (
    <div className="product-card-container">
      <li className="product-card">
        <img src={imageUrl} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
      </li>
      <div className="sign-in-container">
        <Link to="/profile">
          <p className="sign-in">
            <span>Sign in</span> or Create an account to see pricing
          </p>
        </Link>
        {/* Toggle between favorite icons based on the state */}
        <div onClick={handleFavoriteClick}>
          {isFavorited ? (
            <MdFavorite className="fav-icon" style={{ color: 'red' }} />
          ) : (
            <MdOutlineFavoriteBorder className="fav-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;