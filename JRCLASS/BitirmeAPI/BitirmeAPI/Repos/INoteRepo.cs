using BitirmeAPI.Model;

namespace BitirmeAPI.Repos
{
    public interface INoteRepo
    {
        Task<Note> Get(int id);
        Task<IEnumerable<Note>> GetAll();
        Task Add(Note note);
        Task Delete(int id);
        Task Update(Note note);
    }
}
