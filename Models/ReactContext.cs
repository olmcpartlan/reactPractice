using Microsoft.EntityFrameworkCore;
namespace react.Models
{
    public class ReactContext : DbContext
    {
        public ReactContext(DbContextOptions options) : base(options) { }
        public DbSet<Airports> Airports { get; set; }
        public DbSet<Runways> Runways { get; set; }

    }
}