/* alert('Hello'); */

// CHECK FOR WINDOWS LOAD EVENT

window.addEventListener('load', () => {
	const form = document.querySelector('#new-task-form');
	const input = document.querySelector('#new-task-input');
	const list_element = document.querySelector('#tasks');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert('Please fill out the task');
			return;
		}

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const task_content_element = document.createElement('div');
		task_content_element.classList.add('content');
		// task_content_element.innerText = task;
		input.value = '';

		task_element.appendChild(task_content_element);

		//CREATE BUTTON INSIDE TASK
		const task_input_element = document.createElement('input');
		task_input_element.type = 'text';
		task_input_element.classList.add('text');
		task_input_element.value = task;
		task_input_element.setAttribute('readonly', 'readonly');

		task_content_element.appendChild(task_input_element);

		// CREATE ACTION DIV
		const task_action_element = document.createElement('div');
		task_action_element.classList.add('action');

		//CREATE EDIT BUTTON
		const action_button_edit = document.createElement('button');
		action_button_edit.classList.add('edit');
		action_button_edit.innerHTML = 'EDIT';

		//CREATE DELETE BUTTON
		const action_button_delete = document.createElement('button');
		action_button_delete.classList.add('delete');
		action_button_delete.innerHTML = 'DONE?';

		//ADD BUTTONS TO ACTION DIV IN DOM
		task_action_element.appendChild(action_button_edit);
		task_action_element.appendChild(action_button_delete);

		//ADD ACTION DIV TO TASK DIV IN DOM
		task_element.appendChild(task_action_element);

		list_element.appendChild(task_element);

		//ADD EVENT LISTENER TO EDIT AND DELETE BUTTON

		action_button_edit.addEventListener('click', () => {
			if (action_button_edit.innerHTML.toLowerCase() === 'edit') {
				task_input_element.removeAttribute('readonly');
				task_input_element.focus();
				action_button_edit.innerText = 'SAVE';
			} else {
				task_input_element.setAttribute('readonly', 'readonly');
				task_input_element.focus();
				action_button_edit.innerText = 'EDIT';
			}
		});

		action_button_delete.addEventListener('click', () => {
			list_element.removeChild(task_element);
		});
	});
});
