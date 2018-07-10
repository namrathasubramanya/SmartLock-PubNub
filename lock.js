 var pubnub = new PubNub({
    subscribeKey: 'ENTER_YOUR_SUBSCRIBE_KEY',
    publishKey: 'ENTER_YOUR_PUBLISH_KEY',
    secretKey: 'ENTER_YOUR_SECRET_KEY'
});

pubnub.grant(
    {
        channels: ["test"],
        authKeys: ["Auth_Test"], 
        ttl: 60,
        read: true,
        write: true
    },
    function (status) {
        console.log(status);
    }
);
