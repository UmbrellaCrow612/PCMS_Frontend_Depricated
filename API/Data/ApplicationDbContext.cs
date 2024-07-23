using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<Case> Cases { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Evidence> Evidences { get; set; }

        public DbSet<Incident> Incidents { get; set; }

        public DbSet<Location> Locations { get; set; }

        public DbSet<Media> Medias { get; set; }

        public DbSet<Officer> Officers { get; set; }

        public DbSet<Person> Persons { get; set; }

        public DbSet<Priority> Prioritys { get; set; }

        public DbSet<Report> Reports { get; set; }

        public DbSet<Status> Statuss { get; set; }


    }
}
