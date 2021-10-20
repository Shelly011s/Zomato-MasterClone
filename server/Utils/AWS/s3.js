import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIA5RXPC2FSNYLA2HF7",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
