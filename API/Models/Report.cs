namespace API.Models
{
    public class Report
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string CaseId { get; set; }

        public required Case Case { get; set; }

        public DateTime DateCreated { get; set; }

        public required string OfficerId { get; set; }

        public required Officer Officer { get; set; }

        public required string IncidentId { get; set; }

        public required Incident Incident { get; set; }

        public required string Details { get; set; }

    }
}
