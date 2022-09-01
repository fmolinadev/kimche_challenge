import React, { useState, useEffect } from 'react';
import {
  filterByContinent,
  filterByLanguage,
  cleanDecoration
} from '../../../utils/helpers';
import { Link } from 'react-router-dom';
import Card from './Card';

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
    <section>
      {info !== ''
        ? info.map((orderGroups) => {
            return (
              <div key={orderGroups[0]}>
                <h4>{orderGroups[0]}</h4>
                <div>
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
                        lenguages={item.lenguages}
                      />
                    </Link>
                  ))}
                </div>
                <hr />
              </div>
            );
          })
        : null}
    </section>
  );
};

export default AllGroups;
