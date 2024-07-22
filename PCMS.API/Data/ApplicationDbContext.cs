using Microsoft.EntityFrameworkCore;
using PCMS.API.Models.People;
using PCMS.API.Models;

namespace PCMS.API.Data
{
    internal class ApplicationDbContext : DbContext
    {
        public DbSet<Case> Cases { get; set; }
        public DbSet<CaseStatus> CaseStatuses { get; set; }
        public DbSet<CasePriority> CasePriorities { get; set; }
        public DbSet<IncidentType> IncidentTypes { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Officer> Officers { get; set; }
        public DbSet<Suspect> Suspects { get; set; }
        public DbSet<Person> People { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Case>()
                .HasOne(c => c.CaseStatus)
                .WithMany(cs => cs.Cases)
                .HasForeignKey(c => c.CaseStatusId);

            modelBuilder.Entity<Case>()
                .HasOne(c => c.CasePriority)
                .WithMany(cp => cp.Cases)
                .HasForeignKey(c => c.CasePriorityId);

            modelBuilder.Entity<Case>()
                .HasOne(c => c.IncidentType)
                .WithMany(it => it.Cases)
                .HasForeignKey(c => c.IncidentTypeId);

            modelBuilder.Entity<Case>()
                .HasOne(c => c.Location)
                .WithMany(l => l.Cases)
                .HasForeignKey(c => c.LocationId);

            modelBuilder.Entity<Case>()
                .HasOne(c => c.Department)
                .WithMany(d => d.Cases)
                .HasForeignKey(c => c.DepartmentId);

            modelBuilder.Entity<Officer>()
                .HasOne(o => o.Department)
                .WithMany(d => d.Officers)
                .HasForeignKey(o => o.DepartmentId);

            // Configure the many-to-many relationship between Case and Officer
            modelBuilder.Entity<Case>()
                .HasMany(c => c.Officers)
                .WithMany(o => o.Cases)
                .UsingEntity(j => j.HasMany("OfficerCases"));

            // Configure the many-to-many relationship between Case and Suspect
            modelBuilder.Entity<Case>()
                .HasMany(c => c.Suspects)
                .WithMany(s => s.Cases)
                .UsingEntity(j => j.HasMany("CaseSuspects"));

            // Configure the one-to-one relationship between Suspect and Person
            modelBuilder.Entity<Suspect>()
                .HasOne(s => s.Person)
                .WithMany()
                .HasForeignKey(s => s.PersonId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
