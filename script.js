
function goBack() {
  alert("Going back...");
  // You can replace this with actual navigation
}

function startDeletion() {
  const usernameInput = document.getElementById("username").value.trim();

  if (!usernameInput) {
    alert("Please confirm your username.");
    return;
  }

  const confirmed = confirm("Are you sure you want to permanently delete your account?");
  if (confirmed) {
    // Replace this with actual deletion logic
    alert("Account deleted successfully.");
  }
}
