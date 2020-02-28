/*****************************
 * WebRTC学习代码
 * 测试视频桌面
 * github: https://github.com/JelinYao
 */



async function onCapture(){
    const constraints = {
        'video' : true,
        'audio' : true
    }
    //获取当前音视频输入流，异步执行需要等待完成
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    //获取页面上的video控件
    videoElem = document.querySelector('video#localVideo');
    if(videoElem == null){
        stopCapture();
        alert("无法获取到页面上的视频控件");
        return;
    }
    //播放捕获的音视频
    videoElem.srcObject = stream;
}

function onStop(){
    stopCapture();
}

function stopCapture(){
    //重新加载页面
    location.reload();
}