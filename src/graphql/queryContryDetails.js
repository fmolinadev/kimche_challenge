import { gql } from 'apollo-boost';

export const SEARCH_COUNTRY = gql`
  query getOneCountry($code: ID!) {
    country(code: $code) {
      name
      code
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
      emoji
      emojiU
      states {
        name
      }
    }
  }
`;

/* Ejm de query variable:
{
  "code": "AR"
}   */
