// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Dark/Light Mode Toggle ---
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggle.textContent = "Toggle Theme 🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggle.textContent = "Toggle Theme ☀️";
        }
    });

    // --- 2. Element Layout Action Buttons ---
    const btnAlert = document.getElementById("btn-alert");
    const btnLog = document.getElementById("btn-log");

    btnAlert.addEventListener("click", () => {
        alert("🎉 Test Success! JavaScript alert is functioning normally.");
    });

    btnLog.addEventListener("click", () => {
        console.log("🛠️ Hello World! You clicked the console log test button.");
        alert("Message logged to the web console! (Press F12 to inspect)");
    });

    // --- 3. Interactive Form Live Syncing ---
    const testInput = document.getElementById("test-input");
    const outputTarget = document.getElementById("output-target");

    testInput.addEventListener("input", (event) => {
        const value = event.target.value.trim();
        outputTarget.textContent = value ? value : "...";
    });

    // --- 4. Mock API Simulation ---
    const btnFetch = document.getElementById("btn-fetch");
    const apiStatus = document.getElementById("api-status");

    btnFetch.addEventListener("click", async () => {
        apiStatus.textContent = "Fetching data...";
        
        // Simulating a network delay of 1.5 seconds
        setTimeout(() => {
            apiStatus.innerHTML = `
                <strong>Status:</strong> 200 OK<br>
                <strong>Timestamp:</strong> ${new Date().toLocaleTimeString()}<br>
                <strong>Payload:</strong> Mock API Connection Established!
            `;
        }, 1500);
    });
});
