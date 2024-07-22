import { getCountries } from '../app/lib/api';
import CountryCard from '../components/CountryCard';

export async function getStaticProps() {
  const countries = await getCountries();
  return {
    props: {
    countries,
    },
  };
}

const Home = ({ countries }) => {
  return (
    <div>
      <h1>Capital City App</h1>
      <div className="grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
