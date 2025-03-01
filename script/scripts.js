document.addEventListener("DOMContentLoaded", function() {
    
    const buttons = document.querySelectorAll('.task-btn');

    for (const button of buttons) {
        button.addEventListener('click', function() {
            const taskDiv = this.closest('.task-div');
            taskDiv.classList.add('opacity-50', 'pointer-events-none');

            const taskDescription = taskDiv.querySelector('p').innerText;
            const activityLog = document.getElementById('activity-log');
            const newLog = document.createElement('div');
            newLog.classList.add('p-4', 'bg-gray-100', 'rounded-lg', 'mb-4');
            newLog.innerHTML = `<p>${taskDescription}</p>`;
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