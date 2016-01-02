$(function () {
	// var tor_url = // ".link .city .to .cab .glass" #ToDo

	var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337&tr=http:\/\/www.siambt.com\/announce.php&tr=http:\/\/bttracker.crunchbanglinux.org:6969\/announce&tr=http:\/\/www.eddie4.nl:6969\/announce&tr=http:\/\/mgtracker.org:2710\/announce";

	// Pagination | Infinite Scrolling
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
	// Pagination | Infinite Scrolling

	// DATASET
	var hash, imdb, magnet, title, rating, poster, genre, background;	
	// DATASET

	var proxy = "http://crossorigin.me/";
	var protocol = "https://";	
	var provider = "ytsag";

	var page_key;

	var sort_key = "&sort_by=";
	var sort_value = "seeds";
	var sort = sort_key+sort_value;
	
	var quality_key ="&quality=";
	var quality_value ="720p";
	var quality = quality_key+quality_value;

	var limit_items_key = "&limit=";
	var limit_items_value = 24; // 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var limit = limit_items_key+limit_items_value;

	var type_key = "&type=";
	var type_value = "movie";
	var type = type_key+type_value;

	function loadMore() {

		// Pagination | Infinite Scrolling
		page_value = localStorage.getItem("pagina");
		page_value = parseInt(page_value);
		page_value = page_value+1;
		var pageToSave = JSON.stringify(page_value)
		localStorage.setItem("pagina", pageToSave);			
		// Pagination | Infinite Scrolling

		

		switch (provider) {
			case "torrentsapi":			protocol = "https://"; endpoint = "api.torrentsapi.com/list?"; 					type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break;
			case "ytsag": 				protocol = "https://"; endpoint = "yts.ag/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break;
			case "ytsis": 				protocol = "https://"; endpoint = "yify.is/index.php/api/v2/list_movies.json?";	type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break;
			case "ytsli": 				protocol = "https://"; endpoint = "yts.li/api/v2/list_movies.json?";			type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break; // NO CORS LOCAL!
			case "eztv_popcorntimews": 	protocol = "https://"; endpoint = "popcorntime.ws/api/eztv/shows/";				type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "haruhichan": 			protocol = "http://";  endpoint = "ptp.haruhichan.com/list.php?";				type_value = "all";	page_key = "page=";		parameters = type; 			  	 break;
			case "popcornwvnbg7jev": 	protocol = "https://"; endpoint = "popcornwvnbg7jev.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "animetorrentsapi": 	protocol = "http://";  endpoint = "api.anime.torrentsapi.com/list?";			type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break;
			case "waifu": 				protocol = "http://";  endpoint = "anime.waifu.ca/tvshows/all?";				type_value = "";	page_key = "page=";		parameters = ""; 				 break;
			case "apiprivatetorrents": 	protocol = "http://";  endpoint = "api.apiprivatetorrents.com/movies";			type_value = "";	page_key = "page=";		parameters = ""; 				 break;
			case "ptapitsxaabevfvk": 	protocol = "https://"; endpoint = "ptapitsxaabevfvk.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "butter": 				protocol = "http://";  endpoint = "butter.vodo.net/popcorn";					type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "torrentsapishows": 	protocol = "https://"; endpoint = "api.torrentsapi.com/shows?cb=";				type_value = "";	page_key = "&page=";	parameters = sort+quality+limit; break;
		}	

		var page = page_key+page_value;

		var api_url = proxy+protocol+endpoint+page+parameters;	

		console.log(api_url);

		$.getJSON(api_url, function (data) {
			console.log(api_url);
			console.log(data.data);
			// GET STATUS DATA
			/*
			#ToDo
			Returned Key	Description	Example
			status	The returned status for the API call, can be either 'ok' or 'error'	ok
			status_message	Either the error message or the successful message	Query was successful
			data	If 'status' is returned as 'ok' the API query results will be inside 'data'	data
			*/
			// GET STATUS DATA

			i = 0;
	
			// JSON DATA
			
			switch (provider) {
				case "torrentsapi": 		json_data = data.MovieList; 	break;
				case "ytsag": 				json_data = data.data.movies; 	break;
				case "ytsis": 				json_data = data.data.movies; 	break;
				case "ytsli": 				json_data = data.data.movies; 	break;
				case "eztv_popcorntimews": 	json_data = data; 				break;
				case "haruhichan": 			json_data = data; 				break;
				case "popcornwvnbg7jev": 	json_data = data; 				break;
				case "animetorrentsapi": 	json_data = data.MovieList; 	break;
				case "waifu": 				json_data = data.data; 			break;
				case "apiprivatetorrents": 	json_data = data.data.movies; 	break;
				case "ptapitsxaabevfvk": 	json_data = data; 				break;
				case "butter": 				json_data = data.downloads; 	break;
				case "torrentsapishows": 	json_data = data.MovieList; 	break;
			}			
	
			// JSON DATA
			$.each(json_data, function (i, item) {
				switch (provider) {
					case "torrentsapi": 		hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			break;
					case "ytsag": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	break;
					case "ytsis": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.medium_cover_image; 	break;
					case "ytsli": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	break;
					case "eztv_popcorntimews": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		break;
					case "haruhichan": 			hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.name; 				rating = ""; 				poster = item.malimg; 				genre = ""; 			background = item.malimg; 				break;
					case "popcornwvnbg7jev": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		break;
					case "animetorrentsapi": 	hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			break;
					case "waifu": 				hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.tvshow.name; 		rating = ""; 				poster = item.tvshow.covers.medium; genre = ""; 			background = item.tvshow.cover_url; 	break;
					case "apiprivatetorrents": 	hash = ""; 						imdb = ""; 				magnet = item.torrents[0].magnet; 											title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = item.genres[0]; background = item.images.backdrops[0]; 	break;
					case "ptapitsxaabevfvk": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		break;
					case "butter": 				hash = ""; 						imdb = item.ImdbCode; 	magnet = item.TorrentUrl; 													title = item.MovieTitleClean; 	rating = item.MovieRating; 	poster = item.CoverImage; 			genre = ""; 			background = item.CoverImage; 			break;
					case "torrentsapishows": 	hash = ""; 						imdb = item.imdb; 		magnet = ""; 																title = item.title; 		  	rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			break;
				}
				catalogue (hash, imdb, magnet, title, rating, poster, genre, background);												
				i++;				
			});	
			// Pagination | Infinite Scrolling
			page=page++;
			// Pagination | Infinite Scrolling
			//$('#movies').append(html);
		});	
	}; //Eof loadMore()		
	// Pagination | Infinite Scrolling		
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		loadMore();
		}
	});
	$(document).ready(function() {
		loadMore();
	});
	// Pagination | Infinite Scrolling
});
