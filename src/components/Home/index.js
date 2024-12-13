import { Component } from "react";
import { BarLoader } from "react-spinners";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProductCard from "../ProductCard";


import './index.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

class Home extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    favorites: [], // Track the favorite items here
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const apiUrl = 'https://fakestoreapi.com/products';

    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(apiUrl, options);

      if (response.ok) {
        const fetchedData = await response.json();
        const updatedData = fetchedData.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          imageUrl: product.image,
          category: product.category,
          rating: product.rating.rate,
        }));

        this.setState({
          productsList: updatedData,
          apiStatus: apiStatusConstants.success,
        });
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        });
      }
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  // Handle the favorite button click to add or remove a product from favorites
  handleFavoriteClick = (product) => {
    const { favorites } = this.state;
    const isFavorited = favorites.some((fav) => fav.id === product.id);

    if (isFavorited) {
      // Remove from favorites if already favorited
      this.setState({
        favorites: favorites.filter((fav) => fav.id !== product.id),
      });
    } else {
      // Add to favorites
      this.setState({
        favorites: [...favorites, product],
      });
    }
  };

  renderLoadingView = () => (
    <div className="loader-container">
      <BarLoader type="spin" color="#000" height={50} width={50} />
    </div>
  );

  renderFailureView = () => (
    <div className="failure-view">
      <img
        className="failure-image"
        src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1731308762/Group_7522_m81vdn.png"
        alt="failure view"
      />
      <p className="failure-description">Something went wrong. Please try again.</p>
      <button type="button" className="failure-button" onClick={this.getProducts}>
        Try Again
      </button>
    </div>
  );

  renderProductsList = () => {
    const { productsList, favorites } = this.state;

    return (
      <ul className="products-container">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            eachProduct={product}
            onFavoriteClick={this.handleFavoriteClick}
            isFavorited={favorites.some((fav) => fav.id === product.id)}
          />
        ))}
      </ul>
    );
  };

  renderProducts = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsList();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    const { favorites } = this.state;

    return (
      <>
        <Navbar />
        <div className="home-container">
          <div className="title-container">
            <h1 className="title">Discover Our Products</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            </p>
          </div>
          <div className="render-products">{this.renderProducts()}</div>
        </div> {/* Render the Favorite component */}
        <Footer />
      </>
    );
  }
}

export default Home;