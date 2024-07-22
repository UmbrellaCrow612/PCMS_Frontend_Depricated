using PCMS.API.Models.People;

namespace PCMS.API.Models
{
    internal class Case
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string CaseNumber { get; set; } = GenerateCaseNumber();

        public required string CaseStatusId { get; set; }

        public required CaseStatus CaseStatus { get; set; }

        public DateTime OpenDate { get; set; } = DateTime.Now;

        public DateTime EditedtAt { get; set; } = DateTime.Now;

        public DateTime? CloseDate { get; set; }

        public required string CasePriorityId { get; set; }

        public required CasePriority CasePriority { get; set; }

        public required string IncidentTypeId { get; set; }

        public required IncidentType IncidentType { get; set; }

        public required string LocationId { get; set; }

        public required Location Location { get; set; }

        public required string DepartmentId { get; set; }

        public required Department Department { get; set; }

        public ICollection<Officer> Officers { get; set; } = [];

        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}