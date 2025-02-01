chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showCode") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "Код подтверждения",
      message: `Ваш код: ${message.code}`,
      priority: 2,
    });
    sendResponse({ success: true });
  }
});
