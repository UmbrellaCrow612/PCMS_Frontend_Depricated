using API.Models.People;

namespace API.Models
{
    public class Case
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string CaseNumber { get; set; } = GenerateCaseNumber();

        public required string Title { get; set; }

        public required string Description { get; set; }

        public string? CaseNotes { get; set; }

        public required string CaseType { get; set; }

        public required DateTime OpenDate { get; set; }

        public DateTime? CloseDate { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        public DateTime DateUpdated { get; set; } = DateTime.Now;




        // Relations one to one

        public required Status Status { get; set; }

        public required string StatusId { get; set; }
        
        public required Priority Priority { get; set; }

        public required string PriorityId { get; set; }

        public required Department Department { get; set; }

        // one to many

        public required ICollection<Evidence> Evidences { get; set; }

        public ICollection<Officer> Officers { get; set; } = [];

        public ICollection<Media> Media { get; set; } = [];

        public ICollection<Report> Reports { get; set; } = [];



        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}