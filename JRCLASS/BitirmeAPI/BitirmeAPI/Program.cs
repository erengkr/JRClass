using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BitirmeAPI.Data;
using BitirmeAPI.Repos;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BitirmeAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BitirmeAPIContext") ?? throw new InvalidOperationException("Connection string 'BitirmeAPIContext' not found.")));

builder.Services.AddScoped<IDataContext>(provider => provider.GetService<BitirmeAPIContext>());
builder.Services.AddScoped<IStudentRepo, StudentRepo>();
builder.Services.AddScoped<IParentRepo, ParentRepo>();
builder.Services.AddScoped<ITeacheRepo, TeacheRepo>();
builder.Services.AddScoped<ILessonRepo, LessonRepo>();
builder.Services.AddScoped<ICommentRepo, CommentRepo>();
builder.Services.AddScoped<IStudentRepo, StudentRepo>();
builder.Services.AddScoped<ICommentRepo,CommentRepo > ();
builder.Services.AddScoped<ILeaderRepo, LeaderRepo>();





builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowAll");

app.MapControllers();

app.Run();
