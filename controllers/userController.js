const Submission = require("../models/submissionModel");

exports.submitUserData=async(req,res)=>{
    try{
        const { name, socialMediaHandle } = req.body;

        if (!name || !socialMediaHandle || !req.files || req.files.length === 0) {
            return res.status(400).json({ error: "All fields are required" });
          }

          const existingSubmission = await Submission.find({
            socialMediaHandle: socialMediaHandle
          });
      
          if (existingSubmission.length > 0) {
            return res.status(400).json({
              status: "false",
              message: "error",
              error: "Submission with this social media  already exists."
            });
          }
          
          const uploadedImages = req.files.map((file) => file.path);

          const newSubmission = new Submission({
            name,
            socialMediaHandle,
            images: uploadedImages,
          });
      
          await newSubmission.save();
      
          res.status(201).json({
            status: "true",
            message: "Submission successful!",
            submission: newSubmission,
          });
    }catch(err){
      console.error(err);
    res.status(500).json({
      status: "false",
      message: "error",
      error: "An error occurred while processing this submission."
    });

    }
}