let hourInput = document.querySelector("#hourInput");
let minInput = document.querySelector("#minInput");
let secInput = document.querySelector("#secInput");
let select = document.querySelector("select");
let input = document.querySelectorAll("input");
let conatiner = document.querySelector(".conatiner");
let secCounter = 0;
let minCounter = 0;
let hrCounter = 0;

set.addEventListener("click", () => {
  stopwatch();
  hourInput.value = "";
  minInput.value = "";
  secInput.value = "";
  set.style.display = "none";
  moringNight.style.display = "none";
  conatiner.style.marginTop = "110px";
  input.forEach((inp) => {
    inp.style.display = "none";
  });
});

function stopwatch() {
  time.innerHTML = select.value;
  hrCounter = hourInput.value;
  minCounter = minInput.value;
  secCounter = secInput.value;
  interval = setInterval(() => {
    secCounter++;
    hour.innerHTML = "0" + hrCounter;
    min.innerHTML = "0" + minCounter;
    sec.innerHTML = "0" + secCounter;
    if (secCounter > 59) {
      secCounter = 0;
      sec.innerHTML = "0" + secCounter;
      minCounter++;
      console.log("secCounter > 59");
    }
    if (sec.innerHTML > 9) {
      sec.innerHTML = secCounter;
    }
    if (minCounter > 59) {
      minCounter = 0;
      min.innerHTML = "0" + minCounter;
      hrCounter++;
      hour.innerHTML = "0" + hrCounter;
      console.log("minCounter > 59");
    }
    if (min.innerHTML > 9) {
      min.innerHTML = minCounter;
    }
    if (hrCounter > 9) {
      hour.innerHTML = hrCounter;
    }
    if (hrCounter == 12 && minCounter == 59) {
      hrCounter = 1;
    }

    if (hrCounter == 11 && minCounter == 59 && time.innerHTML == "PM") {
      time.innerHTML = "AM";
      console.log("time.innerHTML = AM");
    }
    if (hrCounter == 11 && minCounter == 59 && time.innerHTML == "AM") {
      time.innerHTML = "PM";
      console.log("time.innerHTML = PM");
    }
  }, 1000);
}
edit.addEventListener("click", () => {
  moringNight.style.display = "initial";
  conatiner.style.marginTop = "39px";
  input.forEach((inp) => {
    inp.style.display = "initial";
    stopInterval();
  });
});
function stopInterval() {
  clearInterval(interval);
}
input.forEach((inp) => {
  inp.addEventListener("input", () => {
    set.style.display = "initial";
  });
});

input.forEach((validate) => {
  validate.addEventListener("input", () => {
    // Validation
    if (hourInput.value.length > 2 || hourInput.value > 12) {
      hourInput.value = "";
    }
    if (minInput.value.length > 2 || minInput.value > 60) {
      minInput.value = "";
    }
    if (secInput.value.length > 2 || secInput.value > 60) {
      secInput.value = "";
    }
  });
});
