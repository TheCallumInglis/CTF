# Challenge 04: Credential Leak

**Description:** In this challenge, you will explore a web application with a poorly implemented service that inadvertently exposes sensitive credentials. Your task is to identify these leaked credentials, use them to authenticate, and retrieve a hidden flag from the appropriate endpoint.

**Goal:** Retrieve the hidden flag by exploiting leaked credentials in the web application.

**Difficulty:** Medium

## Getting Started
**Prerequisites:**
- Familiarity with web applications and REST APIs
- Basic knowledge of authentication mechanisms

**Rules:** 
- **Do not** examine the source code directly to find the port or flag, until after the challenge is complete
- No bruteforcing or denial-of-service attacks.

**Setup:**
- Docker (Recommended)
    1. Build the Docker image: `docker build -t credential-leak:latest .`
    2. Run the container: `docker run -d -p 8080:8080 --name credential-leak -e CTF_FLAG="YOUR_FLAG" credential-leak:latest`
    3. Access the application at `http://localhost:8080/`.

## Tasks
1) Explore the `/login` endpoint and identify any potential vulnerabilities.
2) Investigate the `/users` endpoint for leaked credentials.
3) Access the `/flag` endpoint and retrieve the hidden flag.

## Success criteria
- [ ] You'll have obtained your CTF_FLAG from the appropriate endpoint by exploiting the leaked credentials.

## Bonus Challenge
- [ ] Identify and explain the security flaws that led to the credential leak.
- [ ] Consider how you would mitigate these vulnerabilities in a real-world application.
- [ ] Document your findings and solutions in a brief report.

## Hints
1) If a single IP makes 3 or more failed login attempts, the server will prevent further attempts for a period of time.
2) Credentials have been poorly "encoded", and accessible via an endpoint.
3) Tools such as `curl`, `Postman`, or browser developer tools can be helpful for inspecting requests and responses.
4) Check the response headers for any clues about the authentication mechanism.