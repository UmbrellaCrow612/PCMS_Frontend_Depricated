using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Officer : Person
    {
        [Required]
        public required string BadgeNumber { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string PasswordHash { get; set; }

        [Required]
        public required AccessLevel AccessLevel { get; set; }

        public ICollection<Case> AssignedCases { get; set; } = [];

        public required ICollection<Incident> Incidents { get; set; } = [];

    }

    public enum AccessLevel
    {
        LevelOne,
        LevelTwo,
        LevelThree,
        LevelFour,
        LevelFive,
    }
}
