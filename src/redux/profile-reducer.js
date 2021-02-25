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
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: state.postText,
                likes: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.postText = '';
            return stateCopy;
        }
        case WRITE_POST: {
            let stateCopy = {...state};
            stateCopy.postText = action.post;
            return stateCopy;
        }
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
