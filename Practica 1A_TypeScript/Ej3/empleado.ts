class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicio: Date;
    private fechaFinal: Date;
    private profesion: string;

	constructor($nombre: string, $apellido: string, $edad: number, $fechaInicio: Date, $fechaFinal: Date, $profesion: string) {
		this.nombre = $nombre;
		this.apellido = $apellido;
		this.edad = $edad;
		this.fechaInicio = $fechaInicio;
		this.fechaFinal = $fechaFinal;
		this.profesion = $profesion;
	}
    

    /**
     * Getter $nombre
     * @return {string}
     */
	public get $nombre(): string {
		return this.nombre;
	}

    /**
     * Getter $apellido
     * @return {string}
     */
	public get $apellido(): string {
		return this.apellido;
	}

    /**
     * Getter $edad
     * @return {number}
     */
	public get $edad(): number {
		return this.edad;
	}

    /**
     * Getter $fechaInicio
     * @return {Date}
     */
	public get $fechaInicio(): Date {
		return this.fechaInicio;
	}

    /**
     * Getter $fechaFinal
     * @return {Date}
     */
	public get $fechaFinal(): Date {
		return this.fechaFinal;
	}

    /**
     * Getter $profesion
     * @return {string}
     */
	public get $profesion(): string {
		return this.profesion;
	}

    /**
     * Setter $nombre
     * @param {string} value
     */
	public set $nombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter $apellido
     * @param {string} value
     */
	public set $apellido(value: string) {
		this.apellido = value;
	}

    /**
     * Setter $edad
     * @param {number} value
     */
	public set $edad(value: number) {
		this.edad = value;
	}

    /**
     * Setter $fechaInicio
     * @param {Date} value
     */
	public set $fechaInicio(value: Date) {
		this.fechaInicio = value;
	}

    /**
     * Setter $fechaFinal
     * @param {Date} value
     */
	public set $fechaFinal(value: Date) {
		this.fechaFinal = value;
	}

    /**
     * Setter $profesion
     * @param {string} value
     */
	public set $profesion(value: string) {
		this.profesion = value;
	}

}