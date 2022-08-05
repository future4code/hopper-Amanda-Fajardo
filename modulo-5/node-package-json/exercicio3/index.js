const tasks = [
    "Arrumar a casa",
    "Lavar roupa",
    "Estudar"
  ]
  
  const task = process.argv[2]
  
  
  tasks.push(task)
  
  console.log(`Tarefa ${task} adicionada com sucesso!`)
  console.log("tarefas", tasks.toString())