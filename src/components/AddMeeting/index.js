import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './index.scss';

const AddMeeting = () => (
	<Mutation
		mutation={gql`
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
		onCompleted={({ login }) => {
			console.log(login);
		}}
	>
		{(meeting, { loading, error }) => {
			console.log('AddMeeting', meeting, loading, error);
			return (
				<div
					onClick={() => {
						meeting();
					}}
				>
					AddMeeting
				</div>
			);
		}}
	</Mutation>
);

export default AddMeeting;

// {
//     ({ loading, error, data }) => {
//         console.log('AddMeeting', loading, error, data);
//         if (loading) return <p>Good things take time....</p>;
//         if (error) return <p>Something went wrong...</p>;

//         return (
//             <div className='row addmeeting'>
//                 <div className='title'>Select one of the free rooms</div>
//                 {/* {data.MeetingRooms.map(rooms => {
// 						console.log(rooms);
// 						return (
// 							<div className='block'>
// 								<div className='name'>{rooms.name}</div>
// 								<div className='building'>{`${rooms.building.name}`}</div>
// 								<div className='floor'>{`floor: ${rooms.floor}`}</div>
// 								Meetings :
// 								{rooms.meetings.map(meeting => {
// 									return <div>{meeting.title}</div>;
// 								})}
// 							</div>
// 						);
// 					})} */}
//             </div>
//         );
//     }
// }
