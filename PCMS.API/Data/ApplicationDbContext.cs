using Microsoft.EntityFrameworkCore;
using PCMS.API.Models;

namespace PCMS.API.Data
{
    internal class ApplicationDbContext : DbContext
    {
        public DbSet<Case> Cases { get; set; } /* Code discover the remaning ones */

    }
}
