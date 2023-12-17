import { gql } from '@apollo/client';

export const SIGN_UP_GOOGLE = gql`
  mutation ($accessToken: String!) {
    signUpGoogle(accessToken: $accessToken) {
      ... on AuthResponse {
        accessToken
        refreshToken
        userId
      }
      ... on Error {
        error
      }
    }
  }
`;
