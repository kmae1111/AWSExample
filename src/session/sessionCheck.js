require("isomorphic-fetch")
const Amplify = require("aws-amplify");
const UserPool = require("../settings/userpool_setting");
Amplify.default.configure({
    Auth: { 
      identityPoolId: UserPool.identityPoolId,
      region: UserPool.region,
      userPoolId: UserPool.userPoolId,
      userPoolWebClientId: UserPool.userPoolWebClientId
    }
});

const sessionCheck=(req,res,next)=>{
    Amplify.Auth.currentSession()
    .then(function() {
        console.log ('already login');
        next();
    })
    .catch(function() {
        console.log('not login');
        res.redirect("/static/login.html")
    });
}
module.exports=sessionCheck;