function unlock() {
	var pubnub = new PubNub({
    subscribeKey: 'sub-c-a1ad7926-5e0a-11e8-8ebf-f686a6d93a6b',
    publishKey: 'pub-c-563cbabc-a399-4a76-830a-468a698efd4d',
    authKey: 'invalid_key' 
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
        console.log(status);
    } else {
        console.log("Message Published w/ timetoken", response.timetoken);
    }
});
}