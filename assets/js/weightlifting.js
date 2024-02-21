  // {
  //     const myTime = setInterval(myTimer, 1000);
  //     function myTimer() {
  //       const today = new Date();
  //       const displayTime = today.toLocaleTimeString();
  //       document.getElementById("displayTime").innerHTML = displayTime;
  //     }
  //   }
    
    
  //   const body = document.querySelector("body");
  //   const icon = document.querySelector("i");
    
    
    
  //   const roundTimeInput = document.getElementById("roundTime");
  //   const restTimeInput = document.getElementById("restTime");
  //   const startStopBtn = document.getElementById("start");
    
    
  //   const round1 = document.getElementById("round_1");
  //   const rest1 = document.getElementById("rest_1");
  //   const round2 = document.getElementById("round_2");
  //   const rest2 = document.getElementById("rest_2");
  //   const round3 = document.getElementById("round_3");
    
    
  //   const alert10sec = document.getElementById("alert10sec");
  //   const alertStart = document.getElementById("alertStart");
  //   const alertStop = document.getElementById("alertStop");
    
  //   const startTimer = () => {
      
    
  //     let roundTime = roundTimeInput.value * 60;
  //     let restTime = restTimeInput.value * 60;
  //     let time = "10";
    
      
    
  //     if (roundTimeInput.value === "" || restTimeInput.value === "") {
  //       alert("Input Round & Rest Time!");
  //       return;
  //     } else {
        
        
  //       startStopBtn.innerHTML = "Stop";
  //       startStopBtn.style.backgroundColor = "#e24379";
  //       startStopBtn.onclick = newWorkout;
    
        
    
  //       setAlert(alert10sec);
    
        
  //       const startCountdown = document.querySelector(".title");
  //       setInterval(() => {
  //         getReady(startCountdown);
  //       }, 1000);
    
        
  //       setTimeout(() => {
          
  //         document.querySelector("header").style.display = "none";
    
          
  //         setAlert(alertStart);
    
          
  //         setInterval(() => {
  //           if (round1.innerText !== "0:00") {
              
              
  //             updateRound(round1);
  //             round1.parentElement.classList.add("active");
              
  //             addRemoveIconClass("fa-heartbeat", "fa-fist-raised");
    
              
  //             checkFor10Sec(round1);
              
    
  //             round1.innerText === "0:00" ? setAlert(alertStop) : round1;
  //           } else if (round1.innerText === "0:00" && rest1.innerText !== "0:00") {
              
              
  //             addRemoveActiveClass(round1, rest1);
              
  //             updateRest(rest1);
              
  //             addRemoveIconClass("fa-fist-raised", "fa-chair");
              
    
  //             checkFor10Sec(rest1);
              
    
  //             rest1.innerText === "0:00" ? setAlert(alertStart) : rest1;
    
              
  //             resetRoundTime();
  //           } else if (rest1.innerText === "0:00" && round2.innerText !== "0:00") {
              
              
  //             addRemoveActiveClass(rest1, round2);
              
  //             updateRound(round2);
              
  //             addRemoveIconClass("fa-chair", "fa-fist-raised");
              
    
  //             checkFor10Sec(round2);
              
    
  //             round2.innerText === "0:00" ? setAlert(alertStop) : round2;
    
              
  //             resetRestTime();
  //           } else if (round2.innerText === "0:00" && rest2.innerText !== "0:00") {
              
              
  //             addRemoveActiveClass(round2, rest2);
              
  //             updateRest(rest2);
              
  //             addRemoveIconClass("fa-fist-raised", "fa-chair");
              
    
  //             checkFor10Sec(rest2);
              
    
  //             rest2.innerText === "0:00" ? setAlert(alertStart) : rest2;
    
              
  //             resetRoundTime();
  //           } else if (round3.innerText !== "0:00") {
              
              
  //             addRemoveActiveClass(rest2, round3);
              
  //             updateRound(round3);
              
  //             addRemoveIconClass("fa-chair", "fa-fist-raised");
              
    
  //             checkFor10Sec(round3);
              
    
  //             round3.innerText === "0:00" ? setAlert(alertStop) : round3;
  //           }
            
    
  //           if (round3.innerText === "0:00") {
  //             body.innerHTML = `
  //               <h1 class="title" >Done</h1>
  //               <div class="inputs-container">
  //                 <button class="btn" onclick="newWorkout()">Again</button>
  //               </div>  
  //               `;
  //           }
  //         }, 1000);
  //       }, 11000);
    
        
    
  //       function checkFor10Sec(activity) {
  //         activity.innerText === "0:10"
  //           ? (setAlert(alert10sec), (activity.style.color = "#e24379"))
  //           : activity;
  //       }
    
        
    
  //       function addRemoveIconClass(currentIcon, nextIcon) {
  //         icon.classList.remove(currentIcon);
  //         icon.classList.add(nextIcon);
  //       }
    
  //       function addRemoveActiveClass(previousActivity, currentActivity) {
  //         previousActivity.parentElement.classList.remove("active");
  //         currentActivity.parentElement.classList.add("active");
  //       }
    
        
        
  //       function updateRound(round) {
  //         const minutes = Math.floor(roundTime / 60);
  //         let seconds = roundTime % 60;
    
  //         seconds = seconds < 10 ? "0" + seconds : seconds;
  //         round.innerHTML = `${minutes}:${seconds}`;
  //         roundTime--;
  //       }
  //       function resetRoundTime() {
  //         return (roundTime = roundTimeInput.value * 60);
  //       }
        
  //       function updateRest(rest) {
  //         const minutes = Math.floor(restTime / 60);
  //         let seconds = restTime % 60;
    
  //         seconds = seconds < 10 ? "0" + seconds : seconds;
  //         rest.innerHTML = `${minutes}:${seconds}`;
  //         restTime--;
  //       }
  //       function resetRestTime() {
  //         return (restTime = restTimeInput.value * 60);
  //       }
        
    
  //       function getReady(element) {
  //         let seconds = time % 60;
  //         element.innerHTML = `
  //       <div class="inputs-container flex">
  //         <h4 class='title'>Get Ready in</h4>
  //         <h2 id='seconds' class='active animateSeconds'>${seconds}</h2>
  //       </div>
  //       `;
    
  //         time--;
  //       }
    
        
    
  //       function setAlert(alert) {
  //         alert.play();
  //         setTimeout(() => {
  //           alert.pause();
  //           alert.currentTime = 0;
  //         }, 1300);
  //       }
  //     }
  //   };
    
    
    
    
    
  //   const newWorkout = () => {
  //     window.location.reload();
  //   };