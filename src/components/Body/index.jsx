import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../../graphql/queryCountries';
import AllGroups from './AllGroups/';
import Default from './Default';
import Loader from './Loader';
import Fail from './Fail';
import * as Styled from '../../styles/BodyStyles';

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

  const handleContinent = (nameSearch) => {
    if (nameSearch) {
      setOrderOption('continent');
    } else {
      return alert('Debes ingresar un pais antes de ordenar.');
    }
  };

  const handleLanguage = (nameSearch) => {
    if (nameSearch) {
      setOrderOption('language');
    } else {
      return alert('Debes ingresar un pais antes de ordenar.');
    }
  };

  if (loading) return <Loader />;
  if (error) return <Fail />;

  return (
    <Styled.Body>
      <Styled.Controller>
        <Styled.SearchContainer>
          <Styled.SearchSpan>Ingresá el país:</Styled.SearchSpan>
          <Styled.Input
            type="text"
            placeholder="Quiero información sobre..."
            onChange={handleChange}
            maxlength="15"
            pattern="[A-Za-z ]"
            title="Solo admite letras. Longitud máxima: 15 caracteres "
          />
        </Styled.SearchContainer>
        <Styled.OptionContainer>
          <span>Ordenar por:</span>
          <Styled.ButtonContainer>
            <Styled.Button onClick={() => handleContinent(nameSearch)}>
              <span>Continentes</span>
            </Styled.Button>
            <Styled.Button onClick={() => handleLanguage(nameSearch)}>
              <span>Lenguajes</span>
            </Styled.Button>
          </Styled.ButtonContainer>
        </Styled.OptionContainer>
      </Styled.Controller>
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
    </Styled.Body>
  );
};

export default Body;
