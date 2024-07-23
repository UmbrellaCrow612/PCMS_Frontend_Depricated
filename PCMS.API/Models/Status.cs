using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Status
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Description { get; set; }

        public virtual ICollection<Case> Cases { get; set; } = [];
    }
}
