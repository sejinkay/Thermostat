$(document).ready(function() {
var thermostat = new Thermostat();
 $("#currentTemp").text(thermostat.temp);
 $("#PSMstatus").text(thermostat.status);
 $('#increase').click(function() {
   thermostat.increase();
   $('#currentTemp').text(thermostat.temp);
 });
 $('#decrease').click(function() {
   thermostat.decrease();
   $('#currentTemp').text(thermostat.temp);
 });
 $('#PSM_ON').click(function() {
   thermostat.switchOn();
   $('#PSMstatus').text(thermostat.status);
 });
 $('#PSM_OFF').click(function() {
   thermostat.switchOff();
   $('#PSMstatus').text(thermostat.status);
 });
 $('#reset').click(function() {
   thermostat.reset();
   $('#currentTemp').text(thermostat.temp);
 });
 $.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
   $('#londonWeather').text(data.weather[0].main);
 });
 $.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
   $('#londonWeatherTemp').text(data.main.temp);
 });
});
