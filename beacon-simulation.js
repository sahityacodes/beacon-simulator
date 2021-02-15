var bleno = require('bleno');
const { v4: uuidv4 } = require('uuid');

console.log('bleno - iBeacon');


bleno.on('stateChange', function (state) {
  console.log('on -> stateChange: ' + state);
  if (bleno.state === 'poweredOn') {
    bleno.startAdvertisingIBeacon(uuidv4(), 0, 0,0);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function (error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));
});

bleno.on('advertisingStop', function () {
  console.log('on -> advertisingStop');
});