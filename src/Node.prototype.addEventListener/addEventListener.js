export default function addEventListener(type,listener /*, useCapture (will be ignored) */) {
	var self=this;
	var wrapper=function(e) {
		e.target=e.srcElement;
		e.currentTarget=self;
		if (typeof listener.handleEvent != 'undefined') {
			listener.handleEvent(e);
		} else {
			listener.call(self,e);
		}
	};
	if (type=="DOMContentLoaded") {
		var wrapper2=function(e) {
			if (document.readyState=="complete") {
				wrapper(e);
			}
		};
		document.attachEvent("onreadystatechange",wrapper2);
		eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

		if (document.readyState=="complete") {
			var e=new Event();
			e.srcElement=window;
			wrapper2(e);
		}
	} else {
		this.attachEvent("on"+type,wrapper);
		eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
	}
};

