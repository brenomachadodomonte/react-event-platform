import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rs30qz1jnd01yw7rvlckev/master',
    cache: new InMemoryCache()
});