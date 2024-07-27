using System;

namespace API.Models
{
    public class CaseAction
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        public required string ActionType { get; set; }
        
        public required string Description { get; set; }
        
        public DateTime DatePerformed { get; set; } = DateTime.Now;
        
        public required string PerformedById { get; set; }
        public Officer PerformedBy { get; set; }
        
        public required string CaseId { get; set; }
        public Case Case { get; set; }
    }
}
