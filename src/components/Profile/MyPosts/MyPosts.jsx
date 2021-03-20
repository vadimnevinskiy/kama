import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {Form, Field} from 'react-final-form';

const MyPosts = (props) => {
    let postList = props.posts.map(item => {
        return (
            <Posts message={item.text} likes={item.likes} key={item.id}/>
        )
    });

    const onSubmit = (values) => {
        props.addPost(values.postText);
    }
    return (
        <div className={classes.posts}>
            {postList}
            <AddPostForm onSubmit={onSubmit} />
        </div>
    );
}


const AddPostForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.form}>
                        <div className={classes.fieldBox}>
                            <Field component="textarea" name="postText" placeholder="Enter post.."
                                   className={classes.field}/>
                            {/*<textarea className={classes.field} onChange={onWritingMessage} value={props.postText}/>*/}
                        </div>
                        <div className={classes.buttonBox}>
                            <button className={classes.button}>
                                <span className={`${classes.buttonIcon} material-icons`}>send</span>
                            </button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
}


export default MyPosts;
