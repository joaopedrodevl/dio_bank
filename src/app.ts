import { PeopleAccount } from "../class/PeopleAccount";
import { CompanyAccount } from "../class/CompanyAccount";
import { NewAccount } from "../class/NewAccount";

const peopleAccount = new PeopleAccount(13, "Joao", 1);
peopleAccount.withdraw(10);
peopleAccount.deposit(100);
peopleAccount.withdraw(20);

console.log("====================================");

const companyAccount = new CompanyAccount("Dio LTDA", 1);
companyAccount.getLoan(1000);
companyAccount.deposit(10);
companyAccount.withdraw(100);
companyAccount.withdraw(1010);

console.log("====================================");

const newAccount = new NewAccount("Pedro", 2);
newAccount.withdraw(10);
newAccount.deposit(100);
newAccount.withdraw(20);
