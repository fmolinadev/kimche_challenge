import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
  query getAllCountries {
    continents {
      code
      name
    }
    languages {
      code
      name
      native
    }
    countries {
      name
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
