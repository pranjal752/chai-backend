import mongoose from "mongoose";
import { Playlist } from "../models/playlist.model";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPlaylists = asyncHandler(async (requestAnimationFrame, res) => {
  const { name, description } = req.body
});

const getUserPlaylistByid = asynchandler(async(req, res) => {
    const {playlistId, userId} = req.params
})

const getPlaylistById = asyncHandler(async(req, res) => {
    const {playlistId} = req.paramas
})

const addVideoToPlaylist = asyncHandler(async(req, res) => {
    const {videoId} = req.params
})

const removeVideoFromPlaylist = asyncHandler(async(req , res) => {
    const {playlistId, videoId} = req.params
})

const DeletePlaylist = asyncHandler(async(req , res) => {
    const {DeleteId} = req.params
})

const updatePlaylist = asyncHandler(async(req, res) => {
    const {playlistId} = req.params
    const {name , description} = req.params 
})
 

export {
    createPlaylists,
    getUserPlaylistByid,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    DeletePlaylist,
    updatePlaylist




}