import "../styles/Home.css";
import homePageBackground from "../assets/Home/home page background.jpg"; // Corrected path

const Home = () => {
  return (
    <div className="home">
      <div className="background">
        <img src={homePageBackground} alt="Mantra Offer" className="background-image" />
        <div className="hero">
          <h1>Experience the Beauty Within</h1>
          <p>Discover premium salon services with professional care.</p>
          <button className="book-btn">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
