$(function () {
	
	// Pagination | Infinite Scrolling
	var limit_items = 24; // 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
	// Pagination | Infinite Scrolling

	// Endpoints

	var proxy = "http://crossorigin.me/";

	var protocol = "http://"

	var endpoint = "api.torrentsapi.com/list?";
	
	var sort_key = "sort";
	var sort_value = "seeds";
	
	var quality_key ="quality";
	var quality_value ="720p";

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

		var parameters = sort+quality+page;

		var api_url = proxy+protocol+endpoint+parameters;	
		
		console.log(api_url);	

		$.getJSON(api_url, function (data) {

			i = 0;
			var html = "";
	
			// JSON DATA
	
			var json_data = data.MovieList;			
	
			// JSON DATA

			$.each(json_data, function (i, item) {
				if (item.items[0] === undefined) {
				}
				else {
					var hash = item.items[0].id;
					var imdb = item.imdb;
					var magnet = item.items[0].torrent_magnet;
					var title = item.title;
					var rating = item.rating;
					var poster = item.poster_med;
					var genre = item.genres[0];
					var background = item.poster_big;

					html+='<div id="movie-box-'+'" class="movie-box movie-box-'+genre+' col-lg-2 col-md-3 col-sm-6 col-xs-12" style="position:relative;float:left;">';
					html+='<div style="width: 100%; height: 330px; position: absolute;left: 0px; top: 0px; -webkit-filter: blur(3px); -moz-filter: blur(3px); -o-filter: blur(3px); -ms-filter: blur(3px); filter: blur(3px); background-image:url(http://crossorigin.me/'+background+'); background-position: center; background-size: cover;  background-repeat: no-repeat; -webkit-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); -moz-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1);"></div>';
					html+='<a href="'+magnet+'">';
					html+='<img id="img-movie-box-'+hash+'" class="hover-luz" title="'+title+'" alt="'+title+'" src="'+poster+'" style="width: 100%; max-width: 180px; height: 270px; position: relative;" onmouseover="hoverHash(&#39;'+imdb+'&#39;)" onmouseout="outHash(&#39;'+imdb+'&#39;)" onclick="f_play(&#39;'+hash+'&#39;,&#39;'+imdb+'&#39;,&#39;'+poster+'&#39;,&#39;'+background+'&#39;,&#39;'+rating+'&#39;); scrollDetails(&#39;'+hash+'&#39;);"/>';
					html+='<div id="movie-rating-star-'+imdb+'" class="movie_rating_star"></div></div>';
					html+='</a>';

					$.get("http://www.omdbapi.com/?i="+imdb+"&plot=full&r=json", function (data) {
						movie_rating = Math.round(data.imdbRating);
						movie_rating_star = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
						movie_rating_star_empty = '<span class="glyphicon glyphicon-star" aria-hidden="true" style="color:#000;"></span>';
						html_rating = movie_rating_star.repeat(movie_rating)+movie_rating_star_empty.repeat(10 - movie_rating);
						$("#movie-rating-star-"+data.imdbID).html(html_rating);
					});
				}													
				i++;				
			});	
			// Pagination | Infinite Scrolling
			page=page++;
			// Pagination | Infinite Scrolling
			$('#movies').append(html);
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
