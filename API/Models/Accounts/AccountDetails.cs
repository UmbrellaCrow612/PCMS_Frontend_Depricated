using API.Models.People;

namespace API.Models.Accounts
{

    // In this context it will be a person can have a witness accounjt victim etc

    // A report or description of an event or experience.
    public abstract class AccountDetails
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string PersonId { get; set; }

        public required Person Person { get; set; }

        public required string CaseId { get; set; }

        public required Case Case { get; set; }
    }
}
