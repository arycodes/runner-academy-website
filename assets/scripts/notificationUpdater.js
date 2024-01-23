// notificationUpdater.js

// Function to fetch and update notifications from JSON file
async function updateNotifications() {
    const notificationContainer = document.getElementById('notificationContainer');

    try {
        // Fetch notifications from the JSON file
        const response = await fetch('/notifications.json');

        // Check if the response is empty
        if (!response.ok) {
            throw new Error('Failed to fetch notifications');
        }

        const notifications = await response.json();

        // Take only the first 3 notifications
        const topThreeNotifications = notifications.slice(0, 3);

        // Update the content based on JSON data
        const newContent = `<h3>New Notifications</h3>${topThreeNotifications.map(notification =>
            `<p><strong>${notification.title}</strong>: ${notification.content}</p>`
        ).join('')}`;

        // Update the content
        notificationContainer.innerHTML = newContent;
    } catch (error) {
        console.error('Error fetching or updating notifications:', error);
    }
}

// Call the updateNotifications function
updateNotifications();
