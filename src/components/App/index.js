import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { client } from './config';
import Listing from '../Listing';
import MeetingRooms from '../MeetingRooms';
import AddMeeting from '../AddMeeting';

export default function App() {
	return (
		<ApolloProvider client={client}>
			<div className='App'>
				<header className='App-header'>
					{/* <img src={logo} className='App-logo' alt='logo' /> */}
					Smart Meeting Organizer
				</header>
				<Listing />
				<MeetingRooms />
				<AddMeeting />
			</div>
		</ApolloProvider>
	);
}

// import React from 'react'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
// import Books from './Books'

// const client = new ApolloClient({
//   uri: 'https://r95kv5p84n.lp.gql.zone/graphql',
// })

// const App = () => (
//   <ApolloProvider client={client}>
//     <nav className="navbar">
//       <a className="navbar-brand" href="">
//         GraphQL in React - Demo application
//       </a>
//     </nav>
//     <div className="container">
//       <Books />
//     </div>
//   </ApolloProvider>
// )

// export default App
