namespace PCMS.API.Models
{
    internal class IncidentType
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Incident { get; set; }

        public ICollection<Case> Cases { get; set; } = [];
    }
}
