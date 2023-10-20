import {DioAccount} from "./DioAccount";

class CompanyAccount extends DioAccount {

    public getLoan(value: number): void {
        if (value <= 0) {
            console.log("Empréstimos devem ser maiores que 0.");
            return;
        }
        if (this.validateStatus()){
            const saldoAnterior = this.getBalance();
            const saldoNovo = this.setBalance(value);
            
            console.log(`Empréstimo de R$ ${value.toFixed(2)} realizado com sucesso! Saldo anterior: R$ ${saldoAnterior.toFixed(2)}. Saldo atual: R$ ${saldoNovo.toFixed(2)}`);
        }
    }
}

export {CompanyAccount};