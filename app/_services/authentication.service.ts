import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    

    login(username: string, password: string, contract: string, region: string) {
        //let headers: Headers = new Headers();
        //headers.append('Access-Control-Request-Method','GET, PUT, POST, OPTIONS, DELETE');
        //headers.append('Access-Control-Request-Headers', 'content-type,accept');
        //headers.append( 'Origin', 'http://localhost:*');

        //let opts: RequestOptions = new RequestOptions();
        //opts.headers = headers;       

        let authURL = 'https://identity.'.concat(region,'.cloud.global.fujitsu.com/v3/auth/tokens')

        //this.http.options(authURL,opts)
        //    .map((res: Response)=>{
        //        console.log(res.json());
        //    });
        
        
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
        postheaders.append( 'Origin', 'http://localhost:3000');

        let postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        console.log(authURL);
        console.log(body);
        console.log(bodyString);
        console.log("Whoopie getting here");
        console.log(postheaders);

        return this.http.post(authURL, bodyString, postopts)
            .map((res2: Response)=>{
                console.log(res2.json());
            });



    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

