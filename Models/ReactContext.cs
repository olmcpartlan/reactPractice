using Microsoft.EntityFrameworkCore;
namespace react.Models
{
    public class ReactContext : DbContext
    {
        public ReactContext(DbContextOptions options) : base(options) { }
        public DbSet<Airport> Airports { get; set; }
        public DbSet<Runway> Runways { get; set; }

    }
}