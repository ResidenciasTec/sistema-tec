export class Reporte{
	constructor(
		public id: number,
		public usuario_id: number,
		public categoria_id: number,
		public titulo: string,
		public contenido: string,
		public imagen: string,
		public tipo: string,
		public status: string,
		public created_at: number
		){}

}