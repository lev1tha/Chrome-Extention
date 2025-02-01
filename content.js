setInterval(() => {
  const emailBody = document.querySelector(".ii.gt .a3s");
  if (emailBody) {
    const emailText = emailBody.innerText;

    const codeMatch = emailText.match(/\b\d{6}\b/);
    if (codeMatch) {
      const code = codeMatch[0];
      console.log("Код подтверждения найден:", code);

      chrome.runtime.sendMessage({ action: "showCode", code });
    }
  }
}, 5000);
