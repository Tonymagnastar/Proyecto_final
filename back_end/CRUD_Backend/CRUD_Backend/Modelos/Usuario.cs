namespace CRUD_Backend.Modelos
{
    public class Usuario
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public int RolID { get; set; }
        public Rol Rol { get; set; }
    }
}
