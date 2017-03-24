# K5_Angular_2_Example_Login

# Update - 23/03/2017 - Angular 2 and K5 CORS challenge resolved...by using a lightweight CORS PROXY Server

See the cors_proxy_service.js for the solution.

https://github.com/allthingsclowd/K5_Angular_2_Example_Login


This repo has been put together to demonstrate how to work-around the CORS authentication challenges when building an Angular 2 SPA (Single Page Application) for Fujitsu's K5 platform.

## Challenge
They key challenge is that Fujitsu K5 does not currently support CORS which results in the following error:

"XMLHttpRequest cannot load https://identity.uk-1.cloud.global.fujitsu.com/v3/auth/tokens. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 404."


When I try the suggestions in this detailed CORS blog - http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/ 
I get the following errors when I send the 'preflight checks' -

## Solution
Use a CORS proxy server to accept your browser requests and forward them on as server requests thus by-passing the CORS (browser) issues.

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

Angular 2 User Registration and Login Example & Tutorial

To see a demo and further details go to http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
This version of the example uses SystemJS as the module loader.
