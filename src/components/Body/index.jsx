import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../../graphql/queryCountries';
import AllGroups from './AllGroups/';
import Default from './Default';
import Loader from './Loader';
import Fail from './Fail';

const Body = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [countries, allCountries] = useState([]);
  const [orderOption, setOrderOption] = useState('');
  const [nameSearch, setName] = useState('');
  const [result, getResult] = useState(null);

  useEffect(() => {
    if (data) {
      allCountries(data.countries);
    }
  }, [data, countries]);

  useEffect(() => {
    if (nameSearch.length > 0) {
      getResult(
        countries.filter((c) =>
          c.name.toLowerCase().trim().includes(nameSearch.toLowerCase().trim())
        )
      );
      setOrderOption('continent');
    }
  }, [nameSearch, countries]);

  const handleChange = (e) => {
    e.preventDefault();
    !e.target.value ? setOrderOption('') : setName(e.target.value);
  };

  if (loading) return <Loader />;
  if (error) return <Fail msg={error.message} />;

  return (
    <>
      <div>
        <div>
          <label>
            <span>Ingresá el nombre de un país:</span>
            <input
              type="text"
              placeholder="Quiero información sobre..."
              onChange={handleChange}
            />
            ;
          </label>
        </div>
        <div>
          <h5>Ordenar resultado por:</h5>
          <div>
            <button onClick={() => setOrderOption('continent')}>
              Continentes
            </button>
            <button onClick={() => setOrderOption('language')}>
              Lenguajes
            </button>
          </div>
        </div>
      </div>
      <main>
        <section>
          {orderOption !== '' ? (
            <AllGroups
              countries={result !== null ? result : countries}
              order={orderOption}
            />
          ) : (
            <Default />
          )}
        </section>
      </main>
    </>
  );
};

export default Body;
