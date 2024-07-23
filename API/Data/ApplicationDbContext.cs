using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Case> Cases { get; set; }

        /*
         
        Add fulent api relationships ass well
         
         */

    }
}
