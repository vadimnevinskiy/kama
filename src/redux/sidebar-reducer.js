let initialState = {
    navbar: [
        {id: 0, url: 'profile', name: 'Profile', icon: 'person'},
        {id: 1, url: 'dialogs', name: 'Dialogs', icon: 'mail'},
        {id: 2, url: 'users', name: 'Users', icon: 'group_add'},
        {id: 3, url: 'news', name: 'News', icon: 'event'},
        {id: 4, url: 'music', name: 'Music', icon: 'queue_music'},
        {id: 5, url: 'settings', name: 'Settings', icon: 'settings'},
        {id: 6, url: 'login', name: 'Login', icon: 'exit_to_app'},
    ],
    favorite: [
        {id: 0, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Dima'},
        {id: 1, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Vadim'},
        {id: 2, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Katya'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;
