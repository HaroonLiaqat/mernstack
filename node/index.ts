// // import * as os from "os";
// // import fs from "fs";
// import http from "http";

// // console.log(os.platform());
// // console.log(os.arch());
// // console.log(os.homedir());
// // console.log(os.version());

// // fs.appendFileSync("log.txt", "Hello World");

interface User {
  id?: number;
  name: string;
  salary: number;
}

let users: User[] = [];

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];

// const server = http.createServer((req, res) => {
//   const { url, method } = req;

//   if (url === "/favicon.ico") {
//     res.statusCode = 204;
//     res.end();
//     return;
//   }

//   if (url === "/users" && method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     if (users.length === 0) {
//       res.end(JSON.stringify({ message: "No users found" }));
//       return;
//     } else {
//       res.end(JSON.stringify(users));
//     }
//     // if (arr1.toString() === arr2.toString()) {
//     //   res.end(JSON.stringify({ message: "Arrays are equal" }));
//     //   return;
//     // } else {
//     //   res.end(JSON.stringify({ message: "Arrays are not equal" }));
//     //   return;
//     // }
//     return;
//   }

//   if (url?.startsWith("/users/") && url !== "/users" && method === "GET") {
//     const userId = url.split("/")[2];
//     if (!userId) {
//       res.writeHead(400, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User ID is required" }));
//       return;
//     }
//     const user = users.find((user) => user.id === parseInt(userId));
//     if (!user) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//       return;
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(user));
//     return;
//   }

//   if (url === "/users" && method === "POST") {
//     let body: Buffer[] = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const bodyString = Buffer.concat(body).toString();
//       let userData: User = JSON.parse(bodyString);
//       if (!userData.name) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "user name is required" }));
//         return;
//       }
//       if (!userData.salary) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "user salary is required" }));
//         return;
//       }
//       if (
//         Object.keys(userData).length === 2 &&
//         userData.name &&
//         userData.salary
//       ) {
//         userData.id = new Date().getTime();
//         users.push(userData);
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({
//             message: "User created successfully",
//             user: userData,
//           })
//         );
//         return;
//       } else {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({ message: "user should only have name and salary" })
//         );
//         return;
//       }
//     });
//     return;
//   }

//   if (url?.startsWith("/users/") && url !== "/users" && method === "PATCH") {
//     const userId = url.split("/")[2];
//     if (!userId) {
//       res.writeHead(400, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User ID is required" }));
//       return;
//     }
//     const user = users.find((user) => user.id === parseInt(userId));
//     if (!user) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//       return;
//     }
//     let body: Buffer[] = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const bodyString = Buffer.concat(body).toString();
//       let userData: User = JSON.parse(bodyString);
//       if (!userData.name) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "user name is required" }));
//         return;
//       }
//       if (!userData.salary) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "user salary is required" }));
//         return;
//       }
//       if (
//         Object.keys(userData).length === 2 &&
//         userData.name &&
//         userData.salary
//       ) {
//         user.name = userData.name;
//         user.salary = userData.salary;
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({ message: "User updated successfully", user: user })
//         );
//         return;
//       }
//     });
//     return;
//   }

//   if (url?.startsWith("/users/") && url !== "/users" && method === "DELETE") {
//     const userId = url.split("/")[2];
//     if (!userId) {
//       res.writeHead(400, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User ID is required" }));
//       return;
//     }
//     const user = users.find((user) => user.id === parseInt(userId));
//     if (!user) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//       return;
//     }
//     users = users.filter((user) => user.id !== parseInt(userId));
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({ message: "User deleted successfully", user: user })
//     );
//     return;
//   }

//   res.statusCode = 404;
//   res.end("Not found");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  if (users.length === 0) {
    res.status(200).json({ message: "No users found" });
    return;
  } else {
    res.status(200).json(users);
  }
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  let userData: User = req.body;
  if (!userData.name) {
    res.status(400).json({ message: "user name is required" });
    return;
  }
  if (!userData.salary) {
    res.status(400).json({ message: "user salary is required" });
    return;
  }
  if (Object.keys(userData).length === 2 && userData.name && userData.salary) {
    userData.id = new Date().getTime();
    users.push(userData);
    res.status(201).json({
      message: "User created successfully",
      user: userData,
    });
    return;
  } else {
    res.status(400).json({ message: "user should only have name and salary" });
    return;
  }
});

app.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  let userData: User = req.body;
  if (!userData.name) {
    res.status(400).json({ message: "user name is required" });
    return;
  }
  if (!userData.salary) {
    res.status(400).json({ message: "user salary is required" });
    return;
  }
  if (Object.keys(userData).length === 2 && userData.name && userData.salary) {
    user.name = userData.name;
    user.salary = userData.salary;
    res.status(200).json({ message: "User updated successfully", user: user });
    return;
  }
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  users = users.filter((user) => user.id !== parseInt(userId));
  res.status(200).json({ message: "User deleted successfully", user: user });
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

// let obj1 = {
//   name: "jawad",
//   age: 20,
//   address: {
//     city: "karachi",
//     country: "pakistan",
//   },
// };

// //reference copy
// let obj2 = obj1;
// obj2.age = 30;

// //shallow copy
// let obj3 = { ...obj1 };
// obj3.age = 40;
// obj3.address.city = "Lahore";

// //deep copy
// let obj4 = structuredClone(obj1);
// obj4.age = 50;
// obj4.address.city = "Islamabad";

// console.log("obj1 (default)=>", obj1);
// console.log("obj2 (reference copy)=>", obj2);
// console.log("obj3 (shallow copy)=>", obj3);
// console.log("obj4 (deep copy)=>", obj4);
