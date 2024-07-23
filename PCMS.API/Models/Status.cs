using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    internal class Status
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Description { get; set; }
    }
}
