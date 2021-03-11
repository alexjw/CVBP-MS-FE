import React from "react"
import {Link, RouteComponentProps} from "react-router-dom"
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GetVolunteersQuery} from "../types";
import {GET_VOLUNTEERS} from "../queries/volunteers";
import Spinner from "./spinner";

const VolunteersPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetVolunteersQuery>( GET_VOLUNTEERS );
    console.log(data);

    return loading ? <Spinner/> : (
        <div>
            <h1>The Volunteers Page</h1>
            <h2>List</h2>
            { data.volunteers.map(volunteer => <li>{volunteer._id + ' ' + volunteer.name}</li>) }
        </div>
    )

}

export default VolunteersPage
