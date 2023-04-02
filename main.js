const form = document.getElementById("ticket-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const eventName = document.getElementById("event-name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const venue = document.getElementById("venue").value;
  const ticketPrice = document.getElementById("ticket-price").value;
  const quantity = document.getElementById("quantity").value;
  const serialize = document.getElementById("serialize").checked;

  const ticketsContainer = document.createElement("div");
  ticketsContainer.setAttribute("id", "tickets-container");
  document.body.appendChild(ticketsContainer);

  for (let i = 1; i <= quantity; i++) {
    let ticketTemplate =
      "<div class='ticket'>" +
      "<h2>" +
      eventName +
      "</h2>" +
      "<p>Date: " +
      date +
      "</p>" +
      "<p>Time: " +
      time +
      "</p>" +
      "<p>Venue: " +
      venue +
      "</p>" +
      "<p>Ticket Price: $" +
      ticketPrice +
      "</p>";

    if (serialize) {
      ticketTemplate += "<p>Ticket Number: " + i + "</p>";
    }

    ticketTemplate += "</div>";

    ticketsContainer.innerHTML += ticketTemplate;
  }

  window.print();
  document.body.removeChild(ticketsContainer);
});
