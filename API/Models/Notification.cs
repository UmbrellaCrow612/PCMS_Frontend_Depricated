using API.Models.People;

namespace API.Models
{
    public class Notification
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required bool Read { get; set; } = false;

        public required string Message { get; set; }

        public required string OfficerId { get; set; }

        public required Officer Officer { get; set; }
    }
}
