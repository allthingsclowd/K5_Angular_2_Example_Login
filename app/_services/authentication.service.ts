import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    

    login(username: string, password: string, contract: string, region: string) {
  
        // CORS Proxy Service in use here
        let authURL = 'http://localhost:2337/identity.'.concat(region,'.cloud.global.fujitsu.com:443/v3/auth/tokens')

       
        
        let body = {"auth":
                        {"identity":
                                {"methods": ["password"], "password":
                                {"user":
                                    {"domain":
                                            {"name": contract},
                                             "name": username,
                                             "password": password
                                            }}}}}
                                            
        let bodyString = JSON.stringify(body); // Stringify payload

        let postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');

        let postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((res: Response)=>{
                console.log(res.json());
                console.log(res.headers);
                console.log("Native Response Object >> " + res);
                res.headers;
                let user = new User();
                
                // retrieve the K5/OpenStack authentication token from the response header
                user.id = res.headers.get('x-subject-token');
                
                // retrieve the remainder of the values from the response body
                user.name = res.json().token.user.name;
                user.catalog = res.json().token.catalog;
                console.log(user.catalog);
                console.log(user.id);
                //user.username = res.json().get('username');


                if (user && res.headers.get('x-subject-token')) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUsertoken', JSON.stringify(res.headers.get('x-subject-token')));
                }
            });



    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUsertoken');
    }
}

