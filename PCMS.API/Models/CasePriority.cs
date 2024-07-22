namespace PCMS.API.Models
{
    internal class CasePriority
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string PriorityLevel { get; set; }

        public ICollection<Case> Cases { get; set; } = [];
    }
}
