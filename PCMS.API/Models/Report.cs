using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    internal class Report
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string CaseNUm { get; set; }

        [Required]
        public required DateTime DateCreated { get; set; }

        [Required]
        public required string Officer { get; set; }

        [Required]
        public required string Inci { get; set; }

        [Required]
        public required string Details { get; set; }

    }
}
