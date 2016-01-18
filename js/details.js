function f_play_detalle(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value) {

    var content_key;
    var parameters;

	switch (provider) {
		case "torrentsapi":			protocol = "https://"; endpoint = "api.torrentsapi.com/list?"; 						content_key = ""; 			break;
		case "ytsag": 				protocol = "https://"; endpoint = "yts.ag/api/v2/movie_details.json?";				content_key = "movie_id="; 	parameters = "&with_images=true&with_cast=true";	break;
		case "ytsis": 				protocol = "https://"; endpoint = "yify.is/index.php/api/v2/movie_details.json?";	content_key = "movie_id="; 	parameters = "&with_images=true&with_cast=true";	break;
		case "ytsli": 				protocol = "https://"; endpoint = "yts.li/api/v2/movie_details.json?";				content_key = "movie_id="; 	parameters = "&with_images=true&with_cast=true";	break;
		case "eztv_popcorntimews": 	protocol = "https://"; endpoint = "popcorntime.ws/api/eztv/shows/";					content_key = ""; 			break;
		case "haruhichan": 			protocol = "http://";  endpoint = "ptp.haruhichan.com/list.php?";					content_key = ""; 			break;
		case "popcornwvnbg7jev": 	protocol = "https://"; endpoint = "popcornwvnbg7jev.onion.to/shows/";				content_key = ""; 			break;
		case "animetorrentsapi": 	protocol = "http://";  endpoint = "api.anime.torrentsapi.com/list?";				content_key = ""; 			break;
		case "waifu": 				protocol = "http://";  endpoint = "anime.waifu.ca/tvshows/all?";					content_key = ""; 			break;
		case "apiprivatetorrents": 	protocol = "http://";  endpoint = "api.apiprivatetorrents.com/movies";				content_key = ""; 			break;
		case "ptapitsxaabevfvk": 	protocol = "https://"; endpoint = "ptapitsxaabevfvk.onion.to/shows/";				content_key = ""; 			break;
		case "butter": 				protocol = "http://";  endpoint = "butter.vodo.net/popcorn";						content_key = ""; 			break;
		case "torrentsapishows": 	protocol = "https://"; endpoint = "api.torrentsapi.com/shows?cb=";					content_key = ""; 			break;
	}

	var content = content_key+content_value;

	var details_url = proxy+protocol+endpoint+content+parameters;
	console.log(details_url);
    $.get(details_url, function (data) {
        console.log(data);
        var repeat = function (s, n, d) {
            return --n ? s + (d || "") + repeat(s, n, d) : "" + s;
        };
        movie_rating_star = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        movie_rating_star_empty = '<span class="glyphicon glyphicon-star" aria-hidden="true" style="color:#000;"></span>';
        movie_rating = Math.round(rating);
        var html = "";
        

        html += '<i class="fa fa-angle-left fa-2x" style="font-size: 1.5em;"></i>';
        
        // html += '<img id="close" src="http://i.imgur.com/P7Svq.png" style="position: fixed; z-index: 100000; top: 0%; right: 0%;" onclick="closeThis_detalle(); unscrollDetails();" />';

        // #ToDo: use the screenshots id4.replace("background.jpg", "large-screenshot1.jpg")
        html += '<div id="bg-yts" class="container-fluid" style="background-image: url('+background+');">';
        // html += '<img id="bg-yts-play" src="http://i.imgur.com/UDD2Qzj.png" onclick="f_play(&#39;'+hash+'&#39;,&#39;'+imdb+'&#39;)">';
        html += '<div id="head-detail" class="row">';
        html += '<div id="title-yts" class="row">';
        html += '<p class="title-yts-p">'+title+'</p>';
        html += '<div class="title-yts-p">';
        //html += repeat(movie_rating_star, movie_rating)+repeat(movie_rating_star_empty, (10 - movie_rating));
        html += '</div>';
        html += '<p class="little-title-p" style="margin-top: 20px;">';
        html += '<span style="background-color: rgba(1,59,166,0.75);padding: 7px;">';
        html +=  '('+data.data.movie.year+') ['+data.data.movie.mpa_rating+'] '+data.data.movie.runtime+' min. - '+genre; // '[R] 95 min - Action | Crime | Sci-Fi - 21 Septermber 2012 (USA)';
        html += '</span>';
        html += '</p>';
        html += '</div>';
        html += '<div id="poster-yts" class="col-md-4">';
        html += '<img src="'+poster+'" onclick="f_play(&#39;'+hash+'&#39;,&#39;'+imdb+'&#39;)">';
        html += '</div>';

        html += '<div class="col-md-8">';
        html += '</div>';
        html += '</div>';
        html += '</div>';    

		html += '<div class="container-fluid">';
		html += '<div class="row" style="width: 100%;max-width: 1280px;margin: 0 auto;top: 150px;position: relative;">';
		html += '<div class="col-md-4">';
		html += '</div>';    		
		html += '<div class="col-md-8">';
		html += '<p style="text-align:justify;">'+data.data.movie.description_full+'</p>';    		
		html += '</div>';    		
		html += '</div>';    		
		html += '<div class="row" style="width: 100%;max-width: 1280px;margin: 0 auto;top: 250px;position: relative;">';
		html += '<div class="col-md-12">';
        html += '<iframe width="100%" height="500" src="https://www.youtube.com/embed/'+data.data.movie.yt_trailer_code+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        html += '</div>';    
		html += '<div class="col-md-4">';
        html += '<p>'+data.status+'</p><br><p>'+data.status_message+'</p><br><p>'+data.data.movie.id+'</p><br><p>'+data.data.movie.url+'</p><br><p>'+data.data.movie.imdb_code+'</p><br><p>'+data.data.movie.title+'</p><br><p>'+data.data.movie.title_long+'</p><br><p>'+data.data.movie.slug+'</p><br><p>'+data.data.movie.year+'</p><br><p>'+data.data.movie.rating+'</p><br><p>'+data.data.movie.runtime+'</p><br><p>'+data.data.movie.genres[0]+'</p><br><p>'+data.data.movie.language+'</p><br><p>'+data.data.movie.mpa_rating+'</p><br><p>'+data.data.movie.download_count+'</p><br><p>'+data.data.movie.like_count+'</p><br><p>'+data.data.movie.rt_critics_score+'</p><br><p>'+data.data.movie.rt_critics_rating+'</p><br><p>'+data.data.movie.rt_audience_score+'</p><br><p>'+data.data.movie.rt_audience_rating+'</p><br><p>'+data.data.movie.description_intro+'</p><br><p>'+data.data.movie.description_full+'</p><br><p>'+data.data.movie.yt_trailer_code+'</p><br><p>'+data.data.movie.date_uploaded+'</p><br><p>'+data.data.movie.date_uploaded_unix+'</p><div class="movie-box movie-box-'+data.data.movie.genres[0]+'" style="background-image:url('+data.data.movie.background_image+');background-position:center;background-size:cover;background-repeat:no-repeat;position:relative;float:left;"></div>';
        html += data.data.movie.torrents[0].url;
        html += '<br>';
        html += data.data.movie.torrents[0].hash;
        html += '<br>';
        html += data.data.movie.torrents[0].quality;
        html += '<br>';
        html += data.data.movie.torrents[0].resolution;
        html += '<br>';
        html += data.data.movie.torrents[0].framerate;
        html += '<br>';
        html += data.data.movie.torrents[0].seeds;
        html += '<br>';
        html += data.data.movie.torrents[0].peers;
        html += '<br>';
        html += data.data.movie.torrents[0].size ;
        html += '<br>';
        html += data.data.movie.torrents[0].size_bytes;
        html += '<br>';
        html += data.data.movie.torrents[0].download_count;
        html += '<br>';
        html += data.data.movie.torrents[0].date_uploaded;
        html += '<br>';
        html += data.data.movie.torrents[0].date_uploaded_unix;
        html += '<br>';
        html += data.data.movie.torrents[1];
        html += '<br>';
        html += data.data.movie.torrents[1].url;
        html += '<br>';
        html += data.data.movie.torrents[1].hash;
        html += '<br>';
        html += data.data.movie.torrents[1].quality;
        html += '<br>';
        html += data.data.movie.torrents[1].resolution;
        html += '<br>';
        html += data.data.movie.torrents[1].framerate;
        html += '<br>';
        html += data.data.movie.torrents[1].seeds;
        html += '<br>';
        html += data.data.movie.torrents[1].peers;
        html += '<br>';
        html += data.data.movie.torrents[1].size;
        html += '<br>';
        html += data.data.movie.torrents[1].size_bytes;
        html += '<br>';
        html += data.data.movie.torrents[1].download_count;
        html += '<br>';
        html += data.data.movie.torrents[1].date_uploaded;
        html += '<br>';
        html += data.data.movie.torrents[1].date_uploaded_unix;
        html += '</div>';

        html += '<div class="col-md-8">';
        html += '</div>';
		html += '</div>'; 
		html += '</div>'; 







        $("#images_detalle").html(html);        
        $("#fullscreen_detail").attr('class','fullscreen_detail_in');       
    });
};