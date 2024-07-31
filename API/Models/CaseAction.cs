using API.Models.People;

namespace API.Models
{
    public class CaseAction
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        public required ActionType ActionType { get; set; }
        
        public required string Description { get; set; }
        
        public DateTime DatePerformed { get; set; } = DateTime.Now;
        
        public required string PerformedById { get; set; }
        public required Officer PerformedBy { get; set; }
        
        public required string CaseId { get; set; }
        public required Officer Case { get; set; }
    }

    public enum ActionType
    {
        Action,
    }
}
