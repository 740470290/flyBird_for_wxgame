export class WxAPI{

  // 获取手机基本信息
  getSysinfo(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
      }
    })
  }
  // 获取用户信息(微信登录的信息)需要先授权
  getWxUser(callback){
    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })
    button.onTap((res) => {
      console.log(res)
      if(res.userInfo){
        button.destroy()
        callback()
      }
    })
    

  }
  // 发送http请求
  sendHttp(){
    wx.request({
      url: 'http://localhost:4000',
      data:{name:'Jim',age:23},
      success: function(res){
        console.log(res.data);
      }
    })
  }
  // 使用socket链接
  socket(){
    wx.connectSocket({
      url: 'ws://127.0.0.1:4001',
      success: function(){
        console.log('连接成功');
      }
    });
    //发送给服务器
    wx.onSocketOpen(function(){
      wx.sendSocketMessage({
        data: '这是客户端发送给服务器的数据',
        success: function(res){
          console.log(res);
        }
      });
      //接收服务器的数据
      wx/wx.onSocketMessage(function(res){
        console.log(res);
      })
    })
    
  }


  // 下载文件
  download(){
    wx.downloadFile({
      // url:'http://www.xinhuanet.com/photo/2019-04/24/1210118339_15561138581241n.jpg',
      url:'http://127.0.0.1:4002',
      success: function(res){
        console.log(res);
        console.log(JSON.stringify(res));
        const path = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: function(re){
            console.log('保存成功');
          }
        })

      }
    })
  }
  
  upload(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http:/127.0.0.1:5000/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
  }
  playMusic(){
    const music=wx.createInnerAudioContext()
    music.src='./audios/bgm.mp3'
    // music.play()
    music.loop=true;
    music.autoplay=true;
  }

}