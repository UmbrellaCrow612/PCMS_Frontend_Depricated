using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    internal class Officer : Person
    {
        [Required]
        public required string BadgeNumber { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string PasswordHash { get; set; }

    }
}
