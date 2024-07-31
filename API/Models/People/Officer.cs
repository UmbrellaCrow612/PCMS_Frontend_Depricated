namespace API.Models.People
{
    public class Officer : PersonDetails
    {

        public required string BadgeNumber { get; set; }

        public required string Username { get; set; }

        public required string PasswordHash { get; set; }

        public required AccessLevel AccessLevel { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Case> Cases { get; set; } = [];

        public ICollection<Report> Reports { get; set; } = [];

        public ICollection<Notification> Notifications { get; set; } = [];

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
