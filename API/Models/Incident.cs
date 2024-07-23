using API.Models.People;

namespace API.Models
{
    public class Incident
    {
    
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Title { get; set; }

        public required string Description { get; set; }

        public required DateTime OccurrenceDate { get; set; }

        public required string OfficerId { get; set; }

        public required Officer Officer { get; set; }

        public required string LocationId { get; set; }

        public required Location Location { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        public DateTime DateUpdated { get; set; } = DateTime.Now;
    }
}
