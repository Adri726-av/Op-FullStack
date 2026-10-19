class Animal {
    private nombre: string;
    private edad: number;
    private tipo: string;

    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getEdad(): number {
        return this.edad;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setEdad(edad: number): void {
        this.edad = edad;
    }
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public hacerRuido(): void {
        console.log(`${this.nombre} está haciendo un ruido`);
    }
}

class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }

    public getRaza(): string {
        return this.raza;
    }
    public setRaza(raza: string): void {
        this.raza = raza;
    }

    public hacerRuido(): void {
        console.log(`${this.getNombre()} dice: ¡Guau guau!`);
    }

    public traerPelota(): void {
        console.log(`${this.getNombre()} (${this.raza}) trae la pelota`);
    }
}

class Pajaro extends Animal {
    private puedeVolar: boolean;

    constructor(nombre: string, edad: number, puedeVolar: boolean) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }

    public getPuedeVolar(): boolean {
        return this.puedeVolar;
    }
    public setPuedeVolar(puedeVolar: boolean): void {
        this.puedeVolar = puedeVolar;
    }

    public hacerRuido(): void {
        console.log(`${this.getNombre()} dice: ¡Pío pío!`);
    }

    public volar(): void {
        if (this.puedeVolar) {
            console.log(`${this.getNombre()} está volando`);
        } else {
            console.log(`${this.getNombre()} no puede volar`);
        }
    }
}

let animal1: Animal = new Animal("Bicho", 3, "Desconocido");
let perro1: Perro = new Perro("Toby", 5, "Labrador");
let pajaro1: Pajaro = new Pajaro("Piolín", 2, true);
let pajaro2: Pajaro = new Pajaro("Pingu", 4, false);

animal1.hacerRuido();
perro1.hacerRuido();
perro1.traerPelota();
pajaro1.hacerRuido();
pajaro1.volar();
pajaro2.volar();
console.log(`${perro1.getNombre()} tiene ${perro1.getEdad()} años y es de tipo ${perro1.getTipo()}`);