let express = require("express");
let routes = express.Router();

routes.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    users: [
      {
        name: "João",
        email: "joao@nodejs.com",
        age: 20,
        city: "São Paulo",
        id: 1,
      },
    ],
  });
});

routes.get("/admin", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [
        {
          name: "Maria",
          email: "maria@nodejs.com",
          age: 22,
          city: "Rio de Janeiro",
          id: 2,
        }
      ],
    });
  });

module.exports = routes;
