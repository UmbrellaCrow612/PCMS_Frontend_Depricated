using PCMS.API.Models.People;

namespace PCMS.API.Models
{
    internal class Department
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public ICollection<Officer> Officers { get; set; } = [];

        public ICollection<Case> Cases { get; set; } = [];
    }
}
