import React from "react"
import {Link, RouteComponentProps} from "react-router-dom"
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GetVolunteersQuery} from "../../types";
import {GET_VOLUNTEERS} from "../../queries/volunteers";
import Spinner from "../spinner";

const VolunteersPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetVolunteersQuery>( GET_VOLUNTEERS );

    const onEdit = (id:String) => {
        props.history.push('/volunteers/' + id + '/edit')
    }

    return loading ? <Spinner/> : (
        <div>
            <h1>The Volunteers Page</h1>
            <h2>List</h2>
            { data.volunteers.map(volunteer => <li>{volunteer._id + ' ' + volunteer.name}<button onClick={() => onEdit(volunteer._id)}>Edit</button></li>) }
        </div>
    )

}

export default VolunteersPage
