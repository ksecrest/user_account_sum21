import { Card, Image } from 'semantic-ui-react';
import Boy from './image/Boy.jpg';
import UserConsumer, { UserContext } from '../providers/UserProvider';
import Moment from 'react-moment';


const Account = () => (
<UserContext>
    { value => (
<Card>
    <Image src= { Boy } size='mini' />
    <Card.Content>
      <Card.Header>{value.username}</Card.Header>
      <Card.Meta>
        Date joined:
        <Moment format="MM/DD/YYYY">
        {value.created_at} 
        </Moment>
                   
      </Card.Meta>
      <Card.Description>
        Membership Level: {value.membership}
      </Card.Description>
    </Card.Content>
  </Card>

    )}
    
</UserContext>
    )

export default Account; 
