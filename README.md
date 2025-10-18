# Capture the Flag - Foundations

A collection of Capture the Flag (CTF) challenges focused on foundational engineering skills. Designed to help learners build independence by mastering essential tools and concepts.

Each challenge includes a description, hints, and a solution guide to facilitate learning.

A challenge is considered complete when the user successfully retrieves the "flag" — a specific string or file that serves as proof of completion. Flags are typically represented in a standardised format, such as `FLAG{example_flag}`.

## Skills Covered
- Shell scripting
- HTTP and JSON handling
- Regular expressions
- Networking fundamentals
- Critical Thinking & Problem Solving
- Docker
- Kubernetes basics

## Prereqs
- Git
- Bash (macOS/Linux or WSL)
- Node.js 18+ (for specific challenges)
- Docker (for specific challenges)
- OpenSSL, curl, jq, nc (as needed)

## Contents
| Challenge | Topic | Description | Tags |
|-----------|-------|-------------|------|
| 1 | [Shell Basics](./challenge/01-shell-basics/README.md) | Navigate and manipulate the filesystem using shell commands. | Bash, chmod, PATH |
| 2 | [Netstat](./challenge/02-netstat/README.md) | Find the open port of a running service and retrieve its flag. | netstat, curl, grep |
| 3 | [Stubborn Processes](./challenge/03-stubborn-processes/README.md) | Handle process signals to ensure clean shutdowns. | SIGTERM, Process Management |

