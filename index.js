#!/usr/bin/env node

import { program } from 'commander';
import createATask from "./commands/createTask.js";
import listTasks from "./commands/listTasks.js";
import completeATask from "./commands/completeATask.js";
import activateATask from "./commands/activateATask.js";
import deleteATask from "./commands/deleteATask.js";



program
    .command('create')
    .description('Create a task')
    .action(createATask);

program
    .command('list')
    .description('List all tasks')
    .action(listTasks);

program
    .command('complete <id>')
    .description('Mark a task as done')
    .action(completeATask);

program
    .command('undo <id>')
    .description('Mark a task as incomplete')
    .action(activateATask);

program
    .command('delete <id>')
    .description('Delete a task')
    .action(deleteATask);

program.parse(process.argv);