namespace PCMS.API.Models.People
{
    internal class Suspect : Person
    {
        public required string Alias { get; set; }

        public required string Description { get; set; }

        public ICollection<Case> Cases { get; set; } = [];

        public required string PersonId { get; set; }

        public required Person Person { get; set; }
    }
}
