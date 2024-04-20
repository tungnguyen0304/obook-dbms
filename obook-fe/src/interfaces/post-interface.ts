import IComment from "./comment-interface";
import IUser from "./user-interface";

export default interface IPost {
    post_id?: string,
    isGroup?: Boolean,    // tin nay group dang hay do nguoi dung dang
    user: IUser,
    description: String,
    comments: IComment,
    countLikes: Number
}