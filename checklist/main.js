const prompt = require('prompt-sync')();
class TaskManager {
    constructor(checklist) {
        this.checklist = checklist;
    }

    addTask(item) {
        if(item.trim().length > 0) {
            this.checklist.push(item);
            console.log(`${item} adicionado com sucesso!`);
        }else {
            console.log('Insira uma tarefa válida!')
        }
    }

    removeTask(itemIndex) {
        if(itemIndex >= 0 && itemIndex < this.checklist.length) {4
            let removedItem = this.checklist.splice(itemIndex, 1);
            console.log(`Tarefa: ${removedItem}. removida com sucesso!`);
        } else{
            console.log('Tarefa inválida!');
        }
    }

    showTasks() {
        for(let i = 0; i < this.checklist.length; i ++) {
            console.log(`${i} - ${this.checklist[i]}`);
        }
    }
}

let checklist = [];

let myChecklist = new TaskManager(checklist);
let option = '';

while(true) {
    console.log('-=-=Checklist=-=-');
    console.log('[0] - Visualizar tarefas');
    console.log('[1] - Adicionar tarefa');
    console.log('[2] - Remover tarefa');
    console.log('[3] - Sair do programa');
    option = prompt('Insira a opção desejada: ');

    if(option == "0") {
        myChecklist.showTasks();
    } else if(option == "1") {
        let task = prompt('Insira o nome da tarefa a ser adicionada: ');
        myChecklist.addTask(task);
    } else if(option == "2") {
        myChecklist.showTasks();
        let taskRemove = prompt('Insira o índice da tarefa a ser removida: ');
        myChecklist.removeTask(taskRemove);
    } else if(option == "3") {
        break;
    } else {
        console.log('Insira uma opção válida!');
    }

    console.log();
}