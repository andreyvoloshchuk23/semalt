window.onload = function(){
	function scrollImg(){
		var block = document.getElementsByClassName('scroll')[0],
				img = document.getElementsByClassName('scroll__img')[0];
		block.addEventListener('mouseover', function(){
			var scrollTo = block.clientHeight - img.clientHeight;
			img.style.transform = 'translateY(' + scrollTo + 'px)'; 
		});
		block.addEventListener('mouseout', function(){
			img.style.transform = 'translateY(0)';
		});
	};
	function hoverItem(){
		var description = document.getElementsByClassName('team__descr')[0],
				team = document.getElementsByClassName('team')[0];
		team.addEventListener('mouseover', function(){
			description.style.opacity = '1';
		});
		team.addEventListener('mouseout', function(){
			description.style.opacity = '0';
		});		
	};
	scrollImg();
	hoverItem();
};