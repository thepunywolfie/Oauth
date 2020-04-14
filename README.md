# Oauth
Login with google and facebook using passport.js
A starter code that authenticates user login via google and facebook. Passport.js functionality is implemented here and serves as a middleware that cross references your client id , secret and callback url that will be obtained from the google developer console or the facebook developer console.
Furthermore, It redirects the user back to the callback url which is <your site domain /auth/callback> with a JSON object of the user's "profile".
