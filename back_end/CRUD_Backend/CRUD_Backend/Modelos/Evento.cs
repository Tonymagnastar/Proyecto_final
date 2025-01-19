namespace CRUD_Backend.Modelos
{
    public class Evento
    {
        public int ID {  get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public string Lugar { get; set; }
        public DateTime Fecha { get; set; }
        public int UsuarioID { get; set; }
    }
}
