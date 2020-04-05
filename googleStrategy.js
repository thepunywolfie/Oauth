const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

function extractProfile(email,profile) {
let imageUrl = '';
if (profile.photos && profile.photos.length) {
imageUrl = profile.photos[0].value;
}
console.log(profile.id+' '+profile.displayName+ ' '+ profile.emails[0].value+' '+ profile.photos[0].value)
// console.log(email)
// console.log('profile of the user is')
// console.log(profile)
return {
id: profile.id,
displayName: profile.displayName,
image: imageUrl,
};

}
passport.use(new GoogleStrategy({
clientID:'87278538978-bepoevghufbg8krt9ftu4mcdpmokj82p.apps.googleusercontent.com' ,
clientSecret: 'FwT0eUeZMh4Yspc1KYkepNZf',
callbackURL: 'http://localhost:3000/callback',
accessType: 'offline',
userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
},
(accessToken, refreshToken, email,profile, cb) => {
       cb(null, extractProfile(email,profile));
}));
passport.serializeUser((user, cb) => {
          cb(null, user);
});
passport.deserializeUser((obj, cb) => {
          cb(null, obj);
});
