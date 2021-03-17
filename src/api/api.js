import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "23ab8b18-87cd-45c7-ba46-0b20b5014a46"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    unfollow(id) {
        return instance.delete(`follow/` + id)
            .then(response => {
                    return response.data
                }
            )
    },
    follow(id) {
        return instance.post(`follow/` + id)
            .then(response => {
                    return response.data
                }
            )
    },
    getProfile(id) {
        console.warn('Obsolet method. Please use profileAPI object')
        return profileAPI.getProfile(id)
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                    return response.data
                }
            )
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                    return response.data
                }
            )
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id)
            .then(response => {
                    return response.data
                }
            )
    },
    updateStatus(statusText) {
        return instance.put(`profile/status/`, {status: statusText})
            .then(response => {
                    return response.data
                }
            )
    }
}
