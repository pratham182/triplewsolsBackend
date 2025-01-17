const Submission = require("../models/submissionModel");

exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    if(!submissions 
        || submissions.length === 0){
    
            return res.status(404).json({
              status: "success",
              error: false,
              message: "No submissions found",
              data: [],
            });
          
    }
    res.status(200).json({
      status: "success",
      error: false,
      message: "Submissions fetch successfully",
      data: submissions,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: true,
      message: "Failed to fetch submissions",
    });
  }
};
