$(function () {

	var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337";

	// Pagination | Infinite Scrolling
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
	// Pagination | Infinite Scrolling

	// Endpoints

	var proxy = "http://crossorigin.me/";

	var protocol = "https://";

	var endpoint = "ytsag";
	switch (endpoint) {
		case "torrentsapi": endpoint = "api.torrentsapi.com/list?"; break;
		case "ytsag": endpoint = "yts.ag/api/v2/list_movies.json?"; break;
		case "ytsis": endpoint = "yify.is/index.php/api/v2/list_movies.json?"; break;
		case "ytsli": endpoint = "yts.li/api/v2/list_movies.json?"; break;

		// default: endpoint = "";
	}

	var sort_key = "&sort_by=";
	var sort_value = "seeds";
	
	var quality_key ="&quality=";
	var quality_value ="720p";

	// 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var limit_items_key = "&limit=";
	var limit_items_value = 24;
	var limit = limit_items_key+limit_items_value;

	var page_key = "&page=";

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

		var parameters = sort+quality+limit+page;

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
	
			var json_data_provider = "ytsag";
			
			switch (json_data_provider) {
				case "torrentsapi": json_data=data.MovieList; break;
				case "ytsag": json_data=data.data.movies; break;
				case "ytsis": json_data=data.data.movies; break;
				case "ytsli": json_data=data.data.movies; break;
				// default: json_data = "";
			}			
	
			// JSON DATA
			$.each(json_data, function (i, item) {
				//console.log(item.items[0]);
				var provider_name = "ytsag";
				switch (provider_name) {
					case "torrentsapi": hash=item.items[0].id; imdb=item.imdb; magnet=item.items[0].torrent_magnet; title=item.title; rating=item.rating; poster=item.poster_med; genre=item.genres[0]; background=item.poster_big; break;
					case "ytsag": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.background_image; break;
					case "ytsis": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.medium_cover_image; break;
					case "ytsli": hash=item.torrents[0].hash; imdb=item.imdb_code; magnet="magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; title=item.title; rating=item.rating; poster=item.medium_cover_image; genre=item.genres[0]; background=item.background_image; break;
					// default: provider = "";
				}				

				if (provider_name === "torrentsapi") {
					if (item.items[0] === undefined) {
					}
					else {
						catalogue (hash, imdb, magnet, title, rating, poster, genre, background);
					}	
				}
				else {
					catalogue (hash, imdb, magnet, title, rating, poster, genre, background)
				};												
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
