import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../../graphql/queryCountries';

const Body = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [continent, allContinent] = useState([]);
  const [language, allLanguage] = useState([]);
  const [countries, allCountries] = useState([]);

  useEffect(() => {
    if (data) {
      allContinent(data.continents);
      allLanguage(data.languages);
      allCountries(data.countries);
    }
  }, [data]);

  console.log('CONTINENTES--->', continent);
  console.log('LANGUAGES--->', language);
  console.log('COUNTRIES--->', countries);
  return <div>Body</div>;
};

export default Body;
