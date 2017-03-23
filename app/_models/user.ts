export class User {
    id: string;
    name: string;
    password: string;
    contract: string;
    region: string;
    token: token[];
    catalog: catalog[];
    roles: roles[];
}

export class catalog {
    endpoints: endpoints[];
}

export class endpoints {
    name: string;
    url: string;
}

export class roles {
    name: string
}

export class token {
    id: string;
    expires: string;
}
