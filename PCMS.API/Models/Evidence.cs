using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Evidence
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string ImgUrl { get; set; }

        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required Location Location { get; set; }

        [Required]
        public required string CaseId { get; set; }

        [Required]
        public required Case Case { get; set; }
    }
}
