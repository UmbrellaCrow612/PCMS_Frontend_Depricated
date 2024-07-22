namespace PCMS.API.Models
{
    internal class Status
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public required string Description { get; set; }
    }
}
