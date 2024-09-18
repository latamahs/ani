const homeworkSection = document.querySelector('#homework');
const formHTML = `
<form id="homeworkForm">
<label for="subject">Subject:</label><br>
<input type="text" id="subject" name="subject"><br>
<label for="description">Homework:</label><br>
<input type="text" id="description" name="description"><br>
<label for="dueDate">Due Date:</label><br>
<input type="date" id="dueDate" name="dueDate"><br><br>
<input type="submit" value="Add Homework">
</form>
<h3>Your Homework List:</h3>
<ul id="homeworkList"></ul>
`;
homeworkSection.innerHTML += formHTML;
document.getElementById('homeworkForm').addEventListener('submit', function(event) {
   event.preventDefault();
   const subject = document.getElementById('subject').value;
   const description = document.getElementById('description').value;
   const dueDate = document.getElementById('dueDate').value;
   if (subject && description && dueDate) {
       const homeworkList = document.getElementById('homeworkList');
       const listItem = document.createElement('li');
       listItem.textContent = `${subject}: ${description} (Due: ${dueDate})`;
       homeworkList.appendChild(listItem);
       // Clear the form fields after submission
       document.getElementById('homeworkForm').reset();
   }
});