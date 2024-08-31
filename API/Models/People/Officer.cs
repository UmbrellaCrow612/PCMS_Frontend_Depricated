namespace API.Models.People
{
    public class Officer : ApplicationUser
    {
        public required string BadgeNumber { get; set; }

        // public required string DepartmentId { get; set; }

       // public required Department Department { get; set; }

        // public ICollection<Case> Cases { get; set; } = [];

        // public ICollection<Report> Reports { get; set; } = [];

        // public ICollection<Notification> Notifications { get; set; } = [];

    }


}
