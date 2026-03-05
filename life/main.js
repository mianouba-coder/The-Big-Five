let timeLeft = 20; let isWork = true;
function startHIIT() {
    setInterval(() => {
        if (timeLeft <= 0) {
            isWork = !isWork;
            timeLeft = isWork ? 20 : 10;
            document.getElementById('status').innerText = isWork ? "WORK!" : "REST";
        }
        document.getElementById('display').innerText = timeLeft;
        timeLeft--;
    }, 1000);
}