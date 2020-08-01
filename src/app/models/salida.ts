export class Salida{
	constructor(
		public id: number,
		public usuario_id: number,
		public vehiculo_id: number,
		public titulo: string,
		public contenido: string,		
		public imagen: string,
		public status: string,
		public fecha: string,
		public hora_inicio: string,
		public hora_final: string,
		){

	}
}