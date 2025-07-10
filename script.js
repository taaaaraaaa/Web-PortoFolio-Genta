    // Dark mode toggle
    function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    }

    // Form submit (dummy, hanya tampilkan pesan)
    document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMessage").textContent = "Pesan berhasil dikirim!";
    this.reset();
    });
