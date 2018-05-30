function unlock() {
	var pubnub = new PubNub({
	subscribeKey: 'Enter your subscribe key here',
    	publishKey: 'Enter your publish key here',
    	authKey: 'Valid_key'
});

pubnub.publish({
    message: 'Unlock',
    channel: 'RP'
}, 
function (status, response) {
    if (status.error) {
    	var elems = document.getElementsByClassName('warning');
		for (var i = 0;i < elems.length;i += 1){
  			elems[i].style.display = 'block';
		}
		document.getElementsByClassName("btn").value = "Try Again";
        // handle error
        console.log(status);
    } else {
    	document.getElementById('lockImage').src = 'Unlock.png';
        console.log("Message Published w/ timetoken", response.timetoken);
    }
});
}
