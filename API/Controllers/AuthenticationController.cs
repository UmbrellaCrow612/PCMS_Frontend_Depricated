using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    [Route("api/v1/auth")]
    [ApiController]
    public class AuthenticationController(IConfiguration configuration) : ControllerBase
    {

        private readonly IConfiguration _configuration = configuration;

        [HttpPost("jwt/login")]
        public IActionResult Login([FromBody] UserDto model)
        {
            // Perform user validation against your preferred mechanism (e.g., database)
            if (model.UserName == "admin")
            {
                // Generate JWT token as before
                var token = GenerateJwtToken(model.UserName);

                // Create and issue the cookie
                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, model.UserName)
                };

                var identity = new ClaimsIdentity(claims, "MyCookie");
                var principal = new ClaimsPrincipal(identity);

                var authProperties = new AuthenticationProperties
                {
                    ExpiresUtc = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["Cookie:ExpireTimeSpanInMinutes"])),
                    IsPersistent = true // Set to true for persistent cookies
                };

                HttpContext.SignInAsync("MyCookie", principal, authProperties);

                // Return token and any additional user information in response
                return Ok(new { token, user = model.UserName }); // Assuming a basic user object
            }

            return Unauthorized();
        }

        [HttpPost("cookie/login")]
        public IActionResult CookieLogin([FromBody] UserDto model)
        {
            if (model.UserName == "admin")
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, model.UserName)
                };

                var identity = new ClaimsIdentity(claims, "CookieAuth");
                var principal = new ClaimsPrincipal(identity);

                var authProperties = new AuthenticationProperties
                {
                    ExpiresUtc = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["Cookie:ExpireTimeSpanInMinutes"])),

                    IsPersistent = true
                };

                HttpContext.SignInAsync("CookieAuth", principal, authProperties);

                return Ok("Login successful");
            }

            return Unauthorized();
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, username)
            };

            var securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])),
                    SecurityAlgorithms.HmacSha256
                )
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(securityTokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public class UserDto
        {
            public string UserName { get; set; } = string.Empty;

            public string Password { get; set; } = string.Empty;

        }
    }


}