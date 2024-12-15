import { useState, useEffect } from 'react';
import '../styles/blog.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import v2 from '../assets/flooded-ruins.1920x1080.mp4';
import background from '../assets/flooded-ruins.1920x1080.mp4'; 
import hurricane from '../assets/huricane.png';
import oil from '../assets/oil.png';
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
            <div className="content-wrapper">
              <h2 className="section-title">Weather Forecast</h2>
                <div className="content-container">
                  <div className="item-info-text">
                    <p>
                      Currently, Valencia, Spain, is experiencing clear skies with a temperature of 18°C (64°F). 
                      The evening temperature will gradually drop to around 7°C (44°F). Winds are light, 
                      coming from the west-northwest at 10–14 km/h, and the humidity is moderate, between 36% and 70%. 
                      Visibility remains excellent, and no precipitation is expected through the night.
            
                      The Mediterranean climate of Valencia typically brings mild winters and hot summers, 
                      with an average of 300 days of sunshine per year. The city&apos;s proximity to the sea 
                      helps moderate temperatures throughout the year, making it an ideal destination for 
                      outdoor activities and beach visits. Local residents often enjoy evening walks along 
                      the beach promenade, taking advantage of the pleasant weather conditions.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img2 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Doomsday Preppers</h2>
              <div className="content-container">
            <a href={"https://www.canva.com/design/DAGWdWNYR4Q/6CzrQadRPQ6HU6Uw8SYfwg/edit?utm_content=DAGWdWNYR4Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"} target="_blank" rel="noopener noreferrer">
            <img src={hurricane} alt={"Podcast view"} className='levitating-image' />
              </a>
              <div className="item-info-text">
                <p>
                In the face of increasingly powerful hurricanes, survival preparation is no longer optional it&apos;s crucial. 
                Essential hurricane preparedness requires a comprehensive three-tier system: immediate response, 
                sustained survival, and long-term resilience. Your emergency kit must include at least 30 days 
                of non-perishable food, 5 gallons of water per person, and a robust first-aid kit with prescription medications.
                <br></br>
                Critical supplies often overlooked include: waterproof document storage, battery-powered or 
                hand-crank emergency radio. Communication is vital; maintain a charged power bank and establish 
                multiple evacuation routes with your family.
                </p>
              </div>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img3 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Oil Spills</h2>
                <div className="content-container">
                  <a href={"https://www.canva.com/design/DAGXBfq-UtE/-T6FulfGeRQ-311SsuWEiA/edit?utm_content=DAGXBfq-UtE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"} target="_blank" rel="noopener noreferrer">
                      <img src={oil} alt={"Podcast view"} className='levitating-image' />
                  </a>
                  <div className="item-info-text">
                    <p>
                      The recent oil spills in Colombia&apos;s vital waterways represent an unprecedented environmental crisis. 
                      The Magdalena River, Colombia&apos;s principal waterway, has been severely impacted by multiple spills, 
                      affecting over 2,000 families and devastating local ecosystems. 
                      <br></br>
                      Critical environmental impacts include: destruction of mangrove ecosystems, contamination of 
                      groundwater resources, and severe damage to wildlife habitats.
                      <br></br>
                      The response efforts face significant challenges due to remote locations and complex terrain. 
                      This crisis highlights the urgent need for stricter environmental regulations 
                      and improved emergency response protocols in Colombia&apos;s oil industry.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </>
      )}
      {selectedImage === img4 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Culture Iceberg</h2>
                <div className="content-container">
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
            </div>
          </div>
        </>
      )}
      {selectedImage === img6 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Culture Shock</h2>
              <div className="content-container">
                <a href={"https://galgac.my.canva.site/"} target="_blank" rel="noopener noreferrer">
                  <img src={img5} alt={"Podcast view"} className='levitating-image' />
                </a>
                <div className="item-info-text">
                  <p>
                    This episode explores fascinating aspects of Colombian culture, from unique slang like guayabo, chimba, and parcero to broader cultural habits, apart we discuss the flexible approach to punctuality compared to stricter norms in places like Germany.
                    We also dive into Colombia&apos;s diverse weather, offering tips for travelers to navigate its six regions, from Bogotá&apos;s unpredictable cold to the coast&apos;s tropical heat.
                    The episode wraps up with reflections on cultural differences and their impact on everyday life.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img7 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Paragraphs</h2>
              <div className="content-container">
                <div className="item-info-text">
                  <p>
                    This episode explores fascinating aspects of Colombian culture, from unique slang like guayabo, chimba, and parcero to broader cultural habits, apart we discuss the flexible approach to punctuality compared to stricter norms in places like Germany.
                    We also dive into Colombia&apos;s diverse weather, offering tips for travelers to navigate its six regions, from Bogotá&apos;s unpredictable cold to the coast&apos;s tropical heat.
                    The episode wraps up with reflections on cultural differences and their impact on everyday life.</p>
                </div>
                <div className="item-info-text">
                  <p>
                    This episode explores fascinating aspects of Colombian culture, from unique slang like guayabo, chimba, and parcero to broader cultural habits, apart we discuss the flexible approach to punctuality compared to stricter norms in places like Germany.
                    We also dive into Colombia&apos;s diverse weather, offering tips for travelers to navigate its six regions, from Bogotá&apos;s unpredictable cold to the coast&apos;s tropical heat.
                    The episode wraps up with reflections on cultural differences and their impact on everyday life.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img8 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">White Chicks</h2>
              <div className="content-container">
                <a href={"https://galgac.my.canva.site/"} target="_blank" rel="noopener noreferrer">
                  <img src={img5} alt={"Podcast view"} className='levitating-image' />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img9 && (
        <>
          <img src={img} alt="Carousel Item" />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Past Lives Review</h2>
              <div className="content-container">
                <div className="item-info-text">
                  <p>
                    <p><strong>Year:  2023 </strong> | <strong> Starring: Greta Lee - Yoo Tae-o</strong> | <strong> Assessment: 9/10 - Nominated for Best Movie of the Year </strong> | <strong> Country: South Korea - US </strong> | <strong> Director: Celine Song </strong></p>
                    What if you had stayed with your first love? Past Lives explores this profoundly human question through the story of Nora and Hae Sung, 
                    two childhood sweethearts in Seoul who are separated when Nora&apos;s family emigrates to New York. Though they move on with their lives, 
                    neither forgets the other. Reuniting in their twenties, they rediscover their bond but are once again torn apart by the distance. 
                    Years later, in their late thirties, Hae Sung visits Nora in New York, where she is now married to Arthur, a writer. 
                    The film reaches its emotional peak in their final meeting, where the weight of memory, unspoken love, and the lives they could have lived together collide. 
                    With a narrative rooted in natural, honest dialogue, Past Lives uses quiet moments to amplify its emotional depth, culminating in a scene where Nora, overwhelmed, 
                    turns to her husband for solace instead of Hae Sung, solidifying the film&apos;s poignant message: love is not always about what is, but what might have been. 
                    solidifying the film&apos;s poignant message: love is not always about what is, but what might have been. Perhaps in another life, they could have shared a future, 
                    but in this one, their love belongs to memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedImage === img10 && (
        <>
          <img src={img} alt="Carousel Item" className='carousel-item-image' />
          <div className={`item-info ${isVisible ? 'visible' : ''}`}>
            <div className="content-wrapper">
              <h2 className="section-title">Fly me to the moon</h2>
              <div className="content-container">
                <div className="item-info-text">
                  <p>
                    This is the story of two young dreamers who shared the same ambitious goal: 
                    reaching the moon. She was a brilliant woman who had always wanted to become an astronaut, 
                    and he was a top student with the same passion for space exploration. They fell in love, 
                    worked tirelessly toward their dream, and after graduating with honors, 
                    decided to combine their aspirations by planning a wedding on the moon.
                    <br></br>
                    Despite financial challenges, they prepared for the journey with excitement. 
                    The wedding dress and rocket decorations were modest, but everything was set. 
                    Their rocket launched, and the journey to the moon became the most extraordinary 
                    experience of their lives. On the moon, they built their dream life—a home for tourists 
                    and even an extraterrestrial dog. Everything seemed perfect until strange events began 
                    to disrupt their happiness. The husband started hearing the voice of a talking bird, 
                    and his wife, initially skeptical, eventually heard it too.
                    <br></br>
                    Then, everything fell apart. The husband woke up from a coma and realized the heartbreaking truth: 
                    they had been in an accident before their mission, and his wife had died. The idyllic life they had 
                    shared—their wedding on the moon and the adventures that followed—was only a vivid dream, created by 
                    his mind as he struggled to cope with the loss. The talking bird was his subconscious, gently guiding 
                    him to face the painful reality that their dream life had never been real.
                  </p>
                </div>
              </div>
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
  const [visibleThumbnails, setVisibleThumbnails] = useState([img1, img2, img3, img4, img6, img7, img8, img9, img10]);

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
      {selectedImage == "/src/assets/flooded-ruins.1920x1080.mp4" && (
        <div className="typewriter">
          Intensive English <br></br> Blog
        </div>
      )}
        <div className="carousel-container">
        <div className="list-container">
          <Item 
            img={selectedImage} 
            isAnimating={isAnimating} 
            selectedImage={selectedImage} 
          />
        </div>
        <div className="hover-area"></div>
        <div className={`thumbnail-container ${selectedImage !== background ? 'thumbnails-small' : ''}`}>
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
              case img6:
                title = "Culture Shock podcast";
                break;
              case img7:
                title = "Paragraphs";
                break;
              case img8:
                title = "White Chicks";
                break;
              case img9:
                title = "Past Lives Review";
                break;
              case img10:
                title = "Fly me to the moon";
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