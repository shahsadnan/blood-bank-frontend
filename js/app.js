// ==========================================
// DONOR REGISTRATION
// ==========================================
document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const donor = {
      name: document.getElementById("name").value,
      student_id: document.getElementById("student_id").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      blood_group: document.getElementById("blood_group").value,
      department: document.getElementById("department").value,
      last_donation_date: document.getElementById("last_donation_date").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await fetch("https://blood-bank-backend-xwde.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      });

      const data = await response.json();

      alert(data.message);

      // Clear form
      document.getElementById("registerForm").reset();
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  });
