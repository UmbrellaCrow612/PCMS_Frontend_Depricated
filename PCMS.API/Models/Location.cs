using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Location
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Address { get; set; }

        [Required]
        public required string City { get; set; }

        [Required]
        public required string PostCode { get; set; }

        [Required]
        public required string Type { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [Required]
        public DateTime EditedAt { get; set; } = DateTime.Now;

        [Required]
        public required double Latitude { get; set; }

        [Required]
        public required double Longitude { get; set; }

        public ICollection<Evidence> Evidences { get; set; } = [];

        public ICollection<Incident> Incidents { get; set; } = [];

    }
}
