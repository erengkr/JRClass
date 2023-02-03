using BitirmeAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace BitirmeAPI.Data
{
    public interface IDataContext
    {
        DbSet<Parent> Parent { get; init; }
        DbSet<Student> Student { get; init; }
        DbSet<Teache> Teache { get; init; }
        DbSet<SchoolLeader> SchoolLeader {get;init;}

        Task<int> SaveChangesAsync(CancellationToken cancellationToket = default);
    }
}
