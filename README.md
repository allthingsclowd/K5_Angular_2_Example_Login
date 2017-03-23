# K5_Angular_2_Example_Login

# Update - 23/03/2017 - Angular 2 and K5 CORS challenge resolved...by using a lightweight CORS PROXY Server

See the cors_proxy_service.js for the solution.

## WARNING - This code is for debug use only and does not work at present!!!!! See Jason Watmore's original example for the working setup

https://github.com/allthingsclowd/K5_Angular_2_Example_Login


This repo has been put together to try and iron out the CORS authentication challenges when working with an Angular 2 SPA (Single Page Application).

I'm trying to get the SPA to authenticate against the Fujitsu K5 Identity Backend. Using Chrome Version 57.0.2987.110 (64-bit) on Ubuntu for testing.

They key challenge that I'm having during testing appears to be CORS related which results in the following error:

"XMLHttpRequest cannot load https://identity.uk-1.cloud.global.fujitsu.com/v3/auth/tokens. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 404."


When I try the suggestions in this detailed CORS blog - http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/ 
I get the following errors when I send the 'preflight checks' -

"
http.umd.js:1207 Refused to set unsafe header "Access-Control-Request-Method"

http.umd.js:1207 Refused to set unsafe header "Access-Control-Request-Headers"

http.umd.js:1207 Refused to set unsafe header "Origin"

"


I have no access to modify the server side configuration - it's a public cloud platform! 


The two key questions are :  

 - (i) Does the K5 server side authentication API service support CORS?
 - (ii) If yes to (i) above - how do I configure this?


# Installation

## Update 23/3/17 - Resolved by using a simple nodejs proxy service - see npm cors-anywhere module

 - Install NodeJS (> v4) and NPM (> v3) from https://nodejs.org/en/download/, you can check the versions you have installed by running node -v and npm -v from the command line.
 - git clone https://github.com/allthingsclowd/K5_Angular_2_Example_Login
 - cd K5_Angular_2_Example_Login
 - npm install --save-dev @angular/cli@latest
 - npm install
 - npm start

 Update 23/3/17 - The above application has be configured to use the following proxy server
  - Open a new terminal window
  - npm install cors-anywhere
  - cd to the cors_proxy_server folder
  - node cors_proxy_service.js

Navigate to http://localhost:3000

# Caution:
I've only hacked the authentication.service.ts file and the login.component.html to facilitate making the HTTP request to K5...there's a lot more to do for a full SPA but this should be enough to get folks passed the initial authentication hurdles.....the only restriction now is your imagination.



A big thanks to Jason Watmore for his templates that I've leveraged - 
# angular2-registration-login-example

Angular 2 User Registration and Login Example & Tutorial

To see a demo and further details go to http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
This version of the example uses SystemJS as the module loader.
