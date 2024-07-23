namespace PCMS.API.Models
{
    public class Department
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public required string Description { get; set; }

        public required string ShortCode { get; set; }

        public ICollection<Case> Cases { get; set; } = [];

        public ICollection<Officer> Officers { get; set; } = [];
    }
}
