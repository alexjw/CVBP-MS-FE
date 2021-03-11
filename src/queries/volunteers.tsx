import {gql} from "apollo-boost";

export const GET_VOLUNTEERS = gql`
    query getVolunteers {
        volunteers {
            _id, name
        }
    }
`;
