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

// export const ADD_MEETING = gql`
// 	mutation Meeting(id: Int, title: String, date: String, startTime: String, endTime: String, meetingRoomId: Int) {
// 		Meeting(id: $id, title: $title, date: $date, startTime: $startTime, endTime: $endTime, meetingRoomId: $meetingRoomId) {
// 			id
// 			title
// 		}
// 	}
// `;

// export const ADD_MEETING = gql`
// 	mutation SubmitComment($repoFullName: String!, $commentContent: String!) {
// 		submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {
// 			postedBy {
// 				login
// 				html_url
// 			}
// 			createdAt
// 			content
// 		}
// 	}
// `;

export const ADD_MEETING = gql`
	mutation AddMeeting(
		$id: Int!
		$title: String!
		$date: String!
		$startTime: String!
		$endTime: String!
		$meetingRoomId: Int!
	) {
		Meeting(
			id: $id
			title: $title
			date: $date
			startTime: $startTime
			endTime: $endTime
			meetingRoomId: $meetingRoomId
		) {
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
