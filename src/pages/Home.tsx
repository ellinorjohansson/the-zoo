import '../style/home.scss';
import bird from '../assets/bird_bg.avif';
import lion from '../assets/lion_bg.avif';
import magnet from '../assets/magnet_bg.avif';
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
      <div className="welcome-wrapper">
        <h2 className="welcome-word">Live</h2>
        <h2 className="welcome-word">Laugh</h2>
        <h2 className="welcome-word">Animal</h2>
        <Link to={`/animals`}>
          <button className="animal-page-button">Gå till djursidan</button>
        </Link>
      </div>
      <div className="carousel">
        <img
          className="img-start"
          src={bird}
          alt="En blå gul fågel med lång mörk vass näpp. Sitter på en pinne med blurrig bakgrund."
          loading="eager"
          width={1920}
          height={1080}
        />
        <img
          className="img-start"
          src={lion}
          alt="Två stycken lejon som kollar in i kameran, i jakt position där en av dom som är närmast kameran har öppen mun och den andra smyger lite bakom."
          loading="eager"
          width={1920}
          height={1080}
        />
        <img
          className="img-start"
          src={magnet}
          alt="En ljusrosa magnet som flyter omkring i blått vatten."
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>
      <div className="todays-animal">
        <h2>Dagens djur</h2>
        {todaysAnimal ? (
          <div className="todays-card">
            <img
              src={todaysAnimal.imageUrl}
              alt={todaysAnimal.name}
              className="todays-image"
            />
            <h3 className="todays-name">{todaysAnimal.name}</h3>
            <p className="todays-description">
              {todaysAnimal.shortDescription}
            </p>
            <Link to={`/animals/${todaysAnimal.id}`}>
              <button className="about-animal-button">Mer om djuret</button>
            </Link>
          </div>
        ) : (
          <p className="loading">Laddar...</p>
        )}
      </div>
    </>
  );
};
