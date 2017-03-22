# K5_Angular_2_Example_Login
https://github.com/allthingsclowd/K5_Angular_2_Example_Login

This repo has been put together to try and iron out the CORS authentication challenges when working with an Angular 2 SPA (Single Page Application)
which attempts to authenticate against the Fujitsu K5 Identity Backend. Using Chrome Version 57.0.2987.110 (64-bit) on Ubuntu for testing.

They key challenge that i'm having during testing is the following error:
"XMLHttpRequest cannot load https://identity.uk-1.cloud.global.fujitsu.com/v3/auth/tokens. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 404."

When I try the suggestions in this very useful CORS blog - http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/ I get the following errors when trying to send the 'preflight checks' -
"
http.umd.js:1207 Refused to set unsafe header "Access-Control-Request-Method"
http.umd.js:1207 Refused to set unsafe header "Access-Control-Request-Headers"
http.umd.js:1207 Refused to set unsafe header "Origin"
"

I have no access to modify the server side configuration - it's public cloud! 

The two questions are   (i) Does the K5 server side authentication API service support CORS?
                        (ii) If yes to (i) above - how do I configure this?

# Installation
Install NodeJS (> v4) and NPM (> v3) from https://nodejs.org/en/download/, you can check the versions you have installed by running node -v and npm -v from the command line.
git clone https://github.com/allthingsclowd/K5_Angular_2_Example_Login
cd K5_Angular_2_Example_Login
npm install --save-dev @angular/cli@latest
npm install
npm start

Navigate to http://localhost:3000

# Caution:
I've only hacked the authentication.service.ts file and the login.component.html to facilitate making the HTTP request to K5...there's a lot more to do once I get passed the CORS issue.



A big thanks to Jason Watmore for his templates that I've leveraged - 
# angular2-registration-login-example

Angular 2 User Registration and Login Example & Tutorial

To see a demo and further details go to http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
This version of the example uses SystemJS as the module loader.

Install NodeJS (> v4) and NPM (> v3) from https://nodejs.org/en/download/, you can check the versions you have installed by running node -v and npm -v from the command line.
 
Download the project source code from https://github.com/cornflourblue/angular2-registration-login-example
 
Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located).
 
Start the application by running npm start from the command line in the project root folder.