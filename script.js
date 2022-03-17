// função d aidcionar tarefas




function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    
    
    if(taskTitle){
        
        
        //clonar o template
        const template = document.querySelector(".template");
        //console.log(template)
        const newTask = template.cloneNode(true);
        // console.log(newTask);
        //adicionar titulo  <p></p>
        newTask.querySelector(".task-title").textContent = taskTitle;
        // console.log(newTask);
        newTask.classList.remove("template"); 
        newTask.classList.remove("hide"); 

        //adicionar tarefa na lista   
        const list = document.querySelector("#task-list");
        list.append(newTask);
        //adicionar o evento remover 
        const removeBtn = newTask.querySelector(".btn-remove").addEventListener("click",function(){
            removeTask(this);
        })



        //adicionar o evento completar a tarefa
        const doneBtn = newTask.querySelector(".btn-done").addEventListener("click",function(){
            completeTask(this);
        });


    }
    //limpar texto 
    document.querySelector("#task-title").value = "";
}
const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", function(e){
    e.preventDefault(); // não efetuar reload [F5] no navegador
    
    addTask();
})

function removeTask(task){
    task.parentNode.remove();

    let x = document.querySelectorAll("#tarefas-feitas li");
    
    if(x.length==0){
        let h2 = document.querySelector("#task-list+h2");
       h2.classList.add("hide");
    }

}
function completeTask(task){
    
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");

   
    
    if(taskComplete.classList.contains("done")){
     const newTaskComplete = taskComplete.cloneNode(true); // clonando a li
     
    
    const ul = document.querySelector("#tarefas-feitas");
    let h2 = document.querySelector("#task-list+h2");
    h2.textContent = "Tarefas Concluídas:";
    h2.classList.remove("hide");
    let pai = document.querySelector("#caixa-tarefas");
    pai.insertBefore(h2,ul);
    taskComplete.remove();
    ul.append(newTaskComplete);
    const removeBtn = newTaskComplete.querySelector(".btn-remove").addEventListener("click",function(){
        removeTask(this);
    })



    //adicionar o evento completar a tarefa
    const doneBtn = newTaskComplete.querySelector(".btn-done").addEventListener("click",function(){
        completeTask(this);
    });
    

    }else{
        
    //inclui tarefa na lista de feitas
    const newTaskComplete = taskComplete.cloneNode(true); // clonando a li
    
   const ul = document.querySelector("#task-list");//
   
   
   ul.append(newTaskComplete);
   taskComplete.remove();
   let x = document.querySelectorAll("#tarefas-feitas li");
        
        if(x.length==0){
            let h2 = document.querySelector("#task-list+h2");
           h2.classList.add("hide");
        }
   const removeBtn = newTaskComplete.querySelector(".btn-remove").addEventListener("click",function(){
       removeTask(this);
   })



   //adicionar o evento completar a tarefa
   const doneBtn = newTaskComplete.querySelector(".btn-done").addEventListener("click",function(){
       completeTask(this);
   });
        
    }
    
    
    
        

    

}