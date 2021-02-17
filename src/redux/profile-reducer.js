const ADD_POST = 'ADD-POST';
const WRITE_POST = 'WRITE-POST';

let initialState = {
    posts: [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ],
    postText: ''
};

const profileReducer = (state = initialState, action) => {
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
