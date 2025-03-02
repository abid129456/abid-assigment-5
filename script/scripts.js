document.addEventListener("DOMContentLoaded", function() {
    
    const buttons = document.querySelectorAll('.task-btn')

    for (const button of buttons) {
        
        button.addEventListener('click', function() {
            const taskDiv = this.closest('.task-div');
            taskDiv.classList.add('opacity-50', 'pointer-events-none');

            const taskDescription = taskDiv;
            const activityLog = document.getElementById('activity-log');
            const newLog = document.createElement('div');
            newLog.classList.add('p-4',  'rounded-lg', 'mb-2');
            activityLog.appendChild(newLog);

            let taskCount = document.getElementById("task-count");
            let currentTaskCount = parseInt(taskCount.innerText);
            if (currentTaskCount > 0) {
                taskCount.innerText = currentTaskCount - 1;
            }

            let completedCount = document.getElementById("completed-count");
            let currentCompletedCount = parseInt(completedCount.innerText);
            completedCount.innerText = currentCompletedCount + 1;

            this.disabled = true;
            this.innerText = "completed";
            this.classList.add("bg-gray-400");
           
        });
        
    }
    
    document.getElementById('clear-history').addEventListener('click', () => {
        document.getElementById('activity-log').innerHTML = '';
    });
  
});
function setTaskCompletedHandler(buttonId, taskDescription) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function () {
            alert('Board updated Successfully');
            const activityLog = document.getElementById("activity-log");
            const currentTime = new Date().toLocaleString();
            const logItem = document.createElement("p");
            logItem.classList.add("text-gray-600", "p-2");
            logItem.innerHTML = `You have completed the task ${taskDescription} at <span class="text-blue-600">${currentTime}</span>`;
            logItem.style.backgroundColor = "#E6E6FA", "rounded-lg";
            activityLog.appendChild(logItem);
        });
    }
    
}
setTaskCompletedHandler("alert", "Fix Video loading issue");
setTaskCompletedHandler("alert-2", "Integrate AI search");
setTaskCompletedHandler("alert-3", "Review Ami Probashi Site");
setTaskCompletedHandler("alert-4", "Fix Video loading issue");
setTaskCompletedHandler("alert-5", "Fix Video loading issue");
setTaskCompletedHandler("alert-6", "Fix Video loading issue");
