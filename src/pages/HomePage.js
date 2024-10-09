import React from 'react';
import Footer from '../components/Footer'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: "../assets/download (3).jpeg",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    };
    return (
        
        <div className="container-fluid home">
            <header className="text-center py-5 bg-danger text-white">
                <h1>Welcome to Dovunque</h1>
            </header>
            <main className="main-content text-center py-5">
                <div className="container">
                    <h2 className="text-danger mb-4">Authentic Italian Flavors, Warm Hospitality</h2>
                    <p className="lead">
                        Dovunque is an authentic Italian restaurant where traditional flavors and warm hospitality blend seamlessly. 
                        As you step inside the charming haven and dine with us, you are greeted by a rustic yet elegant environment. 
                        The air is filled with the inviting aroma of freshly cooked Italian cuisine.
                    </p>
                    <p className="lead">
                        A true Italian restaurant also emphasizes the importance of family and community, creating a warm and welcoming atmosphere 
                        where guests feel like part of our family. Whether you’re indulging in creamy pastas, savoring tiramisu, or enjoying a glass 
                        of fine wine, the experience is designed to be a feast for the senses, capturing the essence of the heart of Italy.
                    </p>
                      {/* Featured Dishes Section */}
            <h2 className="text-center mb-4">Featured Dishes</h2>
            <div className="row mb-5">
                <div className="col-md-4">
                    <div className="card">
                        <img src="assets/images/food1.jpg" className="card-img-top" alt="Pasta" />
                        <div className="card-body">
                            <h5 className="card-title">Pasta Carbonara</h5>
                            <p className="card-text">Creamy pasta with a blend of parmesan, eggs, and pancetta.</p>
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="assets/images/food2.jpg" className="card-img-top" alt="Tiramisu" />
                        <div className="card-body">
                            <h5 className="card-title">Tiramisu</h5>
                            <p className="card-text">Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.</p>
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="assets/images/food3.jpg" className="card-img-top" alt="Wine" />
                        <div className="card-body">
                            <h5 className="card-title">Chianti Wine</h5>
                            <p className="card-text">A glass of fine Chianti wine, perfect for pairing with any meal.</p>
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div id="foodCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/images/food1.jpg" className="d-block w-100" alt="Delicious Pasta" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Creamy Pasta</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/food2.jpg" className="d-block w-100" alt="Tiramisu" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Savory Tiramisu</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/food3.jpg" className="d-block w-100" alt="Fine Wine" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fine Italian Wine</h5>
                        </div>
                    </div>
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

            {/* Customer Reviews Section */}
            <h2 className="text-center mb-4">Customer Reviews</h2>
            <div className="card mb-5">
                <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">"The best Italian food I've ever had! The pasta was creamy and flavorful, and the wine was superb."</p>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text">"A true Italian dining experience! The environment was warm and welcoming, and the food was a delight!"</p>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="text-center mb-5">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest updates on new dishes and exclusive promotions!</p>
                <form className="d-flex justify-content-center">
                    <input type="email" className="form-control w-50" placeholder="Enter your email" />
                    <button type="submit" className="btn btn-primary ms-2">Subscribe</button>
                </form>
            </div>
       
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
