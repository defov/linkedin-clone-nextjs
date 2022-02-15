import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {handlePostsState, useSSRPostsState} from '../atoms/postAtom'
import Input from './Input'
import Post from './Post'

const Feed = ({ posts }) => {
    const [realtimePosts, setRealtimePosts] = useState(posts)
    const [handlePosts, setHandlePosts] = useRecoilState(handlePostsState)
    const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/posts", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const responseData = await response.json()
            setRealtimePosts(responseData)
            setHandlePosts(false)
            setUseSSRPosts(false)
        }

        if(handlePosts) {
            fetchPosts()
        }
    }, [handlePosts])

    console.log(realtimePosts)

    return (
        <div className='space-y-6 pb-24 max-w-lg'>
            <Input />
            {/* Posts */}
            {realtimePosts.map(post => 
                <Post key={post._id} post={post}/>
            )}
        </div>
    )
}

export default Feed