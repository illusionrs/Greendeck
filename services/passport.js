const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user')




passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})



passport.use(

    new GoogleStrategy({
        clientID:"905292128128-h7ku66emgugbhfcbuu3ai5gce8m09voj.apps.googleusercontent.com",
        clientSecret: "xcyGrfoAyPsJXmBRD1JMAZMb",
        callbackURL: "/auth/google/callback"
    },

    (accessToken, refreshToken, profile, done)=>{
        User.findOne({email: profile.emails.value})
        .then((exist)=>{
            if(exist){

            }
            else{
                new User({
                    name:profile.displayName,
                    email: profile.emails.value
                }).save()

               
            }
        })

        console.log("Access token:" ,accessToken)
        console.log("Refresh token:" ,refreshToken)
        console.log("profile: ",profile)
        console.log("done: ",done)

    }
    )
)