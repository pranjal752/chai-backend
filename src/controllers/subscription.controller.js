import mongoose from "mongoose"
import {user} from "../models/user.model.js"
import {subscription} from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleSubscription = asyncHandler(async(req, res) => {

})

const getUserChannelSubscribers = asyncHandler(async(req, res) => {

})

const getSubscribedChannels = asyncHandler(async(req, res) => {

})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}





