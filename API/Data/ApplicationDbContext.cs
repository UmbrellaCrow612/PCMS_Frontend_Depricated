using API.Models.Accounts;
using API.Models.People;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext(options)
    {
        // public DbSet<Case> Cases { get; set; }
        // public DbSet<Department> Departments { get; set; }
        // public DbSet<Evidence> Evidence { get; set; }
        // public DbSet<Incident> Incidents { get; set; }
        // public DbSet<Location> Locations { get; set; }
        // public DbSet<Media> Media { get; set; }
        // public DbSet<Officer> Officers { get; set; }
        // public DbSet<Person> Persons { get; set; }
        // public DbSet<Report> Reports { get; set; }
        // public DbSet<SuspectAccount> SuspectAccounts { get; set; }
        // public DbSet<VictimAccount> VictimAccounts { get; set; }
        // public DbSet<WitnessAccount> WitnessAccounts { get; set; }
        // public DbSet<Notification> Notifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Add any additional model configurations here
            // For example:
            // modelBuilder.Entity<Case>().HasIndex(c => c.CaseNumber).IsUnique();
        }
    }
}