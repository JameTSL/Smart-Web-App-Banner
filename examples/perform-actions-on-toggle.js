$('#smartWebBanner').on('swb:shown',function(){
	alert('Banner was shown');
});
$('#smartWebBanner').on('swb:closed',function(){
	alert('Banner was closed');
});
$('#smartWebBanner').on('swb:instructions-shown',function(){
	alert('Save to homescreen instructions are now shown');
});
$('#smartWebBanner').on('swb:instructions-closed',function(){
	alert('Save to homescreen instructions are now closed');
});