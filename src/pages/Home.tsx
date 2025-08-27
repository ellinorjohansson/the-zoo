import '../style/home.scss';
import cow from '../assets/cow_bg.avif';
import elephant from '../assets/elephant_bg.avif';
import squirell from '../assets/squirell_bg.avif';
import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { Link } from 'react-router';
import { useAnimalsService } from '../hooks/useAnimalHook';

export const Home = () => {
  useAnimalsService();
  const { animals } = useContext(AnimalContext);

  const todaysAnimal =
    animals.length > 0
      ? animals[Math.floor((new Date().getDate() * 17) % animals.length)]
      : null;

  return (
    <>
      <div className="carousel">
        <img
          className="img-start"
          src={cow}
          alt="En brun långhårig ko med horn som går på ett berg med synlig sten och grönt gräs som täcker delar av berget."
        />
        <img
          className="img-start"
          src={elephant}
          alt="Två stycken elefanter som går på savannen mot kameran"
        />
        <img
          className="img-start"
          src={squirell}
          alt="En ekorre som tittar in i kameran med svart bakgrund"
        />
      </div>
      <div className="todays-animal">
        <h2>Dagens djur</h2>
        {todaysAnimal ? (
          <div>
            <img
              src={todaysAnimal.imageUrl}
              alt={todaysAnimal.name}
              className='todays-image'
            />
            <h3 className='todays-name'>{todaysAnimal.name}</h3>
            <p className='todays-description'>{todaysAnimal.shortDescription}</p>
            <Link to={`/animals/${todaysAnimal.id}`}>
              <button>Mer om djuret</button>
            </Link>
          </div>
        ) : (
          <p className='loading'>Laddar...</p>
        )}
      </div>
    </>
  );
};
