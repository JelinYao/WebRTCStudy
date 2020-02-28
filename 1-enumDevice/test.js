/*****************************
 * WebRTC学习代码
 * 枚举音视频设备列表
 * github: https://github.com/JelinYao
 */


//页面加载完毕后开始执行代码
window.onload = async function(){ 
    try{
        //getConnectedDevices十一个异步执行的函数，因此需要使用await等待函数执行完毕
        const devices = await getConnectedDevices('videoinput');
        //动态添加到HTML页面中
        var tableElem = this.document.getElementById('devices_table');
        for(i=0;i<devices.length;++i){
            trElem = this.document.createElement('tr');
            //序号
            indexElem = this.document.createElement('td');
            indexElem.innerText = i + 1; 
            trElem.appendChild(indexElem);
            //kind
            kindElem = this.document.createElement('td');
            kindElem.innerText = devices[i].kind; 
            trElem.appendChild(kindElem);
            //deviceId
            didElem = this.document.createElement('td');
            didElem.innerText = devices[i].deviceId; 
            trElem.appendChild(didElem);
            //groupId
            gidElem = this.document.createElement('td');
            gidElem.innerText = devices[i].groupId; 
            trElem.appendChild(gidElem);
            tableElem.appendChild(trElem);
        }
    }
    catch(e){
        this.console.log(e);
    }
}

//获取当前连接的设备列表，返回MediaDeviceInfo对象的数组
async function getConnectedDevices(type){
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log("enum devices count:", devices.length);
    for(i=0;i<devices.length;++i){
        console.log(devices[i]);
    }
    //return devices.filter(device=>device.kind == type);
    return devices;
}


/*
查看MediaDeviceInfo对象的声明，包含我们可以直接使用的属性和方法
interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly groupId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
    toJSON(): any;
}
*/