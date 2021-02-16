const ADD_POST = 'ADD-POST';
const WRITE_POST = 'WRITE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const WRITE_MESSAGE = 'WRITE-MESSAGE';

let store = {
    _state: {
        pages: {
            dialogs: {
                users: [
                    {id: 0, name: 'Dima'},
                    {id: 1, name: 'Vadim'},
                    {id: 2, name: 'Katya'},
                    {id: 3, name: 'Lena'},
                    {id: 4, name: 'Viktor'},
                    {id: 5, name: 'Sasha'},
                    {id: 6, name: 'Vasya'},
                ],
                messages: [
                    {id: 0, text: 'Lorem ipsum dolor sit amet.'},
                    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
                    {id: 2, text: 'Lorem ipsum dolor.'}
                ],
                messageText: ''
            },
            profile: {
                posts: [
                    {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
                    {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
                    {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
                    {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
                ],
                postText: ''
            }
        },
        sidebar: {
            navbar: [
                {id: 0, url: 'profile', name: 'Profile', icon: 'person'},
                {id: 1, url: 'dialogs', name: 'Dialogs', icon: 'mail'},
                {id: 2, url: 'news', name: 'News', icon: 'event'},
                {id: 3, url: 'music', name: 'Music', icon: 'queue_music'},
                {id: 4, url: 'settings', name: 'Settings', icon: 'settings'},
            ],
            favorite: [
                {id: 0, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Dima'},
                {id: 1, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Vadim'},
                {id: 2, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Katya'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _writingPostMessage(value) {
        this._state.pages.profile.postText = value;
        this._callSubscriber(this._state);
    },
    _addPost() {
        let newPost = {
            id: this._state.pages.profile.posts.length + 1,
            text: this._state.pages.profile.postText,
            likes: 0
        }
        this._state.pages.profile.posts.push(newPost);
        this._state.pages.profile.postText = '';
        this._callSubscriber(this._state);
    },
    _writingMessage(value) {
        this._state.pages.dialogs.messageText = value;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: this._state.pages.dialogs.messages + 1,
            text: this._state.pages.dialogs.messageText,
        }
        this._state.pages.dialogs.messages.push(newMessage);
        this._state.pages.dialogs.messageText = '';
        this._callSubscriber(this._state);
    },

    dispatch(action) { // {type: 'ADD-POST', value: 'test'}
        if(action.type === ADD_POST) {
            this._addPost();
        }else if(action.type === WRITE_POST) {
            this._writingPostMessage(action.post);
        }else if(action.type === ADD_MESSAGE) {
            this._addMessage();
        }else if(action.type === WRITE_MESSAGE) {
            this._writingMessage(action.message)
        }
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const writingMessageActionCreator = (value) => {
    return {
        type: WRITE_MESSAGE,
        message: value
    }
}
export default store;
