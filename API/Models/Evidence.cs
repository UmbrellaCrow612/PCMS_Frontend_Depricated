namespace API.Models
{
    public class Evidence
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string ImgUrl { get; set; }

        public required string Title { get; set; }

        public required string Description { get; set; }

        public required string LocationId { get; set; }

        public required Location Location { get; set; }

        public required string CaseId { get; set; }

        public required Case Case { get; set; }

    }
}
