# Challenge 02 - Netstat

**Brief:** A Node.js server is running on your machine, but only bound to localhost. Use `netstat` to identify the open port, then `curl` to retrieve the flag.

**Prerequisites:**
- Basic knowledge of terminal/command line
- Docker installed (optional, but recommended)
    - Else, Node.js 18+ installed locally

**Rules:**
- **Do not** examine the source code directly to find the port or flag, until after the challenge is complete
- Use only the provided tools: `node`, `netstat`, `curl`, `grep`

**Tasks:**
- Docker (Recommended)
    1. Build the Docker image: `docker build -t netstat-challenge:latest .`
    2. Run the container: `docker run --rm -it netstat-challenge:latest sh`
    3. Inside the container, find the port the server is listening on using `netstat`. You may choose to utilise `grep` to filter the output
    4. Use `curl` to make a request to the server and retrieve the flag

- Local Node.js
    1. Run `node ./scripts/server.js`
    2. Find the port the server is listening on using `netstat`. You may choose to utilise `grep` to filter the output
    3. Use `curl` to make a request to the server and retrieve the flag

**Hint:**
- The server will run on a random unused port, between 1025 and 65535, each time it is started.
- `netstat` can be used to display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
- `grep` can be used to filter output based on patterns. You're looking for a service which is `LISTENING`
- `curl` is a command-line tool for transferring data with URLs.

**Bonus Challenge:**
- [ ] Understand how the server code works. Explore the `./scripts` directory to see how the server is implemented, including how it selects a random port and serves the flag.
- [ ] Explain why we must first check the port is unused before starting the server on that port.
- [ ] Modify the server code to log the port it is listening on when it starts.
- [ ] Explain the difference between binding a server to `localhost` vs. `0.0.0.0`. When would you use one over the other?
