import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
  query getAllCountries {
    countries {
      name
      emoji
      code
      continent {
        name
      }
      capital
      languages {
        name
      }
    }
  }
`;
