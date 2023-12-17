import jwt from 'jsonwebtoken';

export const authenticate = (context: any) => {
  const { req, res } = context;
  const token = req.cookies.accessToken || '';
  const secret = process.env.ACCESS_TOKEN_SECRET || '';

  console.log('token at authenticate: ', req.cookies);
  if (!token) {
    throw new Error('Authentication required. Token Missing.');
  }

  try {
    const decoded = jwt.verify(token, secret);
    context.user = decoded;
    return context;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
