import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {Segment, Grid, Icon, GridColumn, Button, Item} from 'semantic-ui-react'
import { Coin } from '../../../../app/models/activity';

interface Props {
    activity: Coin
}

export default observer(function ActivityDetailedInfo({activity}: Props) {
    const history = useHistory();
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{activity.displayName}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Item>
                        <Item.Description>View {activity.displayName}<Link to={`/market/?id=${activity.identifier}&name=${activity.displayName}`}> CHART</Link></Item.Description>
                        </Item>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})