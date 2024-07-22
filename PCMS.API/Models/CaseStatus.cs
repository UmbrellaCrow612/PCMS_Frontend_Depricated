namespace PCMS.API.Models
{
    internal class CaseStatus
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Status { get; set; }

        public ICollection<Case> Cases { get; set; } = [];
    }
}
