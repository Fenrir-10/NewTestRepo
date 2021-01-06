#!/usr/bin/env node

const fs = require('fs');
const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const prog = require('caporal');
const {spawn} = require('child_process');
const chalk = require('chalk');

const fsPromises = fs.promises;

prog    
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({filename}) => {
        
        const name = filename || 'index.js';
        try {   await fsPromises.access(name)
        } 
        catch(err){
            throw new Error('Could not find the file ' + name)
        }
        let proc;
        const start = debounce(() => {
            if(proc){
                proc.kill();
            }
            console.log(chalk.blue('>>>>Starting Process'));
            proc = spawn('node', [name], { stdio: 'inherit'});
        }, 200);
        
        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
    });


prog.parse(process.argv);




    


    