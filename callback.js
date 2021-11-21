let counter = document.getElementById("counter");
setTimeout(function () {
  counter.innerText = "Counter : 1";
  setTimeout(function () {
    counter.innerText = "Counter : 2";
    setTimeout(function () {
      counter.innerText = "Counter : 3";
      setTimeout(function () {
        counter.innerText = "Counter : 4";
        setTimeout(function () {
          counter.innerText = "Counter : 5";
          setTimeout(function () {
            counter.innerText = "Counter : 6";
            setTimeout(function () {
              counter.innerText = "Counter : 7";
              setTimeout(function () {
                counter.innerText = "Counter : 8";
                setTimeout(function () {
                  counter.innerText = "Counter : 9";
                  setTimeout(function () {
                    counter.innerText = "Counter : 10";
                    setTimeout(function () {
                      counter.innerText = "Happy Independence day";
                      document.getElementById("image").style =
                        "visibility: visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
