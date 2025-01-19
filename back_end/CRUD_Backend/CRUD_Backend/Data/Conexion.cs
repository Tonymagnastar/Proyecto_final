using CRUD_Backend.Modelos;
using Microsoft.EntityFrameworkCore;

namespace CRUD_Backend.Data
{
    public class Conexion:DbContext
    {
        public Conexion(DbContextOptions<Conexion> options): base(options) { }

        public DbSet<Rol> Rol { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Evento> Eventos{ get; set; }
    }
}
