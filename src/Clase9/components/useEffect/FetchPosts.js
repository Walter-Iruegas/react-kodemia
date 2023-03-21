import {useState, useEffect} from 'react';

import { getUserByID } from '../helpers/getUsers';
import { getPostsByUserId } from '../helpers/getPosts';


export const FetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({})


    useEffect(() => {
       getUserByID().then((res) => setUser(res.data)).catch((error) => alert(error))
    }, [])


    useEffect(() => {
        if(!user?.id)
            return;

        getPostsByUserId(user.id).then((res) => {
            setPosts([...res.data]);
        }).catch((error) => alert(error))

    }, [user.id])

    const onChangeUserClick = () => {
        const newRandomUser = Math.floor(Math.random() * (10)) + 1;

        getUserByID(newRandomUser).then((res) => setUser(res.data)).catch((error) => alert(error))
    }
    

    if(!user || Object.keys(user).length === 0)
        return;

    return (
        <div>
            <button onClick={onChangeUserClick}>
                Cambiar Usuario
            </button>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>

            <br/>

            <h2>Posts - user: {user.id}</h2>
            <ul>
                {posts && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}