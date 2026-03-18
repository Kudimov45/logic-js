function humanReadable (seconds) {
    if(seconds<60){
        return `00:00:${seconds<10?'0'+seconds:seconds}`
    } else if(seconds<3600){
       let min = Math.floor(seconds/60);
       let second = (seconds % 60)
        return `00:${min<10?'0'+min: min}:${second<10?'0'+second:second}`
    } else if(seconds<360000){
        let hour = Math.floor(seconds/3600);
        let min = Math.floor((seconds % 3600)/60);
        let second = ((seconds % 3600)%60);
        return `${hour<10?'0'+hour:hour}:${min<10?'0'+min: min}:${second<10?'0'+second:second}`
    } 
  }
  console.log(humanReadable(359999));