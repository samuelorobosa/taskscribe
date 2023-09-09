import { readFileSync, writeFile } from 'fs';
import { createInterface } from 'readline';
import chalk from 'chalk';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
})

const readlineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        })
    })
}
const createATask = async () => {
    let prevTasks = [];
    const taskTitle = await readlineAsync(`Enter the task title: `);
    const taskDesc  = await  readlineAsync(`Enter task description: `);
    const timestamp = new Date().toLocaleDateString(
        'en-US',
        {weekday: 'long', year:'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'}
    );

    //Read file to check if tasks exist in it
    try {
        const data = readFileSync('myTask.json', { encoding: 'utf-8' });
        if (data.trim() !== '') {
            prevTasks = JSON.parse(data);
        }
    } catch (err) {
        if (err.code !== 'ENOENT'){
            console.log(
                chalk.red.bold(err)
            );
            process.exit(1)
        }
    }

    // Save to JSON file
    const taskObj = {
        id: prevTasks.length === 0 ? prevTasks.length : (prevTasks[prevTasks.length - 1].id) + 1,
        title: taskTitle,
        description: taskDesc,
        timestamp,
        active: true
    };
    prevTasks.push(taskObj);
    const taskArrString = JSON.stringify(prevTasks);

    // Write to the File
    writeFile('myTask.json', taskArrString, 'utf8', function (err){
        if (err) {
            console.log("An error occurred while writing JSON Object to File.");
            console.log( chalk.bold.red(err));
            process.exit(1);
        } else {
            console.log(chalk.greenBright("Task Created Successfully"));
            process.exit(0);
        }
    });
    readline.close();
}

export default createATask;
