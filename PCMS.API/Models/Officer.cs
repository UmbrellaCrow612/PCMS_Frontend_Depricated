namespace PCMS.API.Models
{
    internal class Officer : Person
    {
        public required string BadgeNumber { get; set; }

        public required string Username { get; set; }

        public required string PasswordHash { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Case> AssignedCases { get; set; } = [];

    }
}
