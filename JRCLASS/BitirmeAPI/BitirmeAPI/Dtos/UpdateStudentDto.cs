namespace BitirmeAPI.Dtos
{
    public class UpdateStudentDto
    {
        public int studentID { get; set; }
        public string? studentName { get; set; }
        public string? studentSurname { get; set; }
        public string? studentCode { get; set; }
        public string? classCode { get; set; }
    }
}
