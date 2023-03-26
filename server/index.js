// https://www.howtographql.com/graphql-js/1-getting-started/
const { ApolloServer } = require("apollo-server");
const fs = require('fs');
const { match } = require("micromatch");
const path = require('path');

const graphQLSchemaPath = path.join(__dirname, 'schema.graphql');

const mockedLinks = [
  {
    id: 1234,
    description: "this is first fake link",
    url: "https://www.howtographql.com/graphql-js/2-a-simple-query/"
  }
];

const resolvers = {
  Query: {
    info: () => `This for typescript and graphql learning`,
    feed: (parent, {top = null}) => {
        return top
        ? mockedLinks.slice(0, top)
        : mockedLinks;
    },
    getFeedByField: (parent, args) => {
      const {
        searchSt,
        fieldName
      } = args;
      const matchingLink = mockedLinks.filter((eachLink) => {
        return eachLink[fieldName] === searchSt;
      })

      return matchingLink;
    }
  },
  /**
   * Every time we reutrn a link in the resolver functions
   * it comes over here and see how to return the value of that 
   * particular property. 
   * 
   * it can be amended as you wish.
   */
  Link: {
    id: (parent) => {
      console.log(parent)
      return parent.id;
    },
    description: (parent) => parent.description,
    url: (parent) => parent.url
  },
  Mutation: {
    createFeed: (parent, args) => {
      let idCount = mockedLinks.length;
      const {
        url,
        description
      } = args
      const newLink  = {
        id: `link-${idCount}`,
        description,
        url
      }
      mockedLinks.push(newLink);
      return newLink;
    },
    updateFeed: (parent, args) => {

      const {
        id,
        fieldName,
        newContent
      } = args
      const matchingLink = mockedLinks.filter((eachLink) => {
        return eachLink['id'] === id
      })[0];

      matchingLink[fieldName] = newContent;
      return matchingLink;
    },
    deleteFeed: (parent, args) => {
      const {
        id,
      } = args
      let indexPosition = null;

      const matchingLink = mockedLinks.find((eachLink, position) => {
        indexPosition = position;
        return eachLink['id'] === id
      });
      indexPosition && mockedLinks.splice(indexPosition, 1);

      return matchingLink;
    }
  }
}

/**
 * Apollo server is based on `express server` and other 
 * libraries to build a complete graphql server for any application
 */
const apolloServer = new ApolloServer({
  typeDefs: fs.readFileSync(graphQLSchemaPath, 'utf8'),
  resolvers
});

apolloServer
  .listen(1234)
  .then(({url}) => {
    console.log(`Server is running on ${url}`)
  })