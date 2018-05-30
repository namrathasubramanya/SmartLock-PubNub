from pubnub.callbacks import SubscribeCallback
from pubnub.enums import PNStatusCategory
from pubnub.pnconfiguration import PNConfiguration
from pubnub.pubnub import PubNub
 
pnconfig = PNConfiguration()
 
pnconfig.subscribe_key = 'sub-c-a1ad7926-5e0a-11e8-8ebf-f686a6d93a6b'
pnconfig.publish_key = 'pub-c-563cbabc-a399-4a76-830a-468a698efd4d'
pnconfig.secret_key = 'sec-c-MzAwZGRhMmUtZjEyNC00MzZjLWE3NmMtYjhhNDlmMGJjOWI0'
 
pubnub = PubNub(pnconfig)
 
 
def my_publish_callback(envelope, status):
    if not status.is_error():
        pass
    else:
        pass
 
 
class MySubscribeCallback(SubscribeCallback):
    def presence(self, pubnub, presence):
        pass
 
    def status(self, pubnub, status):
        if status.category == PNStatusCategory.PNUnexpectedDisconnectCategory:
            pass
        if status.category == PNStatusCategory.PNConnectedCategory:
            pubnub.grant().read(True).write(True).channels('RP').auth_keys('Valid_key').ttl(2).sync()
            # pubnub.publish().channel('test').message("hello").async(my_publish_callback)
        if status.category == PNStatusCategory.PNReconnectedCategory:
            pass
        if status.category == PNStatusCategory.PNDecryptionErrorCategory:
            pass
 
    def message(self, pubnub, message):
        pass
 
 
pubnub.add_listener(MySubscribeCallback())
pubnub.subscribe().channels('Rasp').execute()
