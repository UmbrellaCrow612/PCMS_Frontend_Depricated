namespace PCMS.API.Models.People
{
    internal class Person
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        public required string LastName { get; set; }

        public required DateTime DateOfBirth { get; set; }

        public required string Email { get; set; }

        public required string PhoneNumber { get; set; }

        public required string AdditionalInfo { get; set; }
    }
}
