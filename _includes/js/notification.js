window.onload = showNotification();

// Loads/shows notification bar if users hasn't closed it yet
function showNotification() {
  const notificationName = "notification-{{site.notificationMsgId}}";
  const hideNotification = localStorage.getItem(notificationName);
  if (hideNotification != "true") {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
  }
}
// Hides notification bar when user closes it
function hideNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "none";
  const notificationName = "notification-{{site.notificationMsgId}}";
  localStorage.setItem(notificationName, "true");
}