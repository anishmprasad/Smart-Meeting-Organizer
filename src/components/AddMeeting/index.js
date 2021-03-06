import React from 'react';
import { Query, Mutation } from 'react-apollo';
import './index.scss';
import { ADD_MEETING } from '../../schema/queries';

const AddMeeting = () => (
	<Mutation
		mutation={ADD_MEETING}
		onCompleted={({ login }) => {
			console.log(login);
		}}
	>
		{(Meeting, { loading, error }) => {
			console.log('AddMeeting', Meeting, loading, error);
			if (loading) return <p>Good things take time....</p>;
			if (error) return <p>Something went wrong...</p>;
			return (
				<div
					onClick={() => {
						Meeting({
							variables: {
								id: 1,
								title: 'anish m prasad',
								date: '13/02/2019',
								startTime: '21:00',
								endTime: '22:00',
								meetingRoomId: 1
							}
						});
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
