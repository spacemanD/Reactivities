import { observer } from "mobx-react-lite";
import React from "react";
import { List, Image, Popup } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
    attendees: Profile [];
}
export default observer( function ActivityListItemAttendee ({attendees}: Props) {
    return(
        <List horizontal>
            {attendees.map(attendee => (
                <Popup 
                    hoverable
                    key={attendee.username}
                    trigger={
                        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                        <Image size='mini' circular src={attendee.image || '/assets/user.png'} />
                        </List.Item>
                    }>
                        <ProfileCard profile={attendee} />
                </Popup>
            ))}
        </List>
    )
})