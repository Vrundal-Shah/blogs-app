import jwt from 'jsonwebtoken';

export const generateToken = (userId: number, isRefreshToken = false) => {
  const secret = isRefreshToken
    ? process.env.REFRESH_TOKEN_SECRET || ''
    : process.env.ACCESS_TOKEN_SECRET || '';
  const expiresIn = isRefreshToken ? '7d' : '1h'; // Expiration time
  const payload = {
    sub: userId, // User ID
    iss: 'blogspot-backend', // Issuer
    iat: Math.floor(Date.now() / 1000), // Issued at (timestamp)
  };

  return jwt.sign(payload, secret, { expiresIn });
};
