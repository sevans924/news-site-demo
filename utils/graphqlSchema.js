import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1da23b1cc2fb4efca3e8138e7610d0d3";

function fetchResponseByURL() {
  return fetch(BASE_URL).then((res) => res.json()).then((json) => json.articles);
}

//author, title, description, url, urlToImage, publishedAt 

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  description: 'Popular News Today',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: article => article.title,
    },
    author: {
      type: GraphQLString,
      resolve: article => article.author,
    },
    description: {type: GraphQLString},
    url: {type: GraphQLString},
    urlToImage: {type: GraphQLString},
    publishedAt: {type: GraphQLString},
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Articles Query',
  fields: () => ({
    allArticles: {
      type: new GraphQLList(ArticleType),
      resolve: fetchResponseByURL,
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
