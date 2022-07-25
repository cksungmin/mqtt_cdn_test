console.log('test test test')
// console.log(mqtt.connect)
// const client = mqtt.connect()
// // const client = mqtt.connect([{ host: 'localhost', port: 1883 }]);
// // const client = mqtt.client()
// // const client = mqtt.MqttClient.connect() // you add a ws:// url here
// // client.subscribe("mqtt/demo")
// console.log(client)

const mqtt = new Paho.MQTT.Client('127.0.0.1',1883,'clientId');
console.log(mqtt)

mqtt.connect({onSuccess:()=>{
        console.log('connect connect')
    }})