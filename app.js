countdown(new Date(), "2023-12-31 23:59:59");

function countdown(date1, date2) {
  var timer;
  var currentDate = new Date(date1).getTime();
  var targetDate = new Date(date2).getTime();

  // Update the count down every 1 second
  timer = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the target date
    var distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //convert to two digits
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML =
      days + " days " + hours + ":" + minutes + ":" + seconds + "";

    // If the target date is reached, clear the interval and display a message
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML =
        "Ignition Centre has been launched!";
    }
  }, 1000);
}

countdown(new Date(), "2023-12-31 23:59:59");
