namespace PCMS.API.Models
{
    internal class Department
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }
    }
}
