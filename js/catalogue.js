$(function () {
	// var tor_url = // ".link .city .to .cab .glass" #ToDo

	var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337&tr=http:\/\/www.siambt.com\/announce.php&tr=http:\/\/bttracker.crunchbanglinux.org:6969\/announce&tr=http:\/\/www.eddie4.nl:6969\/announce&tr=http:\/\/mgtracker.org:2710\/announce";

	// Pagination | Infinite Scrolling
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
	// Pagination | Infinite Scrolling

	// Endpoints

	var proxy = "http://crossorigin.me/";

	var protocol = "https://";	

	var provider = "ytsag";

	switch (provider) {
		case "torrentsapi": protocol = "https://"; break;
		case "ytsag": protocol = "https://"; break;
		case "ytsis": protocol = "https://"; break;
		case "ytsli": protocol = "https://"; break;
		case "eztv_popcorntimews": protocol = "https://"; break;
		case "haruhichan": protocol = "http://"; break;
		case "popcornwvnbg7jev": protocol = "https://"; break;
		case "animetorrentsapi": protocol = "http://"; break;
		case "waifu": protocol = "http://"; break;
		case "apiprivatetorrents": protocol = "http://"; break;
		case "ptapitsxaabevfvk": protocol = "https://"; break;
		case "butter": protocol = "http://"; break;
		case "torrentsapishows": protocol = "https://"; break;
	}

	switch (provider) {
		case "torrentsapi": endpoint = "api.torrentsapi.com/list?"; break;
		case "ytsag": endpoint = "yts.ag/api/v2/list_movies.json?"; break;
		case "ytsis": endpoint = "yify.is/index.php/api/v2/list_movies.json?"; break;
		case "ytsli": endpoint = "yts.li/api/v2/list_movies.json?"; break;
		case "eztv_popcorntimews": endpoint = "popcorntime.ws/api/eztv/shows/"; break;
		case "haruhichan": endpoint = "ptp.haruhichan.com/list.php?"; break;
		case "popcornwvnbg7jev": endpoint = "popcornwvnbg7jev.onion.to/shows/"; break;
		case "animetorrentsapi": endpoint = "api.anime.torrentsapi.com/list?"; break;
		case "waifu": endpoint = "anime.waifu.ca/tvshows/all?"; break;
		case "apiprivatetorrents": endpoint = "api.apiprivatetorrents.com/movies"; break;
		case "ptapitsxaabevfvk": endpoint = "ptapitsxaabevfvk.onion.to/shows/"; break;
		case "butter": endpoint = "butter.vodo.net/popcorn"; break;
		case "torrentsapishows": endpoint = "api.torrentsapi.com/shows?cb="; break;
	}

	var page_key;

	var sort_key = "&sort_by=";
	var sort_value = "seeds";
	
	var quality_key ="&quality=";
	var quality_value ="720p";

	// 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var limit_items_key = "&limit=";
	var limit_items_value = 24;
	var limit = limit_items_key+limit_items_value;

	var type_key = "&type=";
	var type_value = "movie";

	switch (provider) {
		case "torrentsapi": type_value = ""; break;
		case "ytsag": type_value = ""; break;
		case "ytsis": type_value = ""; break;
		case "ytsli": type_value = ""; break;
		case "eztv_popcorntimews": type_value = ""; break;
		case "haruhichan": type_value = "all"; break;
		case "popcornwvnbg7jev": type_value = ""; break;
		case "animetorrentsapi": type_value = ""; break;
		case "waifu": type_value = ""; break;
		case "apiprivatetorrents": type_value = ""; break;
		case "ptapitsxaabevfvk": type_value = ""; break;
		case "butter": type_value = ""; break;		
		case "torrentsapishows": type_value = ""; break;
	}	


	var type = type_key+type_value;

	switch (provider) {
		case "torrentsapi": page_key = "&page="; break;
		case "ytsag": page_key = "&page="; break;
		case "ytsis": page_key = "&page="; break;
		case "ytsli": page_key = "&page="; break;
		case "eztv_popcorntimews": page_key = ""; break;
		case "haruhichan": page_key = "page="; break;
		case "popcornwvnbg7jev": page_key = ""; break;
		case "animetorrentsapi": page_key = "&page="; break;
		case "waifu": page_key = "page="; break;
		case "apiprivatetorrents": page_key = "page="; break;
		case "ptapitsxaabevfvk": page_key = ""; break;
		case "butter": page_key = ""; break;
		case "torrentsapishows": page_key = "&page="; break;
	}	

	var sort = sort_key+sort_value;
	var quality = quality_key+quality_value;

	// Endpoints


	function loadMore() {

		// Pagination | Infinite Scrolling
		var page_value = localStorage.getItem("pagina");
		page_value = parseInt(page_value);
		page_value = page_value+1;
		var pageToSave = JSON.stringify(page_value)
		localStorage.setItem("pagina", pageToSave);			
		// Pagination | Infinite Scrolling

		var page = page_key+page_value;

		switch (provider) {
			case "torrentsapi": parameters = page+sort+quality+limit; break;
			case "ytsag": parameters = page+sort+quality+limit; break;
			case "ytsis": parameters = page+sort+quality+limit; break;
			case "ytsli": parameters = page+sort+quality+limit; break;
			case "eztv_popcorntimews": parameters = page; break;
			case "haruhichan": parameters = page+type; break;
			case "popcornwvnbg7jev": parameters = page; break;
			case "animetorrentsapi": parameters = page+sort+quality+limit; break;
			case "waifu": parameters = page; break;
			case "apiprivatetorrents": parameters = page; break;
			case "ptapitsxaabevfvk": parameters = page; break;
			case "butter": parameters = ""; break;
			case "torrentsapishows": parameters = page+sort+quality+limit; break;
		}		

		var api_url = proxy+protocol+endpoint+parameters;	
		
		// DATASET
		var hash;
		var imdb;
		var magnet;
		var title;
		var rating;
		var poster;
		var genre;
		var background;	
		// DATASET

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
				case "torrentsapi": json_data=data.MovieList; break;
				case "ytsag": json_data=data.data.movies; break;
				case "ytsis": json_data=data.data.movies; break;
				case "ytsli": json_data=data.data.movies; break;
				case "eztv_popcorntimews": json_data=data; break;
				case "haruhichan": json_data=data; break;
				case "popcornwvnbg7jev": json_data=data; break;
				case "animetorrentsapi": json_data=data.MovieList; break;
				case "waifu": json_data=data.data; break;
				case "apiprivatetorrents": json_data=data.data.movies; break;
				case "ptapitsxaabevfvk": json_data=data; break;
				case "butter": json_data=data.downloads; break;
				case "torrentsapishows": json_data=data.MovieList; break;
			}			
	
			// JSON DATA
			$.each(json_data, function (i, item) {
				switch (provider) {
					case "torrentsapi": hash=item.items[0].id; imdb=item.imdb; magnet=item.items[0].torrent_magnet; title=item.title; rating=item.rating; poster=item.poster_med; genre=item.genres[0]; background=item.poster_big; break;
					case "ytsag": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.background_image; break;
					case "ytsis": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.medium_cover_image; break;
					case "ytsli": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.background_image; break;
					case "eztv_popcorntimews": hash=""; imdb=item.imdb_id; magnet=""; title=item.title; rating=""; poster=item.images.poster; genre=""; background=item.images.fanart; break;
					case "haruhichan": hash=""; imdb=item.imdb_id; magnet=""; title=item.name; rating=""; poster=item.malimg; genre=""; background=item.malimg; break;
					case "popcornwvnbg7jev": hash=""; imdb=item.imdb_id; magnet=""; title=item.title; rating=""; poster=item.images.poster; genre=""; background=item.images.fanart; break;
					case "animetorrentsapi": hash=item.items[0].id; imdb=item.imdb; magnet=item.items[0].torrent_magnet; title=item.title; rating=item.rating; poster=item.poster_med; genre=item.genres[0]; background=item.poster_big; break;
					case "waifu": hash=""; imdb=item.imdb_id; magnet=""; title=item.tvshow.name; rating=""; poster=item.tvshow.covers.medium; genre=""; background=item.tvshow.cover_url; break;
					case "apiprivatetorrents": hash=""; imdb=""; magnet=item.torrents[0].magnet; title=item.title; rating=""; poster=item.images.poster; genre=item.genres[0]; background=item.images.backdrops[0]; break;
					case "ptapitsxaabevfvk": hash=""; imdb=item.imdb_id; magnet=""; title=item.title; rating=""; poster=item.images.poster; genre=""; background=item.images.fanart; break;
					case "butter": hash=""; imdb=item.ImdbCode; magnet=item.TorrentUrl; title=item.MovieTitleClean; rating=item.MovieRating; poster=item.CoverImage; genre=""; background=item.CoverImage; break;
					case "torrentsapishows": hash=""; imdb=item.imdb; magnet=""; title=item.title; rating=item.rating; poster=item.poster_med; genre=item.genres[0]; background=item.poster_big; break;
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
