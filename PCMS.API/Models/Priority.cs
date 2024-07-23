using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Priority
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required string ColorCode { get; set; }

        [Required]
        public required int NumericValue { get; set; }

        public ICollection<Case> Cases { get; set; } = [];


    }
}
