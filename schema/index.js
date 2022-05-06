import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';

import schemaMaterialTypes from './materialtypes/index.js'

const schema = makeExecutableSchema({
  typeDefs: [
    schemaMaterialTypes.typeDefs,
  ],
  resolvers: merge(
    schemaMaterialTypes.resolvers,
  )
});

export default schema