class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicio: Date;
    private fechaFin: Date | null;
    private profesion: string;

    constructor(nombre: string, apellido: string, edad: number,
                fechaInicio: Date, fechaFin: Date | null, profesion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesion = profesion;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getEdad(): number {
        return this.edad;
    }
    public getFechaInicio(): Date {
        return this.fechaInicio;
    }
    public getFechaFin(): Date | null {
        return this.fechaFin;
    }
    public getProfesion(): string {
        return this.profesion;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public setEdad(edad: number): void {
        this.edad = edad;
    }
    public setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }
    public setFechaFin(fechaFin: Date | null): void {
        this.fechaFin = fechaFin;
    }
    public setProfesion(profesion: string): void {
        this.profesion = profesion;
    }
}

let empleado1: Employee = new Employee("Juan", "Pérez", 45,
    new Date(2015, 2, 1), new Date(2022, 5, 30), "Programador");

let empleado2: Employee = new Employee("Laura", "García", 29,
    new Date(2021, 8, 15), null, "Diseñadora");

console.log(`Nombre: ${empleado1.getNombre()} - Edad: ${empleado1.getEdad()}`);
console.log(`Nombre: ${empleado2.getNombre()} - Edad: ${empleado2.getEdad()}`);