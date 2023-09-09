import { readFileSync, writeFile } from 'fs';
import chalk from 'chalk';


const deleteATask = async (id) => {

    let prevTasks = [];

    // Read JSON FIle
    try{
        const stringTasks = readFileSync('myTask.json', { encoding: 'utf-8'});
        if (stringTasks) {
            prevTasks = JSON.parse(stringTasks);
        }
    }
    catch (e){
        if (e.code === 'ENOENT'){
            console.log(chalk.red.bold(`There's no task file at this location. Use the create command to create a task file.`));
            process.exit(0);
        }
        console.log(chalk.red.bold(e));
        process.exit(1);
    }

    //Delete the particular object and write back to JSON
    const __targetIndex = prevTasks.findIndex(task => task.id === Number(id));
    if (__targetIndex !== -1){
        prevTasks.splice(__targetIndex, 1);
    } else {
        console.log(chalk.red.bold('Task with ID', id, 'not found.'));
        process.exit(0);
    }

    //Save to JSON File
    writeFile('myTask.json', JSON.stringify(prevTasks), 'utf-8', function (err) {
        if (err) {
            console.log( chalk.red.bold(`An error occurred while writing JSON Object to File. ${err}`));
            process.exit(1);
        }
         console.log( chalk.greenBright.bold(`Task Deleted Successfully`));
         process.exit(0);
    });
}

export default deleteATask;