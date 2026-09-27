import mongoose from "mongoose"
import {tweet} from "../models/tweet.model.js"
import {user} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.controller.js"

const createTweet = asyncHandler(async(req, res) => {

})

const getUserTweets = asyncHandler(async(req, res) => {

})

const updateTweet = asyncHamdler(async(req, res) => {

})

const deleteTweet = asyncHamdler(async(req, res) => {

})


export {
    createTweet, 
    getUserTweets,
    updateTweet,
    deleteTweet
}