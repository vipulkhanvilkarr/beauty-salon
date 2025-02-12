import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src="/src/assets/home/hero.jpg" alt="Salon" />
        <h1>Experience the Beauty Within</h1>
        <p>Discover premium salon services with professional care.</p>
        <button className="book-btn">Book an Appointment</button>
      </div>
    </div>
  );
};

export default Home;
