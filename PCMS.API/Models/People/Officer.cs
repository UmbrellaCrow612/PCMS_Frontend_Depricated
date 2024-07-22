namespace PCMS.API.Models.People
{
    internal class Officer : Person
    {
        public required string BadgeNumber { get; set; }

        public required string Username { get; set; }

        public required string PasswordHash { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Case> Cases { get; set; } = [];

    }
}
