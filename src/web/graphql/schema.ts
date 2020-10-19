import { buildSchema } from "graphql";

export default buildSchema(`
  type Example {
    id: Int!
  },
  type Query {
    example(id: Int!): Example
  }
`);
