$.fn.pressEnter = function(fn) {  
  
    return this.each(function() {  
        $(this).bind('enterPress', fn);
        $(this).keyup(function(e){
            if(e.keyCode == 13)
            {
              $(this).trigger("enterPress");
              console.log("algo");
            }
        })
    });  
 }; 


$('#submit').pressEnter(function(){
	$('#movies').html("");

	var search = $("#submit").val();

	location.href = "?q=" + search;
		
		/*
	
*/
	return false;
});
var search_parameter = getUrlParameter('q');
$.getJSON("http://crossorigin.me/https://yts.ag/api/v2/list_movies.json?query_term="+search_parameter, function (data) {
	$('#movies').html("");

	i = 0;
		var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337&tr=http:\/\/www.siambt.com\/announce.php&tr=http:\/\/bttracker.crunchbanglinux.org:6969\/announce&tr=http:\/\/www.eddie4.nl:6969\/announce&tr=http:\/\/mgtracker.org:2710\/announce";
	json_data = data.data.movies;

	// JSON DATA
	$.each(json_data, function (i, item) {
		hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	content_value = item.id;
		catalogue (hash, imdb, magnet, title, rating, poster, genre, background, /*api_url, provider, proxy,*/ content_value);												
		i++;				
	});	
	// Pagination | Infinite Scrolling
	//page=page++;
	// Pagination | Infinite Scrolling
	//$('#movies').append(html);

});	
