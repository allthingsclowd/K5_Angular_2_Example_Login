import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    

    login(username: string, password: string, contract: string, region: string) {
  

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
        //postheaders.append('Origin', '*');

        let postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((res2: Response)=>{
                console.log(res2.json());
                console.log(res2.headers);
                console.log(res2);
                res2.headers;
            });



    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

