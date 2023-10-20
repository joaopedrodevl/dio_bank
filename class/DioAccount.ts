// Dio Banking

//name, accountNumber
//deposit(value)
//withdraw(value)

abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    public deposit(value: number): void {
        if (value <= 0){
            console.log("Você deve depositar valores maiores que R$ 0.");
            return;
        }
        if (this.validateStatus() && value > 0) {
            this.balance += value;
            console.log(`Você depositou: R$ ${value.toFixed(2)}. Saldo total: R$ ${this.balance.toFixed(2)}`)
            return;
        };   
        console.log("Erro interno!");
    }

    public withdraw(value: number): void {
        if (value <= 0){
            console.log("Você deve sacar valores maiores que R$ 0.");
            return;
        }
        if (value > this.balance){
            console.log(`Saldo insuficiente. Saldo atual: R$ ${this.balance.toFixed(2)}`);
            return;
        }
        if (this.validateStatus() && value > 0 && value <= this.balance){
            this.balance -= value;
            console.log(`Você sacou: R$ ${value.toFixed(2)}. Saldo total: R$ ${this.balance.toFixed(2)}`);
            return;
        }
        console.log("Erro interno!");
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(value: number): number {
        this.balance += value;
        return this.balance;
    }

    public getName(): string {
        return this.name;
    }

    public validateStatus(): boolean {
        if (this.status) return this.status;

        throw new Error("Conta inválida!");
    }
}

export {DioAccount};