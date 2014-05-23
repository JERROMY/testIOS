// JavaScript Document

var page;
var maxImages = 4;
var speed = 400;
var IMG_WIDTH = 640;
var currentPage = 0;
var menuIndex = 1;
var menuArr = ["STORY","CHALLENGE", "GREEN", "MASTER", "FUTURE", "PLAN","FILM","CONTACT US"];
var picNumArr = [2,4,3,3,2,1,1,1];



$(document).ready(function(){
	
	$("#nextBtn").hide();
	$("#preBtn").hide();
	$("#header").hide();
                  
	//document.body.style.zoom = 0.5;
	
	var ASSET_MANAGER = new AssetManager();
		ASSET_MANAGER.queueDownload('images/loading.gif');
		ASSET_MANAGER.queueDownload('images/arrRight.png');
		ASSET_MANAGER.queueDownload('images/btn1.png');
		ASSET_MANAGER.queueDownload('images/btn2.png');
		ASSET_MANAGER.queueDownload('images/btn3.png');
		ASSET_MANAGER.queueDownload('images/btn4.png');
		ASSET_MANAGER.queueDownload('images/btn5.png');
		ASSET_MANAGER.queueDownload('images/btn6.png');
		ASSET_MANAGER.queueDownload('images/btn7.png');
		ASSET_MANAGER.queueDownload('images/btn8.png');
		ASSET_MANAGER.queueDownload('images/btn9.png');
		ASSET_MANAGER.queueDownload("images/buttomBg.png");
		ASSET_MANAGER.queueDownload("images/leftBtn.png");
		ASSET_MANAGER.queueDownload("images/logo.png");
		ASSET_MANAGER.queueDownload("images/menuBottom.png");
		ASSET_MANAGER.queueDownload("images/menuBtn.png");
		ASSET_MANAGER.queueDownload("images/menuBtnBg.png");
		ASSET_MANAGER.queueDownload("images/rightBtn.png");
		ASSET_MANAGER.queueDownload("images/topBar.jpg");
		
		ASSET_MANAGER.downloadAll(function() {
			
			$("#loadingAll").fadeOut();
			setTimeout("startAll()", 600);
			
		})
	
	
	//initEvent();


});

function startAll(){
	
	$( "#loadingAll").remove();
	$("#header").fadeIn("slow");
	initEvent();
}

function initEvent(){
	
	
	$("#menuBtn").bind("click", function (){
		 
		//console.log($(this).attr('id'));
		TweenMax.to("#menu", 1, {css:{marginTop:"0px"}, ease:Power2.easeOut});
    	//removePage();
    });
	
	$("#logo").bind("click", function (){
		 
		//console.log($(this).attr('id'));
		menuIndex = 1;
		TweenMax.to("#menu", 1, {css:{marginTop:"-662px"}, ease:Power2.easeOut});
		addPage(menuIndex,picNumArr[menuIndex-1]);
		
    
	});
	
	$("#menuBtn10").bind("click", function (){
		TweenMax.to("#menu", 1, {css:{marginTop:"-662px"}, ease:Power2.easeOut});
    });
    
    $("#nextBtn").bind("click", function (){
		//TweenMax.to("#menu", 1, {css:{marginTop:"-594px"}, ease:Power2.easeOut});
		//alert("next");
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		nextPage();
    });
    
     $("#preBtn").bind("click", function (){
		//TweenMax.to("#menu", 1, {css:{marginTop:"-594px"}, ease:Power2.easeOut});
		//alert("pre");
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		previousPage();
    });
	
	
	for(var i = 1 ; i <= 9 ; i++ ){
		
		 $("#menuBtn"+i).bind("click", function (){
			
			
			//console.log($(this).attr('id'));
			var id = $(this).attr('id');
			currentPage = 0;
			TweenMax.to("#menu", 1, {css:{marginTop:"-662px"}, ease:Power2.easeOut});
			switch(id){
				
				case "menuBtn1":
					menuIndex = 1;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn2":
					menuIndex = 2;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn3":
					menuIndex = 3;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn4":
					menuIndex = 4;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn5":
					menuIndex = 5;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn6":
					menuIndex = 6;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn7":
					menuIndex = 7;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn8":
					menuIndex = 8;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
					
				case "menuBtn9":
					menuIndex = 1;
					addPage(menuIndex,picNumArr[menuIndex-1]);
					break;
			
			
			}
			
			
			
			
    	});
		
	}
	
	addPage(menuIndex,picNumArr[menuIndex-1]);

}

function controlPanel(status){
	//preBtn nextBtn
	
	if(status == 1){
		
		 $("#nextBtn").show('fast');
		 $("#preBtn").show('fast');
	
	}else{
	
		 $("#nextBtn").hide('fast');
		 $("#preBtn").hide('fast');
	}
	

}

function removePage(){

	$( ".pageMain").remove();
	page = null;

}

function addPage(menuId, pageNum){

	$("#title").text(menuArr[menuId-1]);

	if(pageNum == 1){
		
		controlPanel(2);
	
	}else{
	
		controlPanel(1);
	
	}
	
	removePage();
	maxImages = pageNum;
	
	$( ".gallery" ).append("<div id=\"pageContent\" class=\"pageMain\">");
	
	for(var i = 1 ; i < pageNum+1 ; i++){
		
		var divStr = "<div id=\"page"+i+"\" class=\"page\">"+""+"</div>";
		var imgStr = "<img id=\"contentImg"+i+"\" class=\"contentImg\" src=\"images/"+menuId+"/"+i+".jpg\" width=\"640\">";
		var textStr = '<div id="contentText'+i+'" class="contentText"></div>';
		var loadingStr = '<img id="loadingImg'+i+'" class="loadingImg" src="images/loading.gif" width="200" height="200">';
		
		//console.log(divStr);
		//console.log(imgStr);
		//console.log(textStr);
		
		$( ".pageMain" ).append(divStr);
		$( "#page"+i ).append(imgStr);
		$( "#page"+i ).append(loadingStr);
		$( "#page"+i ).append(textStr);
		$( "#contentImg"+i ).hide();
		$( "#contentText"+i ).hide();

		$('#contentImg'+i).load(function(){
			
			var idNumString = $(this).attr('id');
			var idNum = parseInt(idNumString.substr(10,2));
			var folderStr = 'images/'+menuId+'/'+idNum+'.txt';

			$( "#contentImg"+idNum ).fadeIn("slow");
		
			
			$.ajax({
				url : folderStr,
				dataType: "text",
				success : function (data) {
					  
					  
					  $( "#contentText"+idNum).fadeIn("slow");
					  $( "#loadingImg"+idNum).remove();
					  //alert(data);
				
					  //alert(idNum+" "+folderStr);
					  $("#contentText"+idNum).html(data);
					  $('html,body').animate({ scrollTop: 0 }, 'fast');
					 
				}
    		});
    		//console.log($(this).height());  
		});
		 
		if(menuIndex == 7){
    	
    			$("#page"+i).css('background-color', 'black');
    
   		 }else if(menuIndex == 8){
			 	
				$("#page"+i).css('background-color', '#ffffff');
			 
		 }else if(menuIndex == 5){
			 	
				$("#page"+i).css('background-color', '#f4f4f4');
			 
		 }else if(menuIndex == 6){
			 	
				$("#page"+i).css('background-color', '#ffffff');
			 
		 }else{
    	
    			$("#page"+i).css('background-color', '#f4f4f4');
    
    	 }
	
	
	}
	$( ".pageMain" ).append("<div class=\"clear\"></div>");
	
	page = $("#pageContent");
	page.swipe({
        triggerOnTouchEnd : true,
        swipeStatus : swipeStatus,
        allowPageScroll:"vertical"
    });
    
   
    
    judgePageShow();

}

function swipeStatus(event, phase, direction, distance, fingers) {
    if(phase=="move" && (direction=="left" || direction=="right")) {
        var duration=0;
		
        if (direction == "left") {
            
			scrollPage((IMG_WIDTH * currentPage) + distance, duration);
        
		} else if (direction == "right") {
            
			scrollPage((IMG_WIDTH * currentPage) - distance, duration);
        }
		
    } else if ( phase == "cancel") {
        
		scrollPage(IMG_WIDTH * currentPage, speed);
    
	} else if ( phase =="end" ) {
        
		if(distance > 100) {
			
            if (direction == "right") {
                previousPage();
            } else if (direction == "left") {
                nextPage();
            }
			
        } else {
            
			scrollPage(IMG_WIDTH * currentPage, speed);
        
		}
    
	}
}

function judgePageShow(){
	
	if(currentPage <= 0){
  		
  		$("#preBtn").hide();
  		currentPage = 0;
  	
  	}else{
  	
  		$("#preBtn").show();
  	}
	
	if(currentPage >= maxImages-1){
  		
  		$("#nextBtn").hide();
  		currentPage = maxImages-1;
  	
  	}else{
  	
  		$("#nextBtn").show();
  	}
	
	
	
}

function previousPage() {
  	
  	currentPage -= 1;
  	
  	if(currentPage <= 0){
  		
  		$("#preBtn").hide();
  		currentPage = 0;
  	
  	}else{
  	
  		$("#preBtn").show();
  	}
    
    judgePageShow();
    scrollPage( IMG_WIDTH * currentPage, speed);
	
	

}

function nextPage() {

	currentPage += 1;
  	
  	if(currentPage >= maxImages-1){
  		
  		$("#nextBtn").hide();
  		currentPage = maxImages-1;
  	
  	}else{
  	
  		$("#nextBtn").show();
  	}

    judgePageShow();
    scrollPage( IMG_WIDTH * currentPage, speed);
	
	

}

function goNext(){
	
	currentPage = 0;
	menuIndex += 1;
	addPage(menuIndex,picNumArr[menuIndex-1]);

}

function scrollPage(distance, duration) {
    
    page.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");
    var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
    page.css("-webkit-transform", "translate3d("+value +"px,0px,0px)");
    setPageHeight();
}

function setPageHeight() {

}