import { atom } from 'recoil'

export const handlePostsState = atom({
    key: 'handlePostsState',
    default: false
})

export const getPostState = atom({
    key: 'getPostState',
    default: {}
})

export const useSSRPostsState = atom({
    key: 'useSSRPostsState',
    default: true
})