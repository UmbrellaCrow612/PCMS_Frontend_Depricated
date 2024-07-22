namespace PCMS.API.Models
{
    internal class OfficerRank
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string RankName { get; set; }

        // Relationships
    }
}
