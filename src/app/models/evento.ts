export class Evento{
	constructor(
		public id: number,
		public usuario_id: number,
		public lugar_id: number,
		public titulo: string,
		public contenido: string,
		public imagen: string,
		public status: string,
		public distribucion: string,
		public fecha: string,
		public hora_inicio: string,
		public hora_final: string,
		){

	}
}