

const dataArr = [
                {   id : "Q",
                    text: "Heater-1",
                    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},

                {   id : "W",
                    text: "Heater-2",
                    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}]

                    
                    const bankOne = [
                        {
                          keyCode: 81,
                          keyTrigger: 'Q',
                          id: '',
                          url: ''
                        },
                        {
                          keyCode: 87,
                          keyTrigger: 'W',
                          id: '',
                          url: ''
                        },
                        {
                          keyCode: 69,
                          keyTrigger: 'E',
                          id: 'Heater-3',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                        },
                        {
                          keyCode: 65,
                          keyTrigger: 'A',
                          id: 'Heater-4',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                        },
                        {
                          keyCode: 83,
                          keyTrigger: 'S',
                          id: 'Clap',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                        },
                        {
                          keyCode: 68,
                          keyTrigger: 'D',
                          id: 'Open-HH',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                        },
                        {
                          keyCode: 90,
                          keyTrigger: 'Z',
                          id: "Kick-n'-Hat",
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                        },
                        {
                          keyCode: 88,
                          keyTrigger: 'X',
                          id: 'Kick',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                        },
                        {
                          keyCode: 67,
                          keyTrigger: 'C',
                          id: 'Closed-HH',
                          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                        }
                      ];

function padSound(drumid) {

    var disptext = "";
    var audioObj;
    var vol = 0;
   // alert("drumid");
 //   alert(drumid,);
 //   alert(dataArr[0].id);

  

    // check array for id and set text
    for (var i = 0; i < dataArr.length; i++){
        if (drumid === dataArr[i].id){
            disptext = dataArr[i].text
            audioObj = new Audio(dataArr[i].audio);
           }
        }
// set volume
     
   //     audioObj.volume = ((document.getElementById("volume").value / 100));
   audioObj.volume = document.getElementById("volume").value /100;

   

    document.getElementById("display").innerHTML = disptext;

audioObj.play()


}

function setVolume(vol) {
    
    document.getElementById("labelvol").innerHTML = "Volume " + Math.round(vol /10)

}


//jquery methods



