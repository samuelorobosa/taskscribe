# TaskScribe - CLI Task Management Tool

TaskScribe is a simple and efficient Command Line Interface (CLI) tool for managing your tasks. With TaskScribe, you can easily create, list, complete, undo, and delete tasks to help you stay organized and on top of your to-do list. Whether you're a developer, a student, or just someone looking to streamline your task management process, TaskScribe has got you covered.

## Installation

To get started with TaskScribe, you'll need to install it on your local machine. You can do this using npm (Node Package Manager). If you haven't already installed Node.js and npm, you can download and install them from [nodejs.org](https://nodejs.org/).

Once you have Node.js and npm installed, open your terminal and run the following command:

```bash
npm install -g taskscribe
```
## Usage
TaskScribe provides a variety of commands and options to help you manage your tasks effectively. Here's how you can use it:

```bash
cook [options] [command]
```

### Options:

- `-h`, `--help`: Display help for the command.

### Commands:

1. #### `create`

   Use the `create` command to add a new task to your list.

   ```bash
   cook create
    ```
   
2. #### `list`

   The `list` command displays all your tasks along with their status (completed or incomplete).

   ```bash
   cook list
    ```

3. #### `complete <id>`

   Mark a task as done by providing its ID as an argument.

   ```bash
   cook complete 1
    ```
   
4. #### `undo <id>`

    If you've completed a task but want to mark it as incomplete, use the `undo` command with the task's ID.

   ```bash
   cook undo 1
    ```
   
5. #### `delete <id>`

     To remove a task from your list, use the delete command followed by the task's ID.

   ```bash
   cook delete 1
    ```

6. #### `help [command]`

   Get help for a specific command or view general help by running:

   ```bash
   cook help [command]
    ```

## About the Author

TaskScribe was created by [Samuel Orobosa Amagbkahen](https://samuelorobosa.vercel.app/), a passionate developer dedicated to simplifying your task management experience. For more information about Samuel and his other projects, visit his [website](https://samuelorobosa.vercel.app/).
