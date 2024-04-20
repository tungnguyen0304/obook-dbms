import { IPhoto, IPost, IUser } from '@/interfaces';
import {create} from 'zustand';



type Store= {
    post: {
        users: IUser[];
        posts: IPost[];
        photos: IPhoto[][];
        listPostLike: string[];
    },
    setPost:  (
        users: IUser[],
        posts: IPost[],
        photos: IPhoto[][],
        listPostLike: string[]
      ) => void,
    addPost: (user: IUser, post: IPost, photos: IPhoto[]) => void,
    removePost: (user: IUser, post: IPost, photos: IPhoto[]) => void
}

const initialState={
    users: [],
    posts:[],
    photos:[],
    listPostLike:[]
}

const usePost = create<Store>()((set)=>({
    post: initialState,
    setPost: (users, posts, photos, listPostLike)=>set({
      post: {
        users,
        posts,
        photos,
        listPostLike
      }
    }),
    addPost: (user, post, photos)=>set((state)=>({
        post: {
            users: [user,...state.post.users],
            posts: [post, ...state.post.posts],
            photos: [photos, ...state.post.photos],
            listPostLike: state.post.listPostLike
        }
    })),
    removePost: (user, post, photos)=>set((state)=>({
        post:{
            users: state.post.users.filter(ele=> ele != user),
            posts: state.post.posts.filter(ele=>  ele !=post),
            photos: state.post.photos.filter(ele=> ele != photos),
            listPostLike: state.post.listPostLike
        }
    }))
   

}))

export default usePost;