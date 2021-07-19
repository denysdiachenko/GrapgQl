const {typeDefs} = require("./GraphQL/schema");
const {ApolloServer} = require('apollo-server');



const books = [
	{
		id:1,
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		id: 2,
		title: 'City of Glass',
		author: 'Paul Auster',
	},
];
const resolvers = {
	Query: {
		getBooks: () => books,
	},
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});