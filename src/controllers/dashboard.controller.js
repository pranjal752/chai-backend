import mongoose from "mongoose"
import {Like} from "../model/like.model.js"
import {Video} from "../model/video.model.js"
import {Subscription} from "../model/subscription.model.js"
import {ApiError}  from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiError.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getChannelStats = asyncHandler(async(req, res) => {

})

const getChannelVideos = asyncHandler(async(req, res) => {

})

export {
    getChannelStats,
    getChannelVideos
}