import http from "http";
import dotenv from "dotenv";

dotenv.config();

interface User {
  id?: string;
  name: string;
  email: string;
  age: number;
}

const isUser = (obj: any) => {
  return typeof obj.name === "string" && typeof obj.email === "string" && typeof obj.age === "number";
};

const arr: Array<User> = [
  {
    id: "1",
    name: "Danila",
    email: "danilakuroedov85@gmail.com",
    age: 20,
  },
];

const server = http.createServer((req, res) => {
  const urlParts = req.url?.split("/");
  let id = "";
  if (urlParts) {
    id = urlParts[urlParts.length - 1];
  }

  if (req.method === "GET") {
    switch (req.url) {
      case "/users":
        res.statusCode = 200;
        res.end(JSON.stringify(arr));
        break;

      case `/users/${id}`:
        const findUser = arr.find((user) => user.id == id);

        if (!findUser) {
          res.statusCode = 404;
          return res.end("User not found");
        }

        res.statusCode = 200;
        res.end(JSON.stringify(findUser));
        break;

      default:
        res.statusCode = 404;
        res.end("Route not found");
        break;
    }
  }

  if (req.method === "POST") {
    switch (req.url) {
      case "/users":
        let body = "";
        req.on("data", (chunk: string) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const parsed: User = JSON.parse(body);
            parsed.id = Date.now().toString();
            console.log(parsed);
            if (!isUser(parsed)) throw new Error("Invalid JSON");
            arr.push(parsed);

            res.writeHead(201, { "content-type": "application/json" });
            res.end(JSON.stringify({ data: "success" }));
          } catch (e) {
            res.writeHead(400, { "content-type": "application/json" });
            res.end(JSON.stringify({ data: "Invalid JSON" }));
          }
        });
        break;
      default:
        res.statusCode = 404;
        res.end("Resource not found");
        break;
    }
  }

  if (req.method === "PUT") {
    switch (req.url) {
      case `/users/${id}`:
        let body = "";
        req.on("data", (chunk: string) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const parsed: User = JSON.parse(body);
            if (!isUser(parsed)) throw new Error("Invalid JSON");

            let changed = false;
            arr.map((user) => {
              if (user.id == id) {
                user.name = parsed.name;
                user.email = parsed.email;
                user.age = parsed.age;
                changed = true;
              }
            });

            if (!changed) {
              res.writeHead(400, { "content-type": "application/json" });
              res.end(JSON.stringify({ message: "incorrect id" }));
            }

            res.writeHead(201, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "user was edited" }));
          } catch (e) {
            res.writeHead(400, { "content-type": "application/json" });
            res.end(JSON.stringify({ data: "Invalid JSON" }));
          }
        });
        break;
      default:
        res.statusCode = 404;
        res.end("Resource not found");
        break;
    }
  }

  if (req.method === "DELETE") {
    switch (req.url) {
      case `/users/${id}`:
        try {
          const index = arr.findIndex((elem) => elem.id == id);

          if (index === -1) {
            res.writeHead(404, { "content-type": "application/json" });
            return res.end(JSON.stringify({ message: "User not found" }));
          }

          arr.splice(index, 1);

          res.statusCode = 204;
          res.end("After successful deletion");
        } catch (e) {
          res.writeHead(400, { "content-type": "application/json" });
          res.end(JSON.stringify({ data: "Invalid JSON" }));
        }
        break;
      default:
        res.statusCode = 404;
        res.end("Resource not found");
        break;
    }
  }
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
