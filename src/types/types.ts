export type PostType = {
    id: number
    text: string
    likes: number
}
export type PhotoType = {
    small: string
    large: string
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}

export type FavoriteType = {
    id: number
    img: string
    name: string
}
export type NavbarType = {
    id: number
    url: string
    name: string
    icon: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}


