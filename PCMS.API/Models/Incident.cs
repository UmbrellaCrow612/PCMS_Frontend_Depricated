using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Incident
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required DateTime OccurrenceDate { get; set; }

        [Required]
        public required string ReportingOfficer { get; set; }

        [Required]
        public required Location Location { get; set; }

        [Required]
        public DateTime DateCreated { get; set; } = DateTime.Now;

        [Required]
        public DateTime DateUpdated { get; set; } = DateTime.Now;

        public ICollection<Case> Cases { get; set; } = [];
    }
}
