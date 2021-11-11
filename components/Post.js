import { BookmarkIcon, 
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon,
    HeartIcon,
} from "@heroicons/react/outline"

import {HeartIcon as hearticofilled} from "@heroicons/react/solid"
import {useSession} from 'next-auth/react'
import {useState, useEffect} from 'react'
import {addDoc,collection,onSnapshot,serverTimestamp,query,orderBy} from '@firebase/firestore'
import {db,storage} from '../firebase'

function Post({id,username,userImg,caption,img}){
    const {data:session} = useSession();
    const [comment,setComment] = useState("");
    const [comments,setComments] = useState([]);

    useEffect(() =>{

        const unsubscribe = onSnapshot(query(collection(db,'posts',id,'comments'), orderBy('timestamp','desc')),snapshot => setComments(snapshot.docs))

        return unsubscribe;
    },[db])

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;

        setComment('');

        await addDoc(collection(db,'posts',id,'comments'),{
            comment: commentToSend,
            username:session.user.username,
            profileImg:session.user.image,
            timestamp:serverTimestamp(),
        });

    };


    return(
        <div className="bg-white my-7 boarder rounded-sm">
            <h1></h1>
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                src={userImg} alt={username} />
                <p className="flex-1 font-bold ">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={img} alt="" className="object-cover w-full" />

            {session && (
                 <div className="flex justify-between px-4 pt-4">
                 <div className="flex space-x-4">
                     <HeartIcon className="btn"/>
                     <ChatIcon className="btn"/>
                     <PaperAirplaneIcon className="btn"/>
     
                 </div>
                     <BookmarkIcon className="btn"/>
                 </div>
            )}
           
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().profileImg} />
                            <p className="text-sm flex-1"><span className="font-bold">{comment.data().username}</span>{comment.data().comment}</p>
                        </div>
                    ))}
                </div>
            )}

            {session && (
                <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" placeholder="Add a comment..." value={comment}
                onChange={(e) => setComment(e.target.value)} className="border-none flex-1 focus:ring-0 outline-none" />
                <button type= "submit" disabled={!comment.trim()}
                onClick={sendComment}
                className="font-semibold text-blue-400">Post</button>
                </form>
            )}
            
        </div>
    )
}

export default Post