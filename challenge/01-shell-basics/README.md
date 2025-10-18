# Challenge 01: Shell Basics

**Description:** Navigate and manipulate the filesystem using shell commands.

**Goal:** Fix a script that fails due to PATH and permissions issues.

**Difficulty:** Easy

## Getting Started
**Prerequisites:**
- Basic knowledge of shell commands
- Access to a Unix-like terminal
- Familiarity with file permissions and environment variables

**Rules:** 
- Do not modify the contents of `bin/hello.sh` or `scripts/run.sh`

**Setup:** n/a

## Tasks
1) Inspect `bin/hello` and `scripts/run.sh`.
2) `run.sh` _should_ find `hello` via PATH and execute it.
3) Fix file permissions and PATH export.

## Success criteria
- [ ] `./scripts/run.sh` successfully executes and prints the flag to the terminal.

## Bonus Challenge
- [ ] Add error handling to `run.sh` for cases where `hello` is not found.

## Hints
1) Check the [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) line in `run.sh`.
2) Use `chmod` to fix permissions.
3) Modify the PATH in `run.sh` to include the directory of `hello`.
