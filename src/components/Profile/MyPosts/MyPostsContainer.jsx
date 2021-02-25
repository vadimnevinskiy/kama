import React from 'react';
import {addPostActionCreator, writingPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let writingMessage = (text) => {
                        store.dispatch(writingPostActionCreator(text));
                    }

                    let AddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    return (
                        <MyPosts
                            postText={state.profile.postText}
                            posts={state.profile.posts}
                            updateNewPostTest={writingMessage}
                            addPost={AddPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
