import { useState, useEffect } from "react";

import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";


import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, [posts]);

    const sendPost = (e) => {
        e.preventDefault();

        setPosts({...posts})
    }
    
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption 
                        Icon={ImageIcon} 
                        title="Photo" 
                        color="#7065F9" 
                    />
                    <InputOption 
                        Icon={SubscriptionsIcon} 
                        title="Video" 
                        color="#E7A33E" 
                    />
                    <InputOption 
                        Icon={EventNoteIcon} 
                        title="Event" 
                        color="#C0C8CD" 
                    />
                    <InputOption 
                        Icon={CalenderViewDayIcon} 
                        title="Write article" 
                        color="#7EC15E" 
                    />
                </div>
            </div>

            {posts.map(() => (
                <Post />
            ))}
            <Post 
                name="Salisu Shuaibu" 
                description="This is a test" 
                message="Wow this worked"
            />

        </div>
    )
}

export default Feed
