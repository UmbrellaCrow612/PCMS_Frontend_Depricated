namespace PCMS.API.Models
{
    internal class Location
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string AddressLine1 { get; set; }

        public string? AddressLine2 { get; set; }

        public required string City { get; set; }

        public required string County { get; set; }

        public required string PostCode { get; set; }
    }
}
