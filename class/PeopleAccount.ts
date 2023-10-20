import {DioAccount} from "./DioAccount";

class PeopleAccount extends DioAccount {
    private doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

export {PeopleAccount};