import { createReadStream } from 'fs';
import chalk from 'chalk';


const listTasks = async () => {
    // Read Tasks
    const taskReadStream = createReadStream('myTask.json', 'utf-8');
    taskReadStream.on('data', function (chunk){
        const parsedFile = JSON.parse(String(chunk));
        console.log(chalk.blue.bold(`Here are your tasks`));
        console.log(parsedFile);
        process.exit(0);
    })

    taskReadStream.on('error', function (error){
        console.log( chalk.red.bold(error));
        process.exit(1);
    })
}
export default listTasks;