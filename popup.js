document.getElementById("buy-premium").addEventListener("click", () => {
  fetch("https://your-server.com/create-checkout-session")
      .then(res => res.json())
      .then(data => {
          window.open(data.url, "_blank");
      })
      .catch(err => console.error("Ошибка оплаты:", err));
});

git commit -m "first commit"
