import React, {createRef, useState} from "react"
import {useMutation} from "@apollo/react-hooks";
import {Link, RouteComponentProps} from "react-router-dom"
import { useQuery } from '@apollo/react-hooks';
import Spinner from "../spinner";
import {EditVolunteerMutation, EditVolunteerMutationVariables, FindVolunteerQuery, Volunteer} from "../../types";
import {EDIT_VOLUNTEER, FIND_VOLUNTEER, GET_VOLUNTEERS} from "../../queries/volunteers";
import {Text, Form, FormApi} from 'informed';

interface theProps extends RouteComponentProps {
    id: String
}

const EditVolunteerPage = (props: RouteComponentProps<{id: string}>) => {

    const findQuery = useQuery<FindVolunteerQuery>(FIND_VOLUNTEER, {variables: {_id: props.match.params.id}});
    const [editVolunteer, editedVolunteer] = useMutation<
        EditVolunteerMutation,
        EditVolunteerMutationVariables>(EDIT_VOLUNTEER, {
        refetchQueries: [{query: GET_VOLUNTEERS}]
    });
    const volunteer = findQuery?.data?.volunteer;
    const [formRef, setFormRef] = useState<FormApi<Volunteer>>(null);

    if(findQuery.loading)
        return <Spinner/>;

    const handleSubmit = () => {
        let values = formRef.getState().values;
        editVolunteer({
            variables: {
                ...values,
                _id: volunteer._id
            }
        }).then(() => {
            props.history.push('/volunteers');
        });
    };

    return (
        <div>
            <h1>Edit Volunteer</h1>
            <Form
                initialValues={volunteer}
                getApi={(formRef: FormApi<Volunteer>) => setFormRef(formRef)}
                onSubmit={handleSubmit}
            >
                {({formApi, formState}) => (
                    <React.Fragment>
                        <label>id: </label><span>{volunteer._id}</span>
                        <br/>
                        <label>Name: </label><Text field="name" type="text" />
                        <button>Submit</button>
                    </React.Fragment>
                )
                }
            </Form>
            <br/>
        </div>
    )

}

export default EditVolunteerPage
