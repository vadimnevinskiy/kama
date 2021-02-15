let state = {
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
    },
    profile: {
        posts: [
            {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
            {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
            {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
            {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
        ]
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
};

export default state;
