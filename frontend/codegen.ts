import type { CodegenConfig } from '@graphql-codegen/cli';

const isProduction = process.env.NODE_ENV === 'production';

const allowedOrigin = isProduction
  ? 'https://your-production-domain.com' // Replace with your actual production domain
  : 'http://localhost:4000';

const config: CodegenConfig = {
  overwrite: true,
  schema: allowedOrigin,
  documents: 'src/**/*.graphql',
  generates: {
    'src/gql/generated.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
