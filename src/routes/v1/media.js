const express = require('express');
const router  = express.Router({mergeParams: true});
const Amplify = require("aws-amplify");


require("isomorphic-fetch")
const UserPool = require("../../settings/userpool_setting");
const Bucket = require("../../settings/bucket_setting");

Amplify.default.configure({
  Auth: { 
    identityPoolId: UserPool.identityPoolId,
    region: UserPool.region,
    userPoolId: UserPool.userPoolId,
    userPoolWebClientId: UserPool.userPoolWebClientId
  },
  Storage: {
    AWSS3: {
        bucket: Bucket.bucket,
        region: Bucket.region,
        identityPoolId: UserPool.identityPoolId,
    }
  }
});

router.post('/upload',(req,res) => {
  Amplify.Storage.put("timestamp_"+Date.now()+".txt", new Date().toString(),{
  level: 'private',
  })
  .then (result => 
    {
      console.log(result)
      res.redirect("/")
    })
  .catch(err => 
    {
      console.log(err)
      res.redirect("/")
    });
});

router.post('/download',(req,res) => {
  
  Amplify.Storage.vault.get(req.body.filename)
  .then (result => 
    {
      console.log(result)
      res.send(result);
    })
  .catch(err => 
    {
      console.log(err)
      res.redirect("/")
    });

});
module.exports = router;