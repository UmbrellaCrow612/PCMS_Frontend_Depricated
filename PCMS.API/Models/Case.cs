using PCMS.API.Models.People;

namespace PCMS.API.Models
{
    internal class Case
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string CaseNumber { get; set; } = GenerateCaseNumber();

        public required string CaseStatusId { get; set; }

        public required CaseStatus CaseStatus { get; set; }

        public DateTime OpenDate { get; set; } = DateTime.Now;

        public DateTime EditedtAt { get; set; } = DateTime.Now;

        public DateTime? CloseDate { get; set; }

        public required string CasePriorityId { get; set; }

        public required CasePriority CasePriority { get; set; }

        public required string IncidentTypeId { get; set; }

        public required IncidentType IncidentType { get; set; }

        public required string LocationId { get; set; }

        public required Location Location { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Officer> Officers { get; set; } = [];

        public ICollection<Suspect> Suspects { get; set; } = [];

        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}


/*
 
using Microsoft.EntityFrameworkCore;
using PCMS.API.Models.People;

namespace PCMS.API.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Case> Cases { get; set; }
        public DbSet<CaseStatus> CaseStatuses { get; set; }
        public DbSet<CasePriority> CasePriorities { get; set; }
        public DbSet<IncidentType> IncidentTypes { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Officer> Officers { get; set; }
        public DbSet<Suspect> Suspects { get; set; }

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
                .UsingEntity(j => j.ToTable("OfficerCases"));

            // Configure the many-to-many relationship between Case and Suspect
            modelBuilder.Entity<Case>()
                .HasMany(c => c.Suspects)
                .WithMany(s => s.Cases)
                .UsingEntity(j => j.ToTable("CaseSuspects"));

            base.OnModelCreating(modelBuilder);
        }
    }
}


 
 
 */