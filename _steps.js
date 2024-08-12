/*
-------------------
    INITIAL SETUP
-------------------
1. visit: console.firebase.google.com
2. create a new firebase project
3. visit docs (go to docs) : build > authentication > web > get started
4. register web app > firebase project home > click web > give name and register
5. install firebase for your project
6. DANGARIOUS: get firebase config and put it in firebase.init.js
7. export app from firebase.init.js
----------------------------
    SETUP THE PROVIDER
----------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a GoogleAuthProvider. Do not forget to use new GoogleAuthProvider().
10. got to firebase > build > authentication > sign in method
11. enable google sign in method
12. create a button for google sign in method with a click handler
13. inside the event handler, call signInWithPopup wit auth and provider
14. after signInWithPopup .then result and error

--------------------------------
    DISPLAY DATA
--------------------------------

----------------------------------
    ADD A NEW SIGN IN METHOD
----------------------------------
1. enable the sign in method
2. create github, twiter, fb, etc. create app
3. get clintId and secrect
*/