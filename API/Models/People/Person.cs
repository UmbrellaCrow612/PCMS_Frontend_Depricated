using API.Models.Accounts;

namespace API.Models.People
{
    public class Person : PersonDetails
    {
       public ICollection<VictimAccount> VictimAccounts { get; set; } = [];

        public ICollection<WitnessAccount> WitnessAccounts { get; set; } = [];

        public ICollection<SuspectAccount> SuspectAccounts { get; set; } = [];

        public ICollection<Case> Cases { get; set; } = [];
    }
}
