//This software is created by TagomeS
//copyright © TagomeS 2018
var SteamUser = require('steam-user');
var SteamTotp =require('steam-totp');
var user = new SteamUser();

user.logOn({
    accountName: "", //account name 
	password: "", //password
    oneFactorCode: SteamTotp.getAuthCode("") //don't write anything here
});
user.on('webSession', function() {
    console.log('Logged in!');
    user.setPersona(SteamUser.Steam.EPersonaState.Online)
    user.gamesPlayed([730]); //gameid 
});



