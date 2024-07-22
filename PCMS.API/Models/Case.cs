namespace PCMS.API.Models
{
    internal class Case
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string CaseNumber { get; set; } = GenerateCaseNumber();

        public DateTime OpenDate { get; set; } = DateTime.Now;

        public DateTime EditedtAt { get; set; } = DateTime.Now;

        public DateTime? CloseDate { get; set; }

        private static string GenerateCaseNumber()
        {
            throw new NotImplementedException();
        }
    }
}
