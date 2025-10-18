# Challenge 02: Netstat Detective

**Description:** A Node.js server is running on your machine, but only bound to localhost. Use `netstat` to identify the open port, then `curl` to retrieve the flag.

**Goal:** Retrieve the flag from the correct endpoint running Node.js server.

**Difficulty:** Easy

## Getting Started
**Prerequisites:**
- Basic knowledge of terminal/command line
- Docker installed (optional, but recommended)
    - Else, Node.js 18+ installed locally

**Rules:** 
- **Do not** examine the source code directly to find the port or flag, until after the challenge is complete
- Use only the provided tools: `node`, `netstat`, `curl`, `grep`

**Setup:** 
- Docker (Recommended)
    1. Build the Docker image: `docker build -t netstat-challenge:latest .`
    2. Run the container: `docker run --rm -it netstat-challenge:latest sh`

- Local Node.js
    1. Run `node ./scripts/server.js`
    2. Open a new terminal window to work on the tasks

## Tasks
1) Use `netstat` to find the port the Node.js server is listening on.
2) Use `curl` to make a request to the server and retrieve the flag.
3) Document your findings and the steps you took to complete the challenge.

## Success criteria
- [ ] Obtain the flag from the appropriate endpoint
- [ ] Document the commands used and the reasoning behind each step

## Bonus Challenge
- [ ] Understand how the server code works. Explore the `./scripts` directory to see how the server is implemented, including how it selects a random port and serves the flag.
- [ ] Explain why we must first check the port is unused before starting the server on that port.
- [ ] Modify the server code to log the port it is listening on when it starts.
- [ ] Explain the difference between binding a server to `localhost` vs. `0.0.0.0`. When would you use one over the other?

## Hints
1) The server will run on a random unused port, between 1025 and 65535, each time it is started.
2) `netstat` can be used to display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
3) `grep` can be used to filter output based on patterns. You're looking for a service which is `LISTENING`
4) `curl` is a command-line tool for transferring data with URLs.
