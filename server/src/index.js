const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        tracksHome: () => [... new  Array(6)]
    }),
    Track: () => ({
        id: () => 'track_01',
        title: () => 'AstroKitty, space explorer',
        author: () => {
            return {
                name: 'Grumpy Cat',
                photo: 'https://www.mos.org/sites/dev-elvis.mos.org/files/images/main/uploads/slides/ExUni-LP.jpg'
            }
        },
        thumbnail: () => 'https://www.mos.org/sites/dev-elvis.mos.org/files/images/main/uploads/slides/ExUni-LP.jpg',
        length: () => 1210,
        modulesCount: () => 6
    })
};

const server = new ApolloServer({ typeDefs, mocks: mocks});

server.listen().then(() => {
    console.log('up and running! localhost:4000!')
})