using Efarming_2.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace Efarming_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase

    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("getallfarmers")]
        public List<user> geruser()
        {
            List<user> users = new List<user>();
            using (MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("farmerDB")))
            { 
            connection.Open();
                using(MySqlCommand command = new MySqlCommand("select * from users where type='a'",connection)) 
                {
                    command.Connection = connection;
                   
                    using(MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            user obj = new user
                            {
                                Uid = (int)reader["uid"],
                                Fname = (string)reader["fname"],
                                Lname = (string)reader["lname"],
                                Email = (string)reader["email"],
                                Contact = (string)reader["contact"],
                                Type = (string)reader["type"]
                            };
                            users.Add(obj);      
                        }
                    }
                    connection.Close();
                }

            };
            return users;
        }
    }
}
