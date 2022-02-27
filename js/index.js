let time = new Date();
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);

let clicked = false;

function formatNumber(num) {
  return String(num).padStart(2, "0");
}

function render() {
  document.querySelector(".hours").innerHTML = formatNumber(time.getHours());
  document.querySelector(".minutes").innerHTML = formatNumber(
    time.getMinutes()
  );
  document.querySelector(".secends").innerHTML = formatNumber(
    time.getSeconds()
  );
}

document.querySelectorAll(".btn-up").forEach(function (btn) {
  btn.addEventListener("click", () => {
    if (btn.id == "hours-up") {
      time.setHours(time.getHours() + 1);
    } else if (btn.id == "minutes-up") {
      time.setMinutes(time.getMinutes() + 1);
    } else {
      time.setSeconds(time.getSeconds() + 1);
    }
    render();
  });
});

document.querySelectorAll(".btn-down").forEach(function (btn) {
  btn.addEventListener("click", () => {
    if (btn.id == "hours-down") {
      time.setHours(time.getHours() - 1);
    } else if (btn.id == "minutes-down") {
      time.setMinutes(time.getMinutes() - 1);
    } else {
      time.setSeconds(time.getSeconds() - 1);
    }
    render();
  });
});

document.querySelector("#start").addEventListener("click", () => {
  if (!clicked) {
      clicked = true;
    const startTimer = setInterval(function () {
      if (
        time.getHours() == 0 &&
        time.getMinutes() == 0 &&
        time.getSeconds() == 0
      ) {
        clearInterval(startTimer);
        clicked = false;
      } else {
        time.setSeconds(time.getSeconds() - 1);
      }

      document.querySelector("#stop").addEventListener("click", function () {
        clicked = false;
        clearInterval(startTimer);
      });

      document.querySelector("#reaset").addEventListener("click", function () {
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        clicked = false;
        render();
        clearInterval(startTimer);
      });

      render();
    }, 1000);
  }
});

document.querySelector("#reaset").addEventListener("click", function () {
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    clicked = false;
    render();
  });
