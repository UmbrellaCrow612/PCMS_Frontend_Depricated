using API.Models;
using API.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Text;

// auth vid use for jwt and swagger https://www.youtube.com/watch?v=mgeuh8k3I4g

var builder = WebApplication.CreateBuilder(args);

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("logs/myapp.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog(); // Use Serilog for logging

var connectionString = builder.Configuration.GetConnectionString("db") ?? "Data Source=db.db";

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

builder.Services.AddSqlite<ApplicationDbContext>(connectionString);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
   .AddJwtBearer(options =>
   {
       options.TokenValidationParameters = new TokenValidationParameters
       {
           ValidateIssuer = true,
           ValidateAudience = true,
           ValidateLifetime = true,
           ValidateIssuerSigningKey = true,
           ValidIssuer = builder.Configuration["Jwt:Issuer"],
           ValidAudience = builder.Configuration["Jwt:Audience"],
           IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
       };
   })
   .AddCookie(options =>
    {
        options.Cookie.Name = builder.Configuration["Cookie:Name"];
        options.ExpireTimeSpan = TimeSpan.FromMinutes(double.Parse(builder.Configuration["Cookie:ExpireTimeSpanInMinutes"]));
        options.SlidingExpiration = true;
        options.AccessDeniedPath = "/Forbidden/";
    });

builder.Services.AddAuthorization();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

var cookiePolicyOptions = new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.Strict,
};

app.UseCookiePolicy(cookiePolicyOptions);

app.MapControllers();

try
{
    Log.Information("Starting web application");
    app.Run();
    return 0;
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
    return 1;
}
finally
{
    Log.CloseAndFlush();
}