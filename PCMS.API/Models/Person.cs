using System.ComponentModel.DataAnnotations;

namespace PCMS.API.Models
{
    public class Person
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        [Required]
        public required string LastName { get; set; }

        [Required]
        public required DateTime DateOfBirth { get; set; }

        public string? Email { get; set; }

        [Required]
        public required string PhoneNumber { get; set; }

        [Required]
        public required string ProfileImgUrl { get; set; }

        [Required]
        public required string Address { get; set; }

        [Required]
        public required string Gender { get; set; }

        [Required]
        public required string BirthPlace { get; set; }

        [Required]
        public required double Height { get; set; }

        [Required]
        public required string Race { get; set; }

        [Required]
        public required string Ethnicity { get; set; }

        [Required]
        public required string Nationality { get; set; }

        public string? PhysicalDescription { get; set; }

        public string? GeneralDescription { get; set; }

        public string? DriversLicenseNumber { get; set; }

        public string? NationalInsuranceNumber { get; set; }

        [Required]
        public DateTime DateCreated { get; set; } = DateTime.Now;

        [Required]
        public DateTime DateUpdated { get; set; } = DateTime.Now;

    }
}
