import { DioAccount } from "./DioAccount";

class NewAccount extends DioAccount {
    public deposit(value: number): void {
        if (value <= 0){
            console.log("Valor de depósito inválido.");
            return;
        }
        if (this.validateStatus() && value > 0) {
            const novoSaldo = this.setBalance(value+10);
            console.log(`Você depositou: R$ ${value.toFixed(2)} e ganhou mais R$ 10. Saldo total: R$ ${novoSaldo.toFixed(2)}`)
            return;
        };
    }
}

export { NewAccount };