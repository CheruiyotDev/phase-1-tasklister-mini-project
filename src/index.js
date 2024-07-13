document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("#tasks")

  
  
  document.querySelector("#submit").addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector("#new-task-description");
    const taskText = input.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    ul.appendChild(li);

    input.value = '';
  });
});
