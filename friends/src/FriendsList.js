import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then((res) => {
            console.log("FriendsList Response: ", res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    const updateFriends = (newFriend) => {
        setFriends([...friends, newFriend])
    }

    useEffect(() => {
        getFriends();
    }, [])



    return(
        <div>
            <FriendForm updateFriends={updateFriends}/>
            {friends.map((friend) => {
                return <Friend friend={friend}/>;
            })}
        </div>
    )
}

export default FriendsList;