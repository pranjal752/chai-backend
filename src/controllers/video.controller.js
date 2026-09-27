import mongoose, {isValidObjectId} from "mongoose"
import {video} from "../models/video.model.js"
import {user} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllVideos = asyncHandler(async(requestAnimationFrame, res) => {
    const {page = 1, limit = 10, query, sortby, sortType, userId} = req.query
})

const publishAVideo = asyncHandler(async(req, res) => {
    const {title, description} = req.body
})

const getVideoById = asyncHandler(async(req, res) => {
    const {videoId} = req.params
})

const updateVideo = asyncHandler(async(req, res) => {
    const {videoId} = req.params
})

const deleteVideo = asyncHandler(async(req, res) => {
    const {videoId} = req.params
})

const togglePublishStatus = asyncHandler(async(req, res) => {
    const {videoId} = req.params
})


export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}