using API.Models.Accounts;
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

        public required CaseType Type { get; set; }

        public required DateTime OpenDate { get; set; }

        public DateTime? CloseDate { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        public DateTime DateUpdated { get; set; } = DateTime.Now;

        public required CaseStatus Status { get; set; }
        
        public required CasePriority Priority { get; set; }

        public ICollection<Evidence> Evidences { get; set; } = [];

        public ICollection<CaseAction> CaseActions { get; set; } = [];

        public ICollection<Officer> Officers { get; set; } = [];

        public ICollection<Media> Media { get; set; } = [];

        public ICollection<Report> Reports { get; set; } = [];

        public ICollection<Person> People { get; set; } = [];

        public ICollection<SuspectAccount> SuspectAccounts { get; set; } = [];

        public ICollection<VictimAccount> VictimAccounts { get; set; } = [];

        public ICollection<WitnessAccount> WitnessAccounts { get; set; } = [];




        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }

        public enum CaseType
        {
            None = 0,
        }

        public enum  CaseStatus
        {
            None = 0,
        }

        public enum CasePriority
        {
            None = 0,
        }
    }
}
