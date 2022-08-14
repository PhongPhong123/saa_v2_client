class Base {
    code: number;
    codename: string;
    division_type: string;
    name: string;
    image?: string;

    constructor(code: number, codename: string, division_type: string, name: string, image?: string) {
        this.code = code;
        this.codename = codename;
        this.division_type = division_type;
        this.name = name;
        this.image = image;
    }
}

export class Destination extends Base {
    phone_code: number;
    districts: Array<District>;

    constructor(districts: Array<District>, phone_code: number, code: number, codename: string, division_type: string, name: string, image?: string) {
        super(code, codename, division_type, name, image);
        this.phone_code = phone_code;
        this.districts = districts;
    }
}

class District extends Base {
    short_codename: string;
    wards: Array<Ward>;

    constructor(wards: Array<Ward>, short_codename: string, code: number, codename: string, division_type: string, name: string, image?: string) {
        super(code, codename, division_type, name, image);
        this.short_codename = short_codename;
        this.wards = wards;
    }
}

class Ward extends Base {
    short_codename: string;

    constructor(short_codename: string, code: number, codename: string, division_type: string, name: string, image?: string) {
        super(code, codename, division_type, name, image);
        this.short_codename = short_codename;
    }
}