import ApolloClient from 'apollo-boost';
export const client = new ApolloClient({
	uri: 'http://smart-meeting.herokuapp.com/graphql',
	request: async operation => {
		const token = await localStorage.getItem('token');
		operation.setContext({
			headers: {
				token: token ? `Bearer ${token}` : 'a123gjhgjsdf6576'
			}
		});
	}
});
