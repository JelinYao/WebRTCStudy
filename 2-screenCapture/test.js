/*****************************
 * WebRTC学习代码
 * 测试捕获桌面
 * 注：Chrome70的简介在八月宣布，并在十月的discuss-webrtc Google group中确认下来。
 * github: https://github.com/JelinYao
 */

async function onCapture(){
    try{
        //getDisplayMedia需要等待用户选择捕获对象（桌面、APP……），必读使用await等待
        const constraints = {
            video: {
                cursor: 'always' | 'motion' | 'never',
                displaySurface: 'application' | 'browser' | 'monitor' | 'window'
            }
        }
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
        //获取HTML页面中的video控件
        videoElem = document.querySelector('video#localVideo');
        //将视频流输出到页面
        videoElem.srcObject = stream;
    }
    catch(e){
        console.log(e);
    }
}

//终止捕获视频，刷新页面即可
function onStop(){
    location.reload();
}