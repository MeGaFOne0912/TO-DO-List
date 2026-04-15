function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priority").value;
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");

  // Texto da tarefa
  const span = document.createElement("span");
  span.textContent = taskText;

  // Container de botões
  const actions = document.createElement("div");

  // Botão de concluir
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Botão de deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Prioridade
  li.classList.add(priority);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

