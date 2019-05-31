import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './index.scss';

const MeetingRooms = () => (
	<Query
		query={gql`
			{
				MeetingRooms {
					name
					floor
					building {
						name
					}
					meetings {
						title
					}
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			console.log('MeetingRooms', loading, error, data);
			if (loading) return <p>Good things take time....</p>;
			if (error) return <p>Something went wrong...</p>;

			return (
				<div className='row meetingrooms'>
					<div className='title'>Select one of the free rooms</div>
					{data.MeetingRooms.map(
						rooms => {
							console.log(rooms);
							return (
								<div className='block'>
									<div className='name'>{rooms.name}</div>
									<div className='building'>{`${rooms.building.name}`}</div>
									<div className='floor'>{`floor: ${rooms.floor}`}</div>
									Meetings :
									{rooms.meetings.map(meeting => {
										return <div>{meeting.title}</div>;
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

export default MeetingRooms;
