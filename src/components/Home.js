import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
    const paragraphs = [
        "Dovunque is an authentic Italian restaurant where traditional flavors and warm hospitality blend seamlessly. A true Italian restaurant emphasizes family and community, creating a warm and  welcoming atmosphere."
    ];

    const dishes = [
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\images.jpeg", title: "Pasta Carbonara", description: "Creamy pasta with parmesan, eggs, and pancetta." },
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\download.jpeg", title: "Tiramisu", description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone." },
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\images.jpeg", title: "Chianti Wine", description: "A glass of fine Chianti wine, perfect for pairing with any meal." }
    ];

    const carouselItems = [
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\images.jpeg", caption: "Creamy Pasta" },
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\images.jpeg", caption: "Savory Tiramisu" },
        { img: "C:\Users\QHTF\Downloads\Update\Dovunque\src\assets\images.jpeg", caption: "Fine Italian Wine" }
    ];

    const reviews = [
        { name: "John Doe", review: "The best Italian food I've ever had! The pasta was creamy and flavorful." },
        { name: "Jane Smith", review: "A true Italian dining experience! The environment was warm and welcoming." }
    ];

    return (
        <div className="container-fluid home">
            <div className="background-style">
                <div className="overlay">
                    <div className="content-wrapper">
                        <header className="header-style text-center">
                            <h1>Welcome to Dovunque</h1>
                        </header>
                        <main className="main-content text-center py-5 container-style">
                            <h2 className="heading mb-4">Authentic Italian Flavors, Warm Hospitality</h2>

                            {paragraphs.map((text, index) => (
                                <p className="lead" key={index}>{text}</p>
                            ))}

                            <Link to="/menu">
                                <button className="btn menu-button my-4">View Our Menu</button>
                            </Link>

                            <h2 className="text-center mb-4">Featured Dishes</h2>
                            <div className="row mb-5">
                                {dishes.map((dish, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card dish-card">
                                            <img src={dish.img} className="card-img-top" alt={dish.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{dish.title}</h5>
                                                <p className="card-text">{dish.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div id="foodCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {carouselItems.map((item, index) => (
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                            <img src={item.img} className="d-block w-100" alt={item.caption} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="carousel-caption-text">{item.caption}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <h2 className="text-center mb-4">Customer Reviews</h2>
                            {reviews.map((review, index) => (
                                <div className="card review-card mb-5" key={index}>
                                    <div className="card-body">
                                        <h5 className="card-title">{review.name}</h5>
                                        <p className="card-text">"{review.review}"</p>
                                    </div>
                                </div>
                            ))}

                            <div className="text-center mb-5">
                                <h2>Subscribe to Our Newsletter</h2>
                                <p>Get the latest updates on new dishes and exclusive promotions!</p>
                                <form className="d-flex justify-content-center">
                                    <input type="email" className="form-control w-50" placeholder="Enter your email" />
                                    <button type="submit" className="btn menu-button ms-2">Subscribe</button>
                                </form>
                            </div>
                        </main>
                    </div>
                    <footer className="footer-style text-center">
                        <p>&copy; 2024 Dovunque Italian Restaurant | Where Italy Meets Home</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Home;
