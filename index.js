const passport = require('passport');
const express = require('express')
const googleStratergy = require('./googleStrategy')
const facebookStrategy = require('./facebookStrategy')
const app = express();
// app.use(googleStratergy);
app.use(passport.initialize())
// Api call for google authenticationapp.get(
    app.get( '/',
    passport.authenticate('google', {scope:['email', 'profile']}),(req,res)=>{
});
// Api call back function
app.get('/callback'
          ,passport.authenticate('google', {scope: ['email', 'profile']}),
       (req,res)=>{
        res.send('Congrats');
});

app.get('/auth/facebook',
passport.authenticate('facebook',{  authType: 'reauthenticate',scope:['email'],failureRedirect: '/login' }),(req,res)=>{
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook',{  authType: 'reauthenticate',scope:['email','profile'],failureRedirect: '/login' }),
  (req, res)=> {
    // Successful authentication, redirect home.
 res.send('Congrats');
  });
app.listen(3000,() => console.log('app listening on port 3000!'));