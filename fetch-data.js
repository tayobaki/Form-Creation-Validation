document.addEventListener("DOMContentLoaded", function () {
  async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = "";

      // Create and append user list
      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      dataContainer.innerHTML = "Failed to load user data.";
    }
  }

  fetchUserData();
});
