namespace PCMS.API.Models
{
    public class Media
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string FilePath { get; set; }

        public required string Type { get; set; } 

        public DateTime UploadedAt { get; set; }

        public required string CaseId { get; set; }

        public required Case Case { get; set; }
    }
}
