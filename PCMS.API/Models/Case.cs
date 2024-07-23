using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Case
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string CaseNumber { get; set; } = GenerateCaseNumber();

        [Required]
        public required Status Status { get; set; }

        [Required]
        public required string StatusId { get; set; }

        [Required]
        public required Priority Priority { get; set; }

        [Required]
        public required string PriorityId { get; set; }

        [Required]
        public required ICollection<Evidence> Evidences { get; set; }

        [Required]
        public required Department Department { get; set; }

        [Required]
        public int DepartmentID { get; set; }

        [Required]
        public required ICollection<Officer> Officers { get; set; }

        [Required]
        public required ICollection<Incident> Incidents { get; set; }

        [Required]
        public required DateTime OpenDate { get; set; }

       
        public DateTime? CloseDate { get; set; }

        [Required]
        public DateTime DateCreated { get; set; } = DateTime.Now;

        [Required]
        public DateTime DateUpdated { get; set; } = DateTime.Now;

        public string? CaseNotes { get; set; }

        public ICollection<Person> Suspects { get; set; } = [];

        public ICollection<Person> Witnesses { get; set; } = [];

        public ICollection<Person> Victims { get; set; } = [];


        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required string CaseType { get; set; }

        public ICollection<Media> Media { get; set; } = [];

        public ICollection<Report> Reports { get; set; } = [];
        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}