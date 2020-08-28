function currentTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
  
    function addZero(k) {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    };
    
    document.getElementById("time-Div").innerHTML = hours + " : " +       minutes + " : " + seconds;
  };