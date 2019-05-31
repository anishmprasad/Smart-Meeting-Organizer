import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// export default class Listing extends Component {
// 	render() {
// 		return <div className='listing'>Listing</div>;
// 	}
// }

const Listing = () => (
	<Query
		query={gql`
			{
				Buildings {
					name
					meetingRooms {
						name
						meetings {
							title
							date
							startTime
							endTime
						}
					}
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			console.log(loading, error, data);
			if (loading) return <p>Good things take time....</p>;
			if (error) return <p>Something went wrong...</p>;

			return (
				<div className='row'>
					{data.Buildings.map(
						book => {
							console.log(book);
							return (
								<div>
									{book.name}
									{book.meetingRooms.map(meetingRoom => {
										return (
											<div>
												{meetingRoom.name}
												{meetingRoom.meetings.map(meeting => {
													return <div>{meeting.title}</div>;
												})}
											</div>
										);
									})}
								</div>
							);
						}
						// <Book book={book} />
					)}
				</div>
			);
		}}
	</Query>
);

export default Listing;
