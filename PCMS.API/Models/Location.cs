namespace PCMS.API.Models
{
    public class Location
    {
      
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public required string Address { get; set; }

        public required string City { get; set; }

        public required string PostCode { get; set; }
   
        public required string Type { get; set; }
  
        public required string Description { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
  
        public DateTime EditedAt { get; set; } = DateTime.Now;

        public required double Latitude { get; set; }

        public required double Longitude { get; set; }

        public ICollection<Evidence> Evidences { get; set; } = [];

        public ICollection<Incident> Incidents { get; set; } = [];

    }
}
