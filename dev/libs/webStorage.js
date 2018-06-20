function WebStorage(sel){
	this.sel=sel;
	if(!this.sel){
		alert("请选择local/session");
		return;
	}
	this.isSupported();
}
WebStorage.prototype={
	constructor:WebStorage,
	isSupported(){
		if(this.sel=="local"){
			if(!window.localStorage){
				return;
			}
		}else if(this.sel=="session"){
			if(!window.sessionStorage){
				return;
			}
		}else{
			alert("请填入合法参数");
			return;
		}	
	},
	set(name,val,time){
		var nowtime=new Date().getTime();
		var arr=[];
		var settime=time||6000000;
		var va=JSON.stringify(val);
		arr.push(JSON.parse(va));
		arr.push(settime);
		arr.unshift(nowtime);
		var setList={
			"local":function(){
				if(localStorage.getItem(name)){
					return false;
				}
				localStorage.setItem(name,JSON.stringify(arr));
			}.bind(this),
			"session":function(){
				if(sessionStorage.getItem(name)){
					return false;
				}
				sessionStorage.setItem(name,JSON.stringify(arr));
			}.bind(this)
		};
		setList[this.sel]();
	},
	get(name){
		var getList={
				"local":function(){
					var val=localStorage.getItem(name);
					if(!val) return false;
					var arr=JSON.parse(val);
					if(new Date().getTime()-arr[0]>arr[2]){
						return false;
					}else{
						return arr[1];
					}	
				}.bind(this),
				"session":function(){
					var val=sessionStorage.getItem(name);
					if(!val) return false;
					var arr=JSON.parse(val);
					if(new Date().getTime()-arr[0]>arr[2]){
						return false;
					}else{
						return arr[1];
					}
				}.bind(this)
			};
		// if(!getList[this.sel]()){
		// 	return false;
		// }
		return	getList[this.sel]();
	},
	delete(name){
		var delList={
				"local":function(){
					localStorage.removeItem(name);
				}.bind(this),
				"session":function(){
					sessionStorage.removeItem(name);
				}.bind(this)
			};
		delList[this.sel]();
	},
	deleteAllExpires(){
		var delAllExList={
				"local":function(){
					for(var i=0;i<localStorage.length;i++){
						var val=localStorage.getItem(localStorage.key(i));
						var arr=JSON.parse(val);
						if(new Date().getTime()-arr[0]>arr[2]){
							localStorage.removeItem(localStorage.key(i));
							i=-1;
						}	
					}
				}.bind(this),
				"session":function(){
					for(var i=0;i<sessionStorage.length;i++){
						var val=sessionStorage.getItem(sessionStorage.key(i));
						var arr=JSON.parse(val);
						if(new Date().getTime()-arr[0]>arr[2]){
							sessionStorage.removeItem(sessionStorage.key(i));
							i=-1;
						}
					}
				}.bind(this)
			};
		delAllExList[this.sel]();
	},
	clear(){
		var clearList={
				"local":function(){
					var val=localStorage.getItem(name);
					var arr=JSON.parse(val);
					if(new Date().getTime()-arr[0]>arr[2]){
						return;
					}else{
						return arr[1];
					}	
				}.bind(this),
				"session":function(){
					sessionStorage.clear();
				}.bind(this)
			};
		clearList[this.sel]();
	},
	touch(key,time){
		var touchList={
				"local":function(){
					var val=localStorage.getItem(key);
					var arr=JSON.parse(val);
					if(new Date().getTime()-arr[0]>arr[2]){
						alert("数据已过期");
						return;
					}else{
						arr[0]=new Date().getTime();
						arr[2]=time;
						localStorage.setItem(key,JSON.stringify(arr));
					}	
				}.bind(this),
				"session":function(){
					var val=sessionStorage.getItem(key);
					var arr=JSON.parse(val);
					if(new Date().getTime()-arr[0]>arr[2]){
						alert("数据已过期");
						return;
					}else{
						arr[0]=new Date().getTime();
						arr[2]=time;
						sessionStorage.setItem(key,JSON.stringify(arr));
					}	
				}.bind(this)
			};
		touchList[this.sel]();
	},
	add(key,val,time){
		var arr=[];
		var settime=time||6000000;
		var value=JSON.stringify(val);
		arr.push(JSON.parse(value));
		arr.push(settime);
		arr.unshift(new Date().getTime());
		var addList={
				"local":function(){
					var yvalue=localStorage.getItem(key);
					if(yvalue){
						var yarr=JSON.parse(yvalue);
						if(new Date().getTime()-yarr[0]>yarr[2]){
							localStorage.setItem(key,JSON.stringify(arr));
							return;
						}
						alert("该key值已存在。");
					}else{
						localStorage.setItem(key,JSON.stringify(arr));
					}	
				}.bind(this),
				"session":function(){
					var yvalue=sessionStorage.getItem(key);
					if(yvalue){
						var yarr=JSON.parse(yvalue);
						if(new Date().getTime()-yarr[0]>yarr[2]){
							sessionStorage.setItem(key,JSON.stringify(arr));
							return;
						}
						alert("该key值已存在。");
					}else{
						sessionStorage.setItem(key,JSON.stringify(arr));
					}	
				}.bind(this)
			};
		addList[this.sel]();
	},
	replace(key,val,time){
		var arr=[];
		var settime=time||6000000;
		var value=JSON.stringify(val);
		arr.push(JSON.parse(value));
		arr.push(settime);
		arr.unshift(new Date().getTime());
		var replaceList={
				"local":function(){
					var yvalue=localStorage.getItem(key);
					if(yvalue){
						var yarr=JSON.parse(yvalue);
						if(new Date().getTime()-yarr[0]<yarr[2]){
							localStorage.setItem(key,JSON.stringify(arr));
							return;
						}
						alert("该数据已过期。");
					}else{
						alert("该key值不存在。");
					}	
				}.bind(this),
				"session":function(){
					var yvalue=sessionStorage.getItem(key);
					if(yvalue){
						var yarr=JSON.parse(yvalue);
						if(new Date().getTime()-yarr[0]<yarr[2]){
							sessionStorage.setItem(key,JSON.stringify(arr));
							return;
						}
						alert("该数据已过期。");
					}else{
						alert("该key值不存在。");
					}		
				}.bind(this)
			};
		replaceList[this.sel]();
	}
}