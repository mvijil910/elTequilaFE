import "./home-style.css";
import Container from 'react-bootstrap/Container'; 
const Home = () => {
    return (
        <Container className="Home">
        <img src="images/tmpLogo.png" alt="logo" className="mainLogo" />
        <div className="image-container">
        <img src="images/tequilaMaking.jpeg" alt="man making tequila" className="tequilaMaking"/>
            <p className="home-text">For over two centuries, the heart of Jalisco has pulsed to the rhythm of agave harvests, carrying the timeless echoes of tradition. Passed down through generations, a family’s passion and dedication has crafted a tequila that embodies the spirit of their land and the warmth of their heritage. Now, with hearts brimming with pride, we are excited to share this legacy with the world.

On October 1, 2024, we invite you to join us in celebrating life, honoring the bonds of family and community, and savoring the authenticity of our craft. Each sip will take you on a journey—a tribute to sustainability and love, poured into every bottle from the agave fields of Jalisco. This is more than just tequila; it’s a celebration of tradition, connection, and joy that’s meant to be shared.

Stay tuned and be part of the story when our treasure is unveiled this October.</p>
    </div>
    </Container>
  );
};

export default Home;
