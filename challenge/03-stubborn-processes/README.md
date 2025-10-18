# Challenge 03: Stubborn Processes

**Description:** We've all been there — a process that just won't quit when you try to terminate it. In this challenge, you'll work with a Node.js application that stubbornly ignores the `SIGTERM` signal. Your task is to implement a clean shutdown procedure that allows the process to exit gracefully and print the flag.

**Goal:** Implement a clean shutdown procedure for the Node.js process, print the flag upon receiving `SIGTERM`.

**Difficulty:** Easy

## Getting Started
**Prerequisites:**
- Basic knowledge of Node.js
- Familiarity with process signals

**Rules:** 
- **Do not** examine the `scripts` directory, until after the challenge is complete. This is where the stubborn behavior is implemented.
- The challenge is only complete when the flag is printed to the console upon receiving `SIGTERM`

**Setup:**
- Run `node stubborn.js`, which is a busy process with no SIGTERM handler
- Open a new terminal window to work on the tasks

## Tasks
1) Attempt to gracefully terminate the process, `kill -TERM <pid>`.
2) Implement a `SIGTERM` handler to print the flag before exit.
3) Test the implementation by sending a `SIGTERM` signal again.

## Success criteria
- [ ] The flag should be printed to the console upon receiving `SIGTERM`.

## Bonus Challenge
- [ ] Explain the difference between `SIGTERM` and `SIGKILL`. Why can't `SIGKILL` be caught or ignored?
- [ ] Modify the process to also handle `SIGINT` (Ctrl+C)

## Hints
1) Task (1) requires you to obtain the process ID (PID), tools such as `ps`, `top` or `htop` can help with this. Combining with `grep` can help filter the output.
2) Step (2) requires you to handle the KILL signal in your application. Refer to the Node.js documentation on `process signals` for guidance.
3) You can force terminate the process using `kill -9 <pid>`, but this will not allow for a graceful shutdown or flag retrieval, and is not considered a valid solution.
