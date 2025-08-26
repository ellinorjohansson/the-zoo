import '../style/home.scss';
import cow from '../assets/cow_bg.avif';
import elephant from '../assets/elephant_bg.avif';
import squirell from '../assets/squirell_bg.avif';

export const Home = () => {
    return (
        <>
            <div className='carousel'>
                <img className='img-start' src={cow} alt="En brun långhårig ko med horn som går på ett berg med synlig sten och grönt gräs som täcker delar av berget." />
                <img className='img-start' src={elephant} alt="Två stycken elefanter som går på savannen mot kameran" />
                <img className='img-start' src={squirell} alt="En ekorre som tittar in i kameran med svart bakgrund" />
            </div>
        </>
    )
}