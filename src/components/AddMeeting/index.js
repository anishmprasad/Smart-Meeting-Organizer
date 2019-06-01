import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './index.scss';

const AddMeeting = () => (
	<Query
		query={gql`
			mutation {
				Meeting(
					id: 1
					title: "Booked3"
					date: "13/02/2019"
					startTime: "21:00"
					endTime: "22:00"
					meetingRoomId: 1
				) {
					id
					title
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			console.log('AddMeeting', loading, error, data);
			if (loading) return <p>Good things take time....</p>;
			if (error) return <p>Something went wrong...</p>;

			return (
				<div className='row addmeeting'>
					<div className='title'>Select one of the free rooms</div>
					{data.MeetingRooms.map(rooms => {
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
					})}
				</div>
			);
		}}
	</Query>
);

export default AddMeeting;
