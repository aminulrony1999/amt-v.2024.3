function createNotification(message) {
    chrome.notifications.create("", {
        type: "basic",
        iconUrl: "icons/notification.png",
        title: "AMT Notify",
        message: message,
        priority: 2,
        silent: false,
    })
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    createNotification(request.message)
})