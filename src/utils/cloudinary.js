import {v2 as cloudinary} from "cloudinary";
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilepath) => {
    try{
        if (!localFilepath) return null;
        // upload the file on claudinary
        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto",
        });
        // file has been uploader successfully
        console.log("file is uploaded on Cloudinary",
            response.url);
            return response;
        
    }
    catch(error){
        if (localFilepath && fs.existsSync(localFilepath)){
        fs.unlinkSync(localFilepath); // remove the locally saved temporary file as the upload operation got falied
        }
        return null;
    }

}




cloudinary.uploader.upload("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk_UIkYzoPJGPH9oy47sZCUrtbk55fX_9nFNZO5A3iQ&s=10",
    {public_id: "olympic_flag"},
    (error, result) => {
        if (error) {
      console.error("Cloudinary upload failed:", error);
      return;
    }

    console.log("Upload successful:", result);
  }
);


export {uploadOnCloudinary}