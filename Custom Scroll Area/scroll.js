var scrollbar = "images/scroll-but.png"; <!--ŽlŽment-barre de dŽfilement-->
var uparrow = "images/scroll-up.png"; <!--flche du haut--><!--up arrow-->
var downarrow = "images/scroll-down.png"; <!--flche du bas-->
var barbg = "images/scroll-bg.png"; <!--background-barre de dŽfilement-->

ns4 = (document.layers)?true:false
ie4 = (document.all)?true:false
dom = (document.getElementById)?true:false

var mouseX
var mouseY
var id
var click
var clickDrag
var contentY
var contentH
var barY
var barSize = 30
var scrollTimer = setTimeout("",500)
var btnSize = 27
var speed = 6
var height 
var boxCSS = "<style type='text/css'>\n"
var boxHTML = "<span id='momoClip'><span id='momo'></span></span>\n"
hasScroll = true

boxes = new Array()

function scrollBox(x, y, w, h, i){
	l = boxes.length
	boxes[l] = this
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.i = i
	this.upY = y
	this.downY = y + (h - btnSize)
	this.downX = x + (w - btnSize)
	boxCSS += "#"+i+"Clip {position:absolute;top:"+y+";left:"+x+";height:"+h+";width:"+w+";clip:rect(0,"+w+","+h+",0);overflow:hidden;z-index:10;color:#000000}\n"
	boxCSS += "#"+i+" {position:absolute;left:0;top:0;width:"+(w-btnSize)+";}\n"
	boxCSS += "#"+i+"barBg {position:absolute;top:"+y+";left:"+(x+(w-btnSize))+";height:"+h+";width:"+btnSize+";background-image:url('"+ barbg +"');layer-background-image:url('"+ barbg +"');z-index:11;margin-left:2}"
	boxHTML += "<span id="+i+"barBg>&nbsp;</span>"
	boxCSS += "#"+i+"verBar {position:absolute;top:"+(y+btnSize)+";left:"+(x+(w-btnSize))+";height:44;width:33;z-index:13}\n"
	boxHTML += "<span id='"+i+"verBar'><img src='"+ scrollbar +"' width='33' height='44' border='0'></span>\n"	
	boxCSS += "#"+i+"UpBtn {position:absolute;top:"+y+";left:"+(x+(w-btnSize))+";height:23;width:30;z-index:13;}\n"
	boxHTML += "<span id='"+i+"UpBtn'><img src='"+ uparrow +"' width='30' height='23' border='0'></span>\n"
	boxCSS += "#"+i+"DnBtn {position:absolute;top:"+(y+(h-btnSize))+";left:"+(x+(w-btnSize))+";z-index:13;margin-top:15}\n"
	boxHTML += "<span id='"+i+"DnBtn' style=''><img src='"+ downarrow +"' width='30' height='23' border='0'></span>\n"
}

function scrollCSS(){
	boxCSS += "</style>\n"
	document.open()
	document.write(boxCSS)
	document.close()
}

function scrollHTML(){
	document.open()
	document.write(boxHTML)
	document.close()
	for (l = 0;l < boxes.length; l++){
		i = boxes[l].i
		if (dom){
			document.getElementById(i).contentH = document.getElementById(i).offsetHeight
			document.getElementById(i).style.top = 0
			document.getElementById(i+"verBar").y = boxes[l].y + btnSize
			if (document.getElementById(i).contentH < boxes[l].h) document.getElementById(i+"verBar").style.visibility = "hidden"
		} else if (ie4){
			document.all[i].contentH = document.all[i].offsetHeight
			document.all[i].style.top = 0
			document.all[i+"verBar"].y = boxes[l].y + btnSize
			if (document.all[i].contentH < boxes[l].h) document.all[i+"verBar"].style.visibility = "hidden"
		} else if (ns4){
			document[i+"Clip"].document[i].contentH = document[i+"Clip"].document[i].document.height
			document[i+"verBar"].y = boxes[l].y + btnSize
			if (document[i+"Clip"].document[i].contentH < boxes[l].h) document[i+"verBar"].visibility = "hide"
		}
	}
}

function down(e){
	getMouse(e)
	for (i=0; i < boxes.length; i++) {
		box = boxes[i]
		if (mouseY > box.y && mouseY < (box.y + box.h) && mouseX > box.downX && mouseX < (box.downX + btnSize) ) {
			id = box.i
			height = box.h
			barStop = (box.y + box.h) - (barSize + btnSize)
			barT = box.y + btnSize
			if (dom) dragTop = document.getElementById(id+"verBar").y
			if (ie4) dragTop = document.all[id+"verBar"].y
			if (ns4) dragTop = document[id+"verBar"].y
			if (mouseY > box.upY && mouseY < (box.upY+btnSize)){
				click = true
				return scrollUp()
			}
			if (mouseY > box.downY && mouseY < (box.downY+btnSize)){
				click = true
				return scrollDn()
			}
			if (mouseY < box.downY && mouseY > (dragTop + barSize)){
				click = true
				return scrollDn()
			}
			if (mouseY > (box.upY + btnSize) && mouseY < dragTop){
				click = true
				return scrollUp()
			}
			if (mouseY > dragTop && mouseY < (dragTop + barSize)){
				clickDrag = true
				return false
			}
		}
	}
}

function move(e){
	if(click && ie4) return false
	if(clickDrag){
		getMouse(e)
		getPos()
		barY = mouseY - (barSize / 2)
		if (barY < barT) barY = barT
		if (barY > barStop) barY = barStop
		if (dom) document.getElementById(id+"verBar").y = barY
		if (ie4) document.all[id+"verBar"].y = barY
		if (ns4) document[id+"verBar"].y = barY
		barPosition = (barY - barT) / (height - ((btnSize * 2) + barSize))
		position = barPosition * (contentH - height)
		contentY = -position
		scroll()
	if(ie4)return false
	}
}

function up(){
	clearTimeout(scrollTimer)
	click = false
	clickDrag = false
}

function scrollUp(){
	getPos()
	if (mouseY > barY){
		return up()
	} else {
		if (contentY < 0){
			contentY = contentY + speed
			if (contentY > 0) contentY = 0
			barY = barY - (speed / (contentH - height)) * ((height - (btnSize*2)) - barSize)
			if (barY < barT) barY = barT
			if (dom) document.getElementById(id+"verBar").y = barY
			if (ie4) document.all[id+"verBar"].y = barY
			if (ns4) document[id+"verBar"].y = barY
			scroll()
			scrollTimer = setTimeout("scrollUp()",25)
		}
	}
	return false
}

function scrollDn(){
	getPos()
	if (mouseY < (barY + barSize)){
		return up()
	} else {
		if (contentY > (-contentH + height)){
			contentY = contentY - speed
			if (contentY < (-contentH + height)) contentY = (-contentH + height)
			barY = barY + (speed / (contentH - height)) * ((height - (btnSize*2)) - barSize)
			if (barY > barStop) barY = barStop
			if (dom) document.getElementById(id+"verBar").y = barY
			if (ie4) document.all[id+"verBar"].y = barY
			if (ns4) document[id+"verBar"].y = barY
			scroll()
			scrollTimer = setTimeout("scrollDn()",25)
		}
	}
	return false
}

function scroll(){
	if (dom){
		document.getElementById(id+"verBar").style.top = barY
		document.getElementById(id).style.top = contentY
	} else if (ie4){
		document.all[id+"verBar"].style.top = barY
		document.all[id].style.top = contentY
	} else if (ns4){
		document[id+"verBar"].top = barY
		document[id+"Clip"].document[id].top = contentY
	}
}

function getPos(){
	if (dom){
		contentY = parseInt(document.getElementById(id).style.top)
		barY = document.getElementById(id+"verBar").y
		contentH = document.getElementById(id).contentH
	} else if (ie4){
		contentY = parseInt(document.all[id].style.top)
		barY = document.all[id+"verBar"].y
		contentH = document.all[id].contentH
	} else if (ns4){
		contentY = document[id+"Clip"].document[id].top
		barY = document[id+"verBar"].y
		contentH = document[id+"Clip"].document[id].contentH
	}
	return true
}

function getMouse(e){
	if (ie4){
		mouseY = event.clientY + document.body.scrollTop
		mouseX = event.clientX + document.body.scrollLeft
	} else if (ns4 || dom){
		mouseY = e.pageY
		mouseX = e.pageX
	}
}

function init(){
}
	if(ns4){
		document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP)
	}
	document.onmousedown = down
	document.onmousemove = move
	document.onmouseup = up


momo = new scrollBox(0,0,0,0,"momo")

content = new scrollBox(0,0,400,204,"content")

scrollCSS()