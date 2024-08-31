using Microsoft.AspNetCore.Identity;

namespace API.Models.People
{
    public abstract class ApplicationUser : IdentityUser
    {
        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        public required string LastName { get; set; }

        public required DateTime DateOfBirth { get; set; }

        public required string ProfileImgUrl { get; set; }

        public required string Address { get; set; }

        public required string Gender { get; set; }

        public required string BirthPlace { get; set; }

        public required double Height { get; set; }

        public required string Race { get; set; }

        public required string Ethnicity { get; set; }

        public required string Nationality { get; set; }

        public string? PhysicalDescription { get; set; }

        public string? GeneralDescription { get; set; }

        public string? DriversLicenseNumber { get; set; }

        public string? NationalInsuranceNumber { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        public DateTime DateUpdated { get; set; } = DateTime.Now;
    }
}
