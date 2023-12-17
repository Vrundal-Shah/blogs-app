import axios from 'axios';

async function getGoogleProfile(access_token: string) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
      {
        headers: {
          // authorization: `Bearer ${access_token}`,
          accept: 'application/json',
        },
      },
    );

    // Return the response data
    return response.data;
  } catch (err) {
    console.error('Error getting profile from Google.');
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
}

export default getGoogleProfile;
