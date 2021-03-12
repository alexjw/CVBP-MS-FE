import {gql} from "apollo-boost";

export const GET_VOLUNTEERS = gql`
    query getVolunteers {
        volunteers {
            _id, name
        }
    }
`;

export const FIND_VOLUNTEER = gql`
    query findVolunteer($_id: String!) {
        volunteer(_id: $_id) {
            _id, name
        }
    }
`;

export const EDIT_VOLUNTEER = gql`
    mutation editVolunteer($_id: String!, $name: String){
        editVolunteer(_id: $_id, name: $name) {
            _id, name
        }
    }
`;
