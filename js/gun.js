// JavaScript Document
function DY_scroll(wraper,prev,next,img,speed,or)
	{	
		var wraper = $(wraper);
		var prev = $(prev);
		var next = $(next);
		var img = $(img).find('ul');
		var w = img.find('dl').outerWidth(true);
		var s = speed;
		next.click(function()
							{
								img.animate({'margin-left':-w},function()
																		{
																			img.find('dl').eq(0).appendTo(img);
																			img.css({'margin-left':0});
																			});
								});
		prev.click(function()
							{
								img.find('dl:last').prependTo(img);
								img.css({'margin-left':-w});
								img.animate({'margin-left':0});
								});
		if (or == true)
		{
			ad = setInterval(function() { next.click();},s*2000);
			wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*2000);});
		}
	}
	DY_scroll('.img-scroll','.prev1','.next1','.img-list',3,true);// true为自动播放，不加此参数或false就默认不自动