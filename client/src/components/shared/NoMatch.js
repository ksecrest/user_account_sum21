import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const NoMatch = () => (
<>
<Header>404 page</Header>
<Link to='/' > Return Home</Link>
</>
)
export default NoMatch;
