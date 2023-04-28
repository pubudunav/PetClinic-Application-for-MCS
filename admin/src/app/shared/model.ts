export class Pet {
    $key: string;
    pname: string;
    nic:number;
    Gender: string;
    mobile: number;
    ptype:string;
    color:string;
    pId:string;
}

export class Vet {
    $key: string;
    name: string;
    nic:number;
    password: string;
    mobile: number;
    email:string;
    addrress:string;
}

export class Guardian {
    $key: string;
    name: string;
    nic:number;
    password: string;
    mobile: number;
    email:string;
    addrress:string;
}

export class Vaccine {
    $key: string;
    vname: string;
    vcode:number;
    mdate: string;
    exdate: number;
    pcode:string;

}

export class VaccineCard{
    $key: string;
    pId: string;
    date: Date;
    vname:string;
    vcode:string;
    nxtdoe:Date;
}

export class User{
    $key: string;
    username: string;
    password: string;
    usertype:string;
   
}