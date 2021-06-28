// provider is where you are defining things globally that you want to use other places
// in this section you will always need a context,consumer,provider





import React, {useState,useEffect} from 'react';
import axios from 'axios';

// setup the initial context, const model name + provider

export const UserContext = React.createContext();

// create exportable consumer = maybe consumer is the traveller

export const UserConsumer = UserContext.Consumer;

// create a provider

const UserProvider = ( {children }) => {
    const [user, setUser] = useState({})
// we're adding additional props, children is just in addition
    useEffect( () => {
        axios.get(`/api/users/1`)
        .then(res =>  setUser(res.data))
        .catch( err => console.log(err))
    }, [] )

const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, {user})
    .then( res=> setUser(res.data))
    .catch(err => console.log(err))
}

    return (
        <UserContext.Provider value={{
            ...user,

        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;







