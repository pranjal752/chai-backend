import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (requestAnimationFrame, res) => {
   // step for registration
   // got user details from frontend
   // validation - not empty
   // check if user already exists : username , email
   // check for images, check for avatar
   // upload them to cloudinary, avatar
   // create user object - create entry in DB
   // remove password and refresh taken field from response
   // check for user creation 
   // return res
   
   
     
     // step for registration
     const {fullname,email, username, password}= req.body
     console.log("email: ", email);

    //  if (fullName === ""){
    //   throw new ApiError(400, "fullname is required")
    //  } (or)

    if (
      [fullname, email, username, password].some((field) => 
      field?.trim() === "")
    ){
      throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
      $or: [{username},{email}]
    })

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists")
    }

    const avatarLocalath = req.files?.avatar[0]?.path
    const coverImagesLocalath = req.files?.coverImages[0]?.path

    if (!avatarLocalath){
      throw new ApiError (400, "Avatar file is required")
    }

   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage =  uploadOnCloudinary(coverImagesLocalath)

   if (!avatar){
      throw new ApiError (400, "Avatar file is required")
   }

   // to enter in database

   const user = await User.create({
     fullName,
     avatar: avatar.url,
     coverImage: coverImage?.url || "",
     email,
     password,
     username: username.toLowerCase()
   })
  // remove password and refresh taken field from response
   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )
  
    // check for user creation 
   if (!createdUser){
    throw new ApiError(500, "Something went wrong while registering a user ")
   }

   // return res
   return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
   )

  })


export {registerUser}