import {asyncHandler} from "../utils/asyncHandler.js";


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
   
   


     const {fullname,email, username, password}= req.body
     console.log("email: ", email);
})


export {registerUser}