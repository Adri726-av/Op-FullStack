interface DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    encender(): void;
    apagar(): void;
}

class Laptop implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public modelo: string) { }

    encender(): void {
        this.encendido = true;
        console.log(`El portátil ${this.nombre} se ha encendido`);
    }

    apagar(): void {
        this.encendido = false;
        console.log(`El portátil ${this.nombre} se ha apagado`);
    }

    abrirPrograma(programa: string): void {
        if (this.encendido) {
            console.log(`Abriendo ${programa} en el portátil ${this.modelo}`);
        } else {
            console.log("Tienes que encender el portátil primero");
        }
    }
}

class Smartphone implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public marca: string) { }

    encender(): void {
        this.encendido = true;
        console.log(`El móvil ${this.nombre} se ha encendido`);
    }

    apagar(): void {
        this.encendido = false;
        console.log(`El móvil ${this.nombre} se ha apagado`);
    }

    llamar(numero: number): void {
        if (this.encendido) {
            console.log(`Llamando al ${numero} desde el móvil ${this.marca}...`);
        } else {
            console.log("Tienes que encender el móvil primero");
        }
    }
}

let laptop1: Laptop = new Laptop("Mi portátil", false, "ThinkPad");
laptop1.abrirPrograma("VS Code");   
laptop1.encender();
laptop1.abrirPrograma("VS Code");
laptop1.apagar();

let smartphone1: Smartphone = new Smartphone("Mi móvil", false, "Samsung");
smartphone1.llamar(600123456);      
smartphone1.encender();
smartphone1.llamar(600123456);
smartphone1.apagar();