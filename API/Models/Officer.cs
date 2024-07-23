namespace API.Models
{
    public class Officer
    {
        public required string BadgeNumber { get; set; }

        public required string Username { get; set; }

        public required string PasswordHash { get; set; }

        public required AccessLevel AccessLevel { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Case> Cases { get; set; } = [];

        public required ICollection<Report> Reports { get; set; } = [];

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
