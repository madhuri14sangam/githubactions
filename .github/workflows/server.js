// server.js - Simple entry point structure
const http = require('http'); // Built-in Node.js module

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Hello World from Node.js!" }));
});

// FIX: Only listen to the port if file is executed directly (npm start)
// This prevents the server from starting automatically during tests
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running smoothly on port ${PORT}`);
    });
}

// FIX: Export the server so server.test.js can import and test it cleanly
module.exports = server;
