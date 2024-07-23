using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    internal class Media
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string FilePath { get; set; }

        [Required]
        public required string Type { get; set; } 

        [Required]
        public DateTime UploadedAt { get; set; }
    }
}
