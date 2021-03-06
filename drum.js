
var power = true;

const dataArr = [
                {   id : "Q",
                    text: "Heater-1",
                    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},

                {   id : "W",
                    text: "Heater-2",
                    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
                
                {
                    id: 'E',
                    text: 'Heater-3',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                    },
                {
                    id: 'A',
                    text: 'Heater-4',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                    },
                {
                    id: 'S',
                    text: 'Clap',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                    },

                {
                    id: 'D',
                    text: 'Open-HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                    },
                
                {
                    id: 'Z',
                    text: "Kick-n'-Hat",
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                    },
                {
                    id: 'X',
                    text: 'Kick',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                    },

                {
                    id: 'C',
                    text: 'Closed-HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                    }
                ]

       



function padSound(drumid,hotkey) {

    var disptext = "";
    var audioObj;
    var vol = 0;
 
    // check is power on
  if (power){

    // check array for id and set text
    for (var i = 0; i < dataArr.length; i++){
        if (drumid === dataArr[i].id){
            disptext = dataArr[i].text
            audioObj = new Audio(dataArr[i].audio);
           }
        }

        activateButton(drumid)
    
// set volume
    audioObj.volume = document.getElementById("volume").value /100;
    document.getElementById("display").innerHTML = disptext;
     
    audioObj.play();

    // delay 3 second
    
  deactivateButton(drumid);

   function deactivateButton(text){ 
    var x = document.getElementById(text);
    setTimeout(function(){ x.style.color ="black" }, 200);
    setTimeout(function(){ x.style.backgroundColor ="lightgray" }, 200);
        }
    }
}

function activateButton(btn){
  
    document.getElementById(btn).style.color = "yellow";
    document.getElementById(btn).style.backgroundColor = "black";

      } 


function setVolume(vol) {
    
    document.getElementById("labelvol").innerHTML = "Volume " + Math.round(vol /10)
}

function setpower() {
    
    power = !power

    if (!power){
        document.getElementById("display").innerHTML = "Power is off"
    }
    else {
        document.getElementById("display").innerHTML = "Play the Drums!"
    }
}
//jquery methods



