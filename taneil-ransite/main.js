var randomGifimg= ["http://www.mariomayhem.com/downloads/wallpapers/3/nsmb_wp3_1280.jpg","http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_SuperSmashBrosForWiiU.jpg","http://zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg","http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_DonkeyKong.jpg","https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-PCSE00521_00-TETRISGAME000000/1496156416000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100","https://i.ytimg.com/vi/a3o_ZKWi-OU/maxresdefault.jpg","http://www.zelda.com/hyrule-warriors/img/gallery/wallpapers/downloads/wp1_1920x1080.jpg", ""];
var count = 0;

$(document).ready(function (){
   changeSubtitle();
});

function changeSubtitle() {
   setInterval(function () {
       if (count < randomGifimg.length - 1) {
           $("#randomimg").attr("src", randomGifimg[count]);
           count++;
       } else {
           $("#subtitle").attr("src", randomGifimg[randomGifimg.length - 1]);
           count = 0;
       }
   }, 3000);
}