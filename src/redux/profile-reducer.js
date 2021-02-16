const ADD_POST = 'ADD-POST';
const WRITE_POST = 'WRITE-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: state.postText,
                likes: 0
            }
            state.posts.push(newPost);
            state.postText = '';
            return state;
        case WRITE_POST:
            state.postText = action.post;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const writingPostActionCreator = (value) => {
    return {
        type: WRITE_POST,
        post: value
    }
}

export default profileReducer;
