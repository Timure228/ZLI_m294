let list_all_button = document.getElementById("list-all")
let add_task_button = document.getElementById("add-task")

let task_ul = document.getElementById("tasks")
let tasks_url = "https://corsproxy.io/http://127.0.0.1:3000/auth/jwt/tasks"
let task_url = "http://127.0.0.1:3000/task"

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

async function get_all_tasks() {
    // Remove if p text exist
    if (task_ul.innerText != "") {
        task_ul.innerText = ""
        return
    }
    await fetch(tasks_url, {headers: {"Authorization": token}})
    .then((res) => {
        if (res.status == 401) {
            alert("Keine Rechte!")
            return;
        }
        res.json()
        })
    .then((data) => Array.from(data).forEach((task =>    
        {
            // Edit button
            let edit_button = document.createElement("button")
            edit_button.innerHTML = "Edit"
            edit_button.id = "task-edit"
            edit_button.addEventListener("click", (e) => edit_task(e))
            // Delete button
            let delete_button = document.createElement("button")
            delete_button.innerHTML = "Delete"
            delete_button.style.backgroundColor = "red"
            delete_button.addEventListener("click", (e) => delete_task(e))
            // li element
            let li = document.createElement("li")
            li.innerHTML = JSON.stringify(task)
            li.append(edit_button, delete_button)
            // Add to ul
            task_ul.append(li)
        })))
    }
    
async function add_new_task() {
    let task_title = document.getElementById("task-title").value
    await fetch(tasks_url, {headers: {"Content-Type": "application/json", "Authorization": token, method: "POST", 
        body: JSON.stringify({title: task_title, completed: false})}})
    .catch((err) => console.error("ERROR: " + err))
}

function edit_task(e) {
    // Check if already been pressed
    if (e.target.nextElementSibling.tagName != "BUTTON") {
        return
    }
    let current_task_id = e.target.parentElement.innerHTML[6]
    // Add edit form
    let form = document.createElement("form")
    e.target.after(form)
    let title_label = document.createElement("label")
    title_label.innerHTML = "Title:"
    let title_input = document.createElement("input")
    title_input.type = "text"
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    form.append(title_label)
    form.append(title_input)
    form.append(checkbox)
    let save_button = document.createElement("button")
    save_button.innerHTML = "Save"
    form.append(save_button)
    // Add event to save button
    save_button.addEventListener("click", (e) => {
        e.preventDefault()
        fetch(tasks_url, {headers: {"Content-Type": "application/json"},
            method: "PUT", body: JSON.stringify({id: current_task_id, title: title_input.value, completed: checkbox.checked})})
        form.remove()
    })
    
}

async function delete_task(e) {
    let current_task_id = e.target.parentElement.innerHTML.split(":")[1].split(",")[0]
    await fetch(task_url + "/" + current_task_id, {method: "DELETE"})
    e.target.parentElement.remove()
    
}

list_all_button.addEventListener("click", get_all_tasks)
document.querySelector(".add-task-form").addEventListener("submit", (e) => {
    e.preventDefault()
    add_new_task()
})
