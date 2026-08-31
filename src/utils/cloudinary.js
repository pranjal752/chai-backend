import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: 'chaiaurcode',
    api_key: '714598242411324',
    api_secret: 'blow9vsirfjoerffke'
});


const uploadOnCloudinary = async (localFilepath) => {
    try{
        if (!localFileath) return null
        // upload the file on claudinary
        cloudinary.uploader.upload(localFilepath, {
            resource_types: "auto"
        })
        // file has been uploader successfully
        console.log("file is uploaded on claudinary",
            response.url);
            return response;
        
    }
    catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got falied
        return null;
    }
}




claudnary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/olympic_flag.jpg",
    {public_id: "olympic_flag"},
    function(error, result) {console.log(result);

    }
)