import { useState, useEffect } from 'react';
import '../styles/blog.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import v2 from '../assets/flooded-ruins.1920x1080.mp4';
import background from '../assets/flooded-ruins.1920x1080.mp4'; 
import PropTypes from 'prop-types';

function Item({ img, isAnimating, selectedImage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setIsVisible(true);
    }
  }, [selectedImage]);
  return (
    <div className={`item-container ${isAnimating ? 'animate' : ''}`}>
      {selectedImage === img1 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="item-info-text">
              <p>Currently, Valencia, Spain, is experiencing clear skies with a temperature of 18°C (64°F). 
                The evening temperature will gradually drop to around 7°C (44°F). Winds are light, 
                coming from the west-northwest at 10–14 km/h, and the humidity is moderate, between 36% and 70%. 
                Visibility remains excellent, and no precipitation is expected through the night.</p>
            </div>
          </div>
        </>
      )}
      {selectedImage === img2 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <iframe 
                src='https://drive.google.com/file/d/1yRIuZ74p_ds96Wf8jN3BmA_qfAJtI_Y9/preview'
                title="Weather Forecast"
                className="weather-forecast-iframe"
            ></iframe>
          </div>
        </>
      )}
      {selectedImage === img3 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <iframe 
                src='https://drive.google.com/file/d/1VtZXZKzk1iFEcOJUWpxQkrHvBh_W7U92/preview'
                title="Weather Forecast"
                className="weather-forecast-iframe"
            ></iframe>
          </div>
        </>
      )}
      {selectedImage === img4 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="item-info-text">
              <p>
                <strong>Visible:</strong> 
                <br></br>
                Traditional Music: Genres like cumbia, vallenato, and salsa are widely performed and celebrated at festivals and events. 
                <br></br>
                Festivals and Holidays: Events like the Barranquilla Carnival and Feria de Cali showcase vibrant costumes and dances. 
                
              </p>
            </div>
            <div className="item-info-text">
                <p>
                  <strong>Less Visible:</strong> 
                  <br></br>
                  Family Structure: There is a strong emphasis on extended family ties and frequent family gatherings, reflecting collectivist values. 
                  <br></br>
                  Community Celebrations: Local traditions, such as patron saint festivals, often blend Catholic rituals with indigenous practices. 
                </p>
            </div>
            <div className="item-info-text">
              <p>
                <strong>Not Visible:</strong> 
                <br></br>
                Attitudes Toward Time: There is a more relaxed, flexible approach to punctuality in social and even some professional settings. 
                <br></br>
                Concept of Hospitality: There is a deeply ingrained cultural expectation to treat guests as part of the family and ensure their comfort. 
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Thumbnail({ title, description, img, onClick }) {
  return (
    <div className="item-container" onClick={onClick}>
      <img src={img} alt="Thumbnail" />
      <div className="item-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Blog() {
  const [selectedImage, setSelectedImage] = useState(background); 
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState([img1, img2, img3, img4]);

  const handleThumbnailClick = (img) => {
    setIsAnimating(true);
    setSelectedImage(img);
    setTimeout(() => setIsAnimating(false), 500);
  
    setVisibleThumbnails((prevThumbnails) => {
      const index = prevThumbnails.indexOf(img);
      if (index > -1) {
        const newThumbnails = [...prevThumbnails];
        newThumbnails.splice(index, 1); 
        newThumbnails.push(img); 
        return newThumbnails;
      }
      return prevThumbnails;
    });
  };

  return (
    <>
      <video autoPlay muted loop id="background-video">
        <source src={v2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel-container">
        <div className="list-container">
          <Item 
            img={selectedImage} 
            isAnimating={isAnimating} 
            selectedImage={selectedImage} 
          />
        </div>
        <div className="thumbnail-container">
          {visibleThumbnails.map((img, index) => {
            let title, description;
            switch (img) {
              case img1:
                title = "Weather Forecast";
                break;
              case img2:
                title = "Doomsday Preppers";
                break;
              case img3:
                title = "Oil Spill";
                break;
              case img4:
                title = "Culture Iceberg";
                break;
              default:
                title = "Default Title";
                description = "Default Description";
            }
            return (
              <Thumbnail
                key={index}
                title={title}
                description={description}
                img={img}
                onClick={() => handleThumbnailClick(img)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blog;