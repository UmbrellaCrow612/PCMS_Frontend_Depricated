using Microsoft.EntityFrameworkCore;
using PCMS.API.Models;

namespace PCMS.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Case> Cases { get; set; }

        /*
         
        Add fulent api relationships ass well
         
         */

    }
}
