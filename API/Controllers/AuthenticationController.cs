using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    [Route("api/v1/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public AuthenticationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost("jwt/login")]
        public IActionResult Login([FromBody] UserDto model)
        {

            if (model.UserName == "admin") {

                // Generate JWT token
                var token = GenerateJwtToken(model.UserName);

                // Return token in response
                return Ok( new { token });
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