function icon_bg(){
	var iconBg = $('.icon-bg');
	var iconArray = ['calendar','clock',
	'location',
	'phone',
	'trophy',
	'alert',
	'broadcast',
	'organization',
	'network',
	'comments',
	'comment',
	'map-streamline-user',
	'check',
	'person',
	'milestone',
	'android',
	'share',
	'data-science',
	'help',
	'voice',
	'bulb',
	'like',
	'tweak',
	'map'

	];
	var arraySize=iconArray.length;
	for (i = 1; i < arraySize; i++) { 
		var randomNumber = Math.floor(Math.random()*arraySize);
		iconBg.append('<i class="fi-'+iconArray[randomNumber]+'" style="font-size:'+Math.floor((Math.random() * 3) + 1.75)+'em; padding-top:'+Math.floor((Math.random() * 2) + 0.25)+'em;"></i>');
		iconArray.splice(randomNumber, 1);
	}
	console.log('success');
}



function set_icons(){
	//#4fb6f7
	$('.lightblue')[0].style.background="#fff";
	$('.lightblue')[0].style.opacity="0.6";
	$('.midblue')[0].style.background="#fff";
	$('.lightblue')[0].style.opacity="0.7";
	$('.darkblue')[0].style.background="#fff";
	$('.lightblue')[0].style.opacity="0.5";
	//$('.lightblue')[0].style.backgroundImage="url('../assets/images/header/1x.jpg')";
	//$('.midblue')[0].style.backgroundImage="url('../assets/images/header/2x.jpg')";
	//$('.darkblue')[0].style.backgroundImage="url('../assets/images/header/3x.jpg')";
}

function initialize(){
	set_header();
	set_icons();
}