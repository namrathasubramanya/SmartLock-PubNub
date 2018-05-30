 var pubnub = new PubNub({
    subscribeKey: 'sub-c-a1ad7926-5e0a-11e8-8ebf-f686a6d93a6b',
    publishKey: 'pub-c-563cbabc-a399-4a76-830a-468a698efd4d',
    secretKey: 'sec-c-MzAwZGRhMmUtZjEyNC00MzZjLWE3NmMtYjhhNDlmMGJjOWI0'
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
