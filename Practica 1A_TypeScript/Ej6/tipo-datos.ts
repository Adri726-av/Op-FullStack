class Almacen<T> {
    private elementos: T[] = [];

    agregarElemento(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtenerElemento(posicion: number): T | undefined {
        return this.elementos[posicion];
    }

    listarElementos(): void {
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(`Posición ${i}:`, this.elementos[i]);
        }
    }
}

let almacenNumeros: Almacen<number> = new Almacen<number>();
almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(20);
almacenNumeros.agregarElemento(30);
console.log(almacenNumeros.obtenerElemento(1));
almacenNumeros.listarElementos();

let almacenCadenas: Almacen<string> = new Almacen<string>();
almacenCadenas.agregarElemento("juan");
almacenCadenas.agregarElemento("ana");
console.log(almacenCadenas.obtenerElemento(0));
almacenCadenas.listarElementos();

type Alumno = { nombre: string, nota: number };
let almacenAlumnos: Almacen<Alumno> = new Almacen<Alumno>();
almacenAlumnos.agregarElemento({ nombre: "Pedro", nota: 7 });
almacenAlumnos.agregarElemento({ nombre: "Lucía", nota: 9 });
console.log(almacenAlumnos.obtenerElemento(1));
almacenAlumnos.listarElementos();

console.log(almacenNumeros.obtenerElemento(10)); 