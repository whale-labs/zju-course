;(function(){

	var RoomSlider = function(slideId){		//给一个参数传递
		
		
		this.slide = document.getElementById(slideId); 	//获取第一层
		this.room = this.slide.getElementsByTagName('div')[0];  //获取第二层
		this.img = this.room.getElementsByTagName('img');	//获取图片的个数
		this.slideWidth = parseInt(getComputedStyle(this.slide).width);	//获取slide的宽度
		this.slideHeight = parseInt(getComputedStyle(this.slide).height);	//获取slide的高度，用来动态居中按钮的位置
		


		this.up = null;		//获取按钮
		this.down = null;		//获取按钮
		this.navButton = null;	//获取到所有的li

		this.time = null;	//定时器
		this.imgIndex = 1;	//获取图片位置
		this.speed = -(this.slideWidth/10);	//动画速度

		this.resetAllButton();	//初始化设置
		
		this.slide.onmouseenter = this.onmouseenter.bind(this);	//按钮绑定事件
		this.slide.onmouseleave = this.onmouseleave.bind(this);	//按钮绑定事件
		this.down.onclick = this.nextStart.bind(this);	//按钮绑定事件
		this.up.onclick = this.prevStart.bind(this);	//按钮绑定事件
		this.autoStart = setInterval(this.nextStart.bind(this),3000);	//定时器

		//遍历所有原点
		for(var j=0;j<this.navButton.length;j++){
			this.navButton[j].onclick = this.navButtonClick.bind(this);
		}
		

	};

	//立即执行函数初始化css样式
	RoomSlider.prototype.resetCss = function(){

		//初始化需要的样式
		var createStyle = document.createElement('style');
		/*两个左右按钮公共样式*/
		createStyle.innerHTML+='.buttonCss{font-size:14px;position:absolute;;z-index:2;background:rgba(51,51,51,0.4);color:#fff;padding:4px;border-style:none;outline:none;cursor:pointer;display:none;}';
		createStyle.innerHTML+='.room{position:absolute;}';	//初始化room的css
		createStyle.innerHTML+='.slide{font-size:0;overflow:hidden;position:relative;}'	//初始化slide样式
		createStyle.innerHTML+='.nav{padding:0 4px;list-style:none;position:absolute;font-size:0px;background:rgba(222,222,222,0.4);bottom:10px;right:10px;text-align:center;-moz-border-radius:10px;border-radius:10px;}';	//nav样式
		createStyle.innerHTML+='.navButton{display:inline-block;margin:6px 4px;background:#fff;width:8px;height:8px;-moz-border-radius:8px;border-radius:8px;cursor:pointer;}'	//导航点样式
		document.head.appendChild(createStyle);

	}();


	//TODO:初始化函数
	RoomSlider.prototype.resetAllButton = function(){
		
	}

	//TODO:鼠标进入事件
	RoomSlider.prototype.onmouseenter = function () {
		
	}

	//TODO:鼠标离开事件
	RoomSlider.prototype.onmouseleave = function(){

	}
	
	//TODO:down按钮事件
	RoomSlider.prototype.nextStart = function(){

	}

	//TODO:up按钮事件
	RoomSlider.prototype.prevStart = function () {
		
	}


	//TODO:原点点击事件
	RoomSlider.prototype.navButtonClick = function(e){
		
	}
	

	//原点样式改变
	RoomSlider.prototype.navButtonStyle = function(liTarget){
		liTarget.style.background = '#333';
		this.navButton[this.imgIndex-1].style.background = '#fff';
		this.imgIndex = liTarget.index;
	}

	this.RoomSlider = RoomSlider;

})();


	



