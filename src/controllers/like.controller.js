import mongoose from "mongoose";
import {Like} from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleVideoLike = asyncHandler(async(requestAnimationFrame, res) => {
    const {videoId} = req.params
})

const toggleCommentLike = asyncHandler(async(req, res) => {
    const {CommentId} = req.params
})

const toggleTweetLike = asyncHandler(async(req, res) => {
    const {TweetId} = req.params
})

const getLikedvideo = asyncHandler(async(req, res) => {
   
})

export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedvideo
}
