const express = require('express');
const router  = express.Router({mergeParams: true});
const Amplify = require("aws-amplify");


require("isomorphic-fetch")
const UserPool = require("../../settings/userpool_setting");

Amplify.default.configure({
  Auth: { 
    identityPoolId: UserPool.identityPoolId,
    region: UserPool.region,
    userPoolId: UserPool.userPoolId,
    userPoolWebClientId: UserPool.userPoolWebClientId
  }
});

router.post('/',(req,res) => {
    Amplify.Auth.signIn(req.body.email, req.body.password)
    .then((data) => { 
        console.log("SignIn Success");
        res.redirect("/");
    })
    .catch((err) => {
      console.log("SignIn Failed");
      console.log(err);
      res.redirect("/");
    });
});

router.post('/signup',(req,res) => {
  Amplify.Auth.signUp(req.body.username,req.body.password,req.body.email)
    .then(
      data => {
        console.log("SignUp Success");
        res.redirect("/");
      })
    .catch(
        err => {
          console.log("SignUp Failed");
          console.log(err);
          res.redirect("/");
        }
      );
});

router.post('/signout',(req,res) => {
  Amplify.Auth.signOut()
    .then(
      data => {
        console.log("SignOut Success");
        res.redirect("/");
      })
    .catch(
      err => {
        console.log("SignOut Failed");
        console.log(err)
        res.redirect("/");
      }
    );
});
module.exports = router;