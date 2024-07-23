namespace PCMS.API.Models
{
    public class Status
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public required string Description { get; set; }

        public ICollection<Case> Cases { get; set; } = [];
    }
}
