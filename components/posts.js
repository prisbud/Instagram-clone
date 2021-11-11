import Post from './Post';
import {useState} from 'react'
import {onSnapshot , collection,orderBy,query} from '@firebase/firestore'
import {db,storage} from '../firebase'
import {useEffect} from 'react'

const posts =[
    {
        id: '123',
        username: 'ssshagah',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON'
},
{
    id: '123',
    username: 'ssshagah',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON'
},
{
    id: '123',
    username: 'ssshagah',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON'
},
]

function Posts(){
    const [posts,setPosts] = useState([])

    useEffect(() =>{
        const unsubscribe = onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot =>{
            setPosts(snapshot.docs);
        });
        console.log(posts)
        return unsubscribe;

    },[db])

   
    return(
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id}
                username={post.data().username}
                userImg = {post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
                />

                ))}
        </div>
    )
}

export default Posts