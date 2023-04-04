import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

export default function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SMP IT MADANI</h3>
          <p>Selamat Datang Para Pejuang Ilmu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SMP IT MADANI</h3>
          <p>Selamat Datang Para Pejuang Ilmu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SMP IT MADANI</h3>
          <p>
          Selamat Datang Para Pejuang Ilmu</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}