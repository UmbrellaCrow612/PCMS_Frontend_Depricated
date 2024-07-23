using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    internal class Case
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string CaseNumber { get; set; } = GenerateCaseNumber();

        [Required]
        public required Status Status { get; set; }

        [Required]
        public required Priority Priority { get; set; }

        [Required]
        public required List<Evidence> Evidences { get; set; }

        [Required]
        public required Department Department { get; set; }

        [Required]
        public required List<Officer> Officers { get; set; }

        [Required]
        public required List<Incident> Incidents { get; set; }

        [Required]
        public required DateTime OpenDate { get; set; }

        [Required]
        public required DateTime CloseDate { get; set; }

        [Required]
        public DateTime DateCreated { get; set; } = DateTime.Now;

        [Required]
        public DateTime DateUpdated { get; set; } = DateTime.Now;

        public string? CaseNotes { get; set; }

        public List<Person> Suspects { get; set; } = [];

        public List<Person> Witnesses { get; set; } = [];

        public List<Person> Victims { get; set; } = [];


        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required string CaseType { get; set; }

        public List<Media> Media { get; set; } = [];

        public List<Report> Reports { get; set; } = [];
        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}