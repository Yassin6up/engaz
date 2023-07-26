// dont forget to follow me in my instagram : https://www.instagram.com/yassin_elhardofi/ 
// and my facebook : https://www.facebook.com/profile.php?id=100015338087618


async function start(){
  let stream = await navigator.mediaDevices.getDisplayMedia({video: { mediaSource : "screen"}, audio: true })
    document.getElementById("video").srcObject = stream
    document.getElementById("video").play() ;
  

  let data = [] ;

let mediaRecorder  =  new MediaRecorder(stream)

mediaRecorder.ondataavailable = (e)=>{
data.push(e.data) ; 
  
}
mediaRecorder.onstart = (e)=>{
  document.getElementById('btnPause').style.display = "block"
  document.getElementById('btn').style.display = "none"
}
mediaRecorder.start()
document.getElementById('btnPause').onclick = ()=>{
  mediaRecorder.stop();
  }

mediaRecorder.onstop = (e)=>{
  document.getElementById('btnPause').style.display = "none"
  document.getElementById('btnDownload').style.display = "block"
  let videoData = URL.createObjectURL(
    new Blob(data , {type: data[0].type})
  )
  document.getElementById("video").src = videoData
  document.getElementById('link').href = videoData
  }
  
}

document.getElementById('btn').onclick = ()=>{
  start()
  
}
