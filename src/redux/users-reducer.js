const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 0, img: '', followed: false, fullname: 'Dmitry', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 1, img: '', followed: true, fullname: 'Sasha', status: 'Good morning', location: {city: 'Moscow', country: 'Russia'} },
        {id: 2, img: '', followed: false, fullname: 'Katya', status: 'Good afternoon', location: {city: 'Saint Petersburg', country: 'Russia'} },
        {id: 3, img: '', followed: true, fullname: 'Anton', status: 'Good evening', location: {city: 'Berlin', country: 'Germany'} },
        {id: 4, img: '', followed: false, fullname: 'Boris', status: 'Why not?', location: {city: 'Gomel', country: 'Belarus'} },
        {id: 5, img: '', followed: false, fullname: 'Denis', status: 'See you later', location: {city: 'Kiev', country: 'Ukraine'} },
        {id: 6, img: '', followed: false, fullname: 'Ivan', status: 'Are you kidding?', location: {city: 'Novgorod', country: 'Russia'} },
        {id: 7, img: '', followed: false, fullname: 'Mikhail', status: 'How is it going?', location: {city: 'Lviv', country: 'Ukraine'} },
        {id: 8, img: '', followed: false, fullname: 'Roman', status: 'How about you?', location: {city: 'Kabul', country: 'Afghanistan'} },
        {id: 9, img: '', followed: false, fullname: 'Stepan', status: 'Always welcome', location: {city: 'Yerevan', country: 'Armenia'} },
        {id: 10, img: '', followed: false, fullname: 'Yaroslav', status: 'I’m pretty sure', location: {city: 'Vienna', country: 'Austria'} },
        {id: 11, img: '', followed: false, fullname: 'Albina', status: 'I’m absolutely sure', location: {city: 'Brussels', country: 'Belgium'} },
        {id: 11, img: '', followed: false, fullname: 'Anna', status: 'I’m positive', location: {city: 'Havana', country: 'Cuba'} },
        {id: 11, img: '', followed: false, fullname: 'Varvara', status: 'In my opinion', location: {city: 'Copenhagen', country: 'Denmark'} },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }

}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}


export default usersReducer;
