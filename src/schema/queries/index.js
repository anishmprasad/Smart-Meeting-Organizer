/* eslint-disable */

// import {
// 	GraphQLNonNull,
// 	GraphQLString,
// 	GraphQLID,
// 	GraphQLObjectType,
// 	GraphQLList,
// 	GraphQLInt,
// 	GraphQLInputObjectType
// } from 'graphql';
import gql from 'graphql-tag';

export const ADD_MEETING = gql`
	mutation {
		Meeting(id: 1, title: "Booked3", date: "13/02/2019", startTime: "21:00", endTime: "22:00", meetingRoomId: 1) {
			id
			title
		}
	}
`;

export const MEETING_ROOMS = gql`
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
`;

export const LISTING = gql`
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
`;
