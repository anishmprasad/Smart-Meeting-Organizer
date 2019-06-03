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
		addMeeting(id: Int, title: String, date: String, startTime: String, endTime: String, meetingRoomId: Int) {
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
