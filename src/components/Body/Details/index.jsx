import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_COUNTRY } from '../../../graphql/queryCountries';
import { useParams } from 'react-router-dom';
import CardDetails from './CardDetails';
import Loader from '../Loader';
import Fail from '../Fail';

const Details = () => {
  const { id } = useParams();
  const [detail, getDetail] = useState('');
  const { data, loading, error } = useQuery(SEARCH_COUNTRY, {
    variables: {
      code: id
    }
  });

  useEffect(() => {
    if (data) {
      getDetail(data.country);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Fail />;

  return <CardDetails dataCountry={detail} />;
};

export default Details;
