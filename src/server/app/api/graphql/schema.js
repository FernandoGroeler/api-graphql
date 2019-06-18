let schema = (() => {
  const graphql = require('graphql')
  const { GraphQLSchema } = graphql  

  const rootQuery = require('./rootQuery')
  const mutation = require('./mutations')  

  return new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
  })
})()

module.exports = schema