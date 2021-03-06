﻿/**
微信小程序API 0.11.112300
**/
declare interface AppStatic {
	(config: any): any;
}

declare var App: AppStatic;

////////////////////////////////////////////////
declare interface WXStatic {
	///////////////////////////////////////////////////////////////
	// 网络-发起请求
	///////////////////////////////////////////////////////////////
	/**
	wx.request发起的是 HTTPS 请求。一个微信小程序，同时只能有5个网络请求连接。
	**/
	request(obj: {
		/**
		开发者服务器接口地址
		**/
		url: string,
		/**
		请求的参数
		**/
		data?: any,
		/**
		设置请求的 header , header 中不能设置 Referer
		**/
		header?: any,
		/**
		默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		**/
		method?: string,
		/**
		收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 网络-上传、下载
	///////////////////////////////////////////////////////////////
	/**
	将本地资源上传到开发者服务器。如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 。
	**/
	uploadFile(obj: {
		/**
		开发者服务器 url
		**/
		url: string,
		/**
		要上传文件资源的路径
		**/
		filePath: string,
		/**
		文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
		**/
		name: string,
		/**
		HTTP 请求 Header , header 中不能设置 Referer
		**/
		header?: any,
		/**
		HTTP 请求中其他额外的 form data
		**/
		formData?: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	/**
	下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
	**/
	downloadFile(obj: {
		/**
		下载资源的 url
		**/
		url: string,
		/**
		HTTP 请求 Header
		**/
		header?: any,
		/**
		下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 网络-WebSocket
	///////////////////////////////////////////////////////////////
	/**
	创建一个 WebSocket 连接；一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
	**/
	connectSocket(obj: {
		/**
		开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
		**/
		url: string,
		/**
		请求的数据
		**/
		data?: any,
		/**
		HTTP Header , header 中不能设置 Referer
		**/
		header?: any,
		/**
		默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		**/
		method?: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	监听WebSocket连接打开事件。
	**/
	onSocketOpen(): any;
	/**
	监听WebSocket错误。
	**/
	onSocketError(): any;
	/**
	通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
	**/
	sendSocketMessage(obj: {
		/**
		需要发送的内容
		**/
		data: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	监听WebSocket接受到服务器的消息事件。
	**/
	onSocketMessage(): any;
	/**
	关闭WebSocket连接。
	**/
	closeSocket(): any;
	/**
	监听WebSocket关闭。
	**/
	onSocketClose(): any;

	///////////////////////////////////////////////////////////////
	// 媒体-图片
	///////////////////////////////////////////////////////////////
	/**
	从本地相册选择图片或使用相机拍照。
	**/
	chooseImage(obj: {
		/**
		最多可以选择的图片张数，默认9
		**/
		count?: any,
		/**
		original 原图，compressed 压缩图，默认二者都有
		**/
		sizeType?: any,
		/**
		album 从相册选图，camera 使用相机，默认二者都有
		**/
		sourceType?: any,
		/**
		成功则返回图片的本地文件路径列表 tempFilePaths
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	预览图片。
	**/
	previewImage(obj: {
		/**
		当前显示图片的链接，不填则默认为 urls 的第一张
		**/
		current?: string,
		/**
		需要预览的图片链接列表
		**/
		urls: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	获取图片信息
	**/
	getImageInfo(obj: {
		/**
		图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
		**/
		src: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 媒体-录音
	///////////////////////////////////////////////////////////////
	/**
	开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
	**/
	startRecord(obj: {
		/**
		录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	​    主动调用停止录音。
	**/
	stopRecord(): any;

	///////////////////////////////////////////////////////////////
	// 媒体-音频播放控制
	///////////////////////////////////////////////////////////////
	/**
	开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
	**/
	playVoice(obj: {
		/**
		需要播放的语音文件的文件路径
		**/
		filePath: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
	**/
	pauseVoice(): any;
	/**
	结束播放语音。
	**/
	stopVoice(): any;

	///////////////////////////////////////////////////////////////
	// 媒体-音乐播放控制
	///////////////////////////////////////////////////////////////
	/**
	获取音乐播放状态。
	**/
	getBackgroundAudioPlayerState(obj: {
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	播放音乐，同时只能有一首音乐正在播放。
	**/
	playBackgroundAudio(obj: {
		/**
		音乐链接
		**/
		dataUrl: string,
		/**
		音乐标题
		**/
		title?: string,
		/**
		封面URL
		**/
		coverImgUrl?: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	暂停播放音乐。
	**/
	pauseBackgroundAudio(): any;
	/**
	控制音乐播放进度。
	**/
	seekBackgroundAudio(obj: {
		/**
		音乐位置，单位：秒
		**/
		position: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	停止播放音乐。
	**/
	stopBackgroundAudio(): any;
	/**
	监听音乐播放。
	**/
	onBackgroundAudioPlay(): any;
	/**
	监听音乐暂停。
	**/
	onBackgroundAudioPause(): any;
	/**
	监听音乐停止。
	**/
	onBackgroundAudioStop(): any;

	///////////////////////////////////////////////////////////////
	// 媒体-文件
	///////////////////////////////////////////////////////////////
	/**
	保存文件到本地。
	**/
	saveFile(obj: {
		/**
		需要保存的文件的临时路径
		**/
		tempFilePath: string,
		/**
		返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	获取本地已保存的文件列表
	**/
	getSavedFileList(obj: {
		/**
		接口调用成功的回调函数，返回结果见success返回参数说明
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	获取本地文件的文件信息
	**/
	getSavedFileInfo(obj: {
		/**
		文件路径
		**/
		filePath: string,
		/**
		接口调用成功的回调函数，返回结果见success返回参数说明
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	删除本地存储的文件
	**/
	removeSavedFile(obj: {
		/**
		需要删除的文件路径
		**/
		filePath: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
	**/
	openDocument(obj: {
		/**
		文件路径，可通过 downFile 获得
		**/
		filePath: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 媒体-视频
	///////////////////////////////////////////////////////////////
	/**
	拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
	**/
	chooseVideo(obj: {
		/**
		album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
		**/
		sourceType?: any,
		/**
		拍摄视频最长拍摄时间，单位秒。最长支持60秒
		**/
		maxDuration?: any,
		/**
		前置或者后置摄像头，默认为前后都有，即：['front', 'back']
		**/
		camera?: any,
		/**
		接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 媒体-音频组件控制
	///////////////////////////////////////////////////////////////
	/**
	创建并返回 audio 上下文 audioContext 对象
	**/
	createAudioContext(audioId: string): any;

	///////////////////////////////////////////////////////////////
	// 媒体-视频组件控制
	///////////////////////////////////////////////////////////////
	/**
	创建并返回 video 上下文 videoContext 对象
	**/
	createVideoContext(videoId: string): any;

	///////////////////////////////////////////////////////////////
	// 数据-数据缓存
	///////////////////////////////////////////////////////////////
	/**
	将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
	**/
	setStorage(obj: {
		/**
		本地缓存中的指定的 key
		**/
		key: string,
		/**
		需要存储的内容
		**/
		data: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	**/
	setStorageSync(
		/**
		本地缓存中的指定的 key
		**/
		key: string,
		/**
		需要存储的内容
		**/
		data: any
	);
	/**
	从本地缓存中异步获取指定 key 对应的内容。
	**/
	getStorage(obj: {
		/**
		本地缓存中的指定的 key
		**/
		key: string,
		/**
		接口调用的回调函数,res = {data: key对应的内容}
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	从本地缓存中同步获取指定 key 对应的内容。
	**/
	getStorageSync(
		/**
		本地缓存中的指定的 key
		**/
		key: string
	);
	/**
	异步获取当前storage的相关信息
	**/
	getStorageInfo(obj: {
		/**
		接口调用的回调函数，详见返回参数说明
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	同步获取当前storage的相关信息
	**/
	getStorageInfoSync(): any;
	/**
	从本地缓存中异步移除指定 key 。
	**/
	removeStorage(obj: {
		/**
		本地缓存中的指定的 key
		**/
		key: string,
		/**
		接口调用的回调函数
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	从本地缓存中同步移除指定 key 。
	**/
	removeStorageSync(
		/**
		本地缓存中的指定的 key
		**/
		key: string
	);
	/**
	清理本地数据缓存。
	**/
	clearStorage(): any;
	/**
	同步清理本地数据缓存
	**/
	clearStorageSync(): any;

	///////////////////////////////////////////////////////////////
	// 位置
	///////////////////////////////////////////////////////////////
	/**
	获取当前的地理位置、速度。
	**/
	getLocation(obj: {
		/**
		默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
		**/
		type?: string,
		/**
		接口调用成功的回调函数，返回内容详见返回参数说明。
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	打开地图选择位置
	**/
	chooseLocation(obj: {
		/**
		接口调用成功的回调函数，返回内容详见返回参数说明。
		**/
		success: () => any,
		/**
		用户取消时调用
		**/
		cancel?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	​    使用微信内置地图查看位置
	**/
	openLocation(obj: {
		/**
		纬度，范围为-90~90，负数表示南纬
		**/
		latitude: any,
		/**
		经度，范围为-180~180，负数表示西经
		**/
		longitude: any,
		/**
		缩放比例，范围1~28，默认为28
		**/
		scale?: any,
		/**
		位置名
		**/
		name?: string,
		/**
		地址的详细说明
		**/
		address?: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 设备
	///////////////////////////////////////////////////////////////
	/**
	获取网络类型。
	**/
	getNetworkType(obj: {
		/**
		接口调用成功，返回网络类型 networkType
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	获取系统信息。
	**/
	getSystemInfo(obj: {
		/**
		接口调用成功的回调
		**/
		success: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	获取系统信息同步接口
	**/
	getSystemInfoSync(): any;
	/**
	监听重力感应数据，频率：5次/秒
	**/
	onAccelerometerChange(): any;
	/**
	监听罗盘数据，频率：5次/秒
	**/
	onCompassChange(): any;
	/**
	OBJECT参数说明：
	**/
	makePhoneCall(obj: {
		/**
		需要拨打的电话号码
		**/
		phoneNumber: string,
		/**
		接口调用成功的回调
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});


	///////////////////////////////////////////////////////////////
	// 界面-交互反馈
	///////////////////////////////////////////////////////////////
	/**
	显示消息提示框
	**/
	showToast(obj: {
		/**
		提示的内容
		**/
		title: string,
		/**
		图标，只支持"success"、"loading"
		**/
		icon?: string,
		/**
		提示的延迟时间，单位毫秒，默认：1500, 最大为10000
		**/
		duration?: any,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	隐藏消息提示框
	**/
	hideToast(): any;
	/**
	​显示模态弹窗
	**/
	showModal(obj: {
		/**
		提示的标题
		**/
		title: string,
		/**
		提示的内容
		**/
		content: string,
		/**
		是否显示取消按钮，默认为 true
		**/
		showCancel?: any,
		/**
		取消按钮的文字，默认为"取消"，最多 4 个字符
		**/
		cancelText?: string,
		/**
		取消按钮的文字颜色，默认为"#000000"
		**/
		cancelColor?: any,
		/**
		确定按钮的文字，默认为"确定"，最多 4 个字符
		**/
		confirmText?: string,
		/**
		确定按钮的文字颜色，默认为"#3CC51F"
		**/
		confirmColor?: any,
		/**
		接口调用成功的回调函数，返回res.confirm为true时，表示用户点击确定按钮
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	​显示操作菜单
	**/
	showActionSheet(obj: {
		/**
		按钮的文字数组，数组长度最大为6个
		**/
		itemList: any,
		/**
		按钮的文字颜色，默认为"#000000"
		**/
		itemColor?: any,
		/**
		接口调用成功的回调函数，详见返回参数说明
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 界面-设置导航条
	///////////////////////////////////////////////////////////////
	/**
	动态设置当前页面的标题。
	**/
	setNavigationBarTitle(obj: {
		/**
		页面标题
		**/
		title: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	在当前页面显示导航条加载动画。
	**/
	showNavigationBarLoading(): any;
	/**
	隐藏导航条加载动画。
	**/
	hideNavigationBarLoading(): any;

	///////////////////////////////////////////////////////////////
	// 界面-导航
	///////////////////////////////////////////////////////////////
	/**
	保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
	**/
	navigateTo(obj: {
		/**
		需要跳转的应用内页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
		**/
		url: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	关闭当前页面，跳转到应用内的某个页面。
	**/
	redirectTo(obj: {
		/**
		需要跳转的应用内页面的路径
		**/
		url: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});
	/**
	关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
	**/
	navigateBack(obj: {
		/**
		返回的页面数，如果 delta 大于现有页面数，则返回到首页。
		**/
		delta?: any
	});

	///////////////////////////////////////////////////////////////
	// 界面-动画
	///////////////////////////////////////////////////////////////
	/**
	创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
	**/
	createAnimation(obj: {
		/**
		动画持续时间，单位ms，默认值 400
		**/
		duration?: any,
		/**
		定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
		**/
		timingFunction?: string,
		/**
		动画延迟时间，单位 ms，默认值 0
		**/
		delay?: any,
		/**
		设置transform-origin，默认为"50% 50% 0"
		**/
		transformOrigin?: string
	});
	/**
	动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
	**/
	animation(): any;

	///////////////////////////////////////////////////////////////
	// 界面-绘图
	///////////////////////////////////////////////////////////////
	/**
	创建并返回绘图上下文context对象。
	**/
	createContext(obj: {
		/**
		横坐标缩放的倍数
		**/
		scaleWidth?: any,
		/**
		纵坐标轴缩放的倍数
		**/
		scaleHeight?: any
	});
	/**
	OBJECT参数说明：
	**/
	drawCanvas(obj: {
		/**
		画布标识，传入 <canvas></canvas> 的 cavas-id
		**/
		canvasId: string,
		/**
		绘图动作数组，由 wx.createContext 创建的 context，调用 getActions 方法导出绘图动作数组。
		**/
		actions: any,
		/**
		本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
		**/
		reserve?: any
	});
	/**
	把当前画布的内容导出生成图片，并返回文件路径
	**/
	canvasToTempFilePath(obj: {
		/**
		画布标识，传入 <canvas></canvas> 的 cavas-id
		**/
		canvasId: string
	});

	///////////////////////////////////////////////////////////////
	// 界面-其他
	///////////////////////////////////////////////////////////////
	/**
	收起键盘。
	**/
	hideKeyboard(): any;
	/**
	停止当前页面下拉刷新。详见页面相关事件处理函数。
	**/
	stopPullDownRefresh(): any;

	///////////////////////////////////////////////////////////////
	// 开放接口-登录
	///////////////////////////////////////////////////////////////
	/**
	调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。用户数据的加解密通讯需要依赖会话密钥完成。
	**/
	login(obj: {
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

	///////////////////////////////////////////////////////////////
	// 开放接口-微信支付
	///////////////////////////////////////////////////////////////
	/**
	发起微信支付。
	**/
	requestPayment(obj: {
		/**
		时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
		**/
		timeStamp: any,
		/**
		随机字符串，长度为32个字符以下。
		**/
		nonceStr: string,
		/**
		统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
		**/
		package: string,
		/**
		签名算法，暂支持 MD5
		**/
		signType: string,
		/**
		签名,具体签名方案参见微信公众号支付帮助文档;
		**/
		paySign: string,
		/**
		接口调用成功的回调函数
		**/
		success?: () => any,
		/**
		接口调用失败的回调函数
		**/
		fail?: () => any,
		/**
		接口调用结束的回调函数（调用成功、失败都会执行）
		**/
		complete?: () => any
	});

}

declare var wx: WXStatic;

