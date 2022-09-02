import React, { useState, useEffect } from 'react';
import {
  filterByContinent,
  filterByLanguage,
  cleanDecoration
} from '../../../utils/helpers';
import { Link } from 'react-router-dom';
import Card from './Card';
import * as Styled from '../../../styles/AllGroups';

const AllGroups = ({ countries, order }) => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (order === 'continent') {
      const parserContinent = filterByContinent(countries);
      setInfo(parserContinent);
    }
    if (order === 'language') {
      const parserLanguage = filterByLanguage(countries);
      setInfo(parserLanguage);
    }
  }, [order, countries]);

  // console.log('INFO--<', info);

  return (
    <Styled.AllGroups>
      {info !== ''
        ? info.map((orderGroups) => {
            return (
              <Styled.RenderGroup key={orderGroups[0]}>
                <Styled.Continent>{orderGroups[0]}:</Styled.Continent>
                <Styled.AllCardContainer>
                  {orderGroups[1].map((item) => (
                    <Link
                      key={item.code}
                      to={'/home/' + item.code}
                      style={cleanDecoration}
                    >
                      <Card
                        key={item.code}
                        name={item.name}
                        capital={item.capital}
                        emoji={item.emoji}
                      />
                    </Link>
                  ))}
                </Styled.AllCardContainer>
              </Styled.RenderGroup>
            );
          })
        : null}
    </Styled.AllGroups>
  );
};

export default AllGroups;
