// Endpoints

// Haruhichan #ANIME

var haruhichan = "http://ptp.haruhichan.com/list.php";

/*
	#PARAMETERS
	page = 0 -
	type = TV, Movie
	sort = rank, popularity
	order = asc, desc
	genre = Action, Adventure, Cars, Comedy, Dementia, Demons, Drama, Ecchi, Fantasy, Game, Harem, Historical, Horror, Josei, Kids, Magic, Martial Arts, Mecha, Military, Music, Mystery, Parody, Police, Psychological, Romance, Samurai, School, Sci-Fi, Seinen, Shoujo, Shoujo Ai, Shounen, Shounen Ai, Slice of Life, Space, Sports, Super Power, Supernatural, Thriller, Vampire
	limit = 1 - 50
	type = All
*/

// Trakt #DETAILS

var trakt = "https://api-v2launch.trakt.tv";

/*
	#PARAMETERS
	CLIENT_ID = 'c7e20abc718e46fc75399dd6688afca9ac83cd4519c9cb1fba862b37b8640e89',
	CLIENT_SECRET = '476cf15ed52542c2c8dc502821280aa5f61a012db57f1ed1f479aaf88ab385cb',
*/


// TVShowTime #TV

var tvshowtime = "https://api.tvshowtime.com/v1";

/*
	#PARAMETERS
    API_CLIENT_ID = 'iM2Vxlwr93imH7nwrTEZ',
    API_CLIENT_SECRET = 'ghmK6ueMJjQLHBwsaao1tw3HUF7JVp_GQTwDwhCn';	

*/

// YIFYSubtitles #SUBTITLES

var yifysubtitles = "http://api.yifysubtitles.com/subs/";

/*
	#PARAMETERS
    var baseUrl = '';
    var mirrorUrl = 'http://api.ysubs.com/subs/';
    var prefix = 'http://www.yifysubtitles.com';
    example: http://api.yifysubtitles.com/subs/tt0113243
*/

// YTS.AG #MOVIES

var ytsag = "https://yts.ag/api/v2/list_movies.json";

/*
	#PARAMETERS
	https://yts.ag/api
*/

// YTS.IS #MOVIES

var ytsis = "http://yify.is/index.php/api/v2/list_movies.json";

/*
	#PARAMETERS
	http://yify.is/index.php/api/
*/

// YTS.LI #MOVIES

var ytsli = "http://yts.li/api/v2/list_movies.json";

/*
	#PARAMETERS
	http://yts.li/api/
*/

// EZTV popcorntime.ws #TV

var eztv_popcorntimews = "https://popcorntime.ws/api/eztv/shows/1";

/*
	#PARAMETERS
	shows/1 = list
	show/{IMDB} = details

	sort = 'seeds';
    limit = '50';

*/

// popcornwvnbg7jev #TV

var popcornwvnbg7jev = "https://popcornwvnbg7jev.onion.to/shows/";

/*
	#PARAMETERS
	?nocache
	http:// + .link .city
	shows/1 = list
	show/{IMDB} = details

	sort = 'seeds';
    limit = '50';

*/

// Torrents API #MOVIES

var torrentsapi = "http://api.torrentsapi.com";

/*
	#PARAMETERS
	sort = seeds
	quality = 720p
	page = 1
	http://api.torrentsapi.com/show?imdb=tt4422836
*/

// TorrentProject #MAGNETS

var torrentproject = "https://torrentproject.se/?s=ubuntu+dvd&out=json&orderby=latest";

/*
	#PARAMETERS
	s = ubuntu+dvd
	out = json
	orderby = latest
	filter = 9000
	num = 50
	https://torrentproject.se/api
*/

// GetStrike #MAGNETS

var getstrike = "https://getstrike.net/api/v2/torrents/info/?hashes=B425907E5755031BDA4A8D1B6DCCACA97DA14C04";

/*
	#PARAMETERS	
	hashes = B425907E5755031BDA4A8D1B6DCCACA97DA14C04
	https://getstrike.net/api/v2/torrents/info/?hashes=B425907E5755031BDA4A8D1B6DCCACA97DA14C04
*/

// KAT #MAGNETS

var kat = "https://kat.cr/api/";

/*
	#PARAMETERS
	https://kat.cr/api/
*/

// TorrentAPI #MAGNETS

var torrentapi = "https://torrentapi.org/pubapi_v2.php";

/*
	#PARAMETERS
	token = tixoacmfvk
	mode = search
	search_imdb = tt4158110

	When querying the api please use the app_id parameter with your app name so we can generate statistics for it.
	All responses are in json by default.
	Api endpoint is - https://torrentapi.org/pubapi_v2.php

	To use this api you will need to first to get yourself a token
	get_token=get_token
	Tokens automaticly expire in 15 minutes.
	The api has a 1req/2s limit.

	Listing torrents :
	mode=list&token=xxxx
	Searching torrents : 
	mode=search&search_string=Test%20Search&token=xxxx
	Searching by imdb :
	mode=search&search_imdb=tt123456&token=xxxx
	Searching by tvdb :
	mode=search&search_tvdb=123456&token=xxxx
	Searching by themoviedb :
	mode=search&search_themoviedb=123456&token=xxxx
	DEPRECATED as of 12.09.2015 Searching by tvrage :
	mode=search&search_tvrage=123456&token=xxxx

	Category filtering :
	You can use both categories from the site and strings to filter by category.
	There are 2 categories available in the api by string - tv and movies. 
	mode=search&search_imdb=tt123456&category=tv&token=xxxx
	If you want to filter by categories from the site just append the category parameter which you can see from the search form on https://rarbg.com/torrents.php
	mode=search&search_imdb=tt123456&category=18;41&token=xxxx

	Limiting : 
	limit parameter to anything will limit the results to 25,50 or 100. Default is 25
	mode=search&search_imdb=tt123456&limit=100&token=xxxx

	Sorting :
	sort parameter will sort the results by seeders,leechers,last. Default is last uploaded
	mode=search&search_imdb=tt123456&sort=last&token=xxxx

	Minimum seeders/leechers :
	You can specify the minimum amount of seeders and leechers using the min_seeders and min_leechers parameter.
	mode=search&search_imdb=tt123456&min_seeders=50&token=xxxx
	mode=search&search_imdb=tt123456&min_leechers=50&token=xxxx
	mode=search&search_imdb=tt123456&min_seeders=50&min_leechers=50&token=xxxx

	Result format :
	format parameter will return the results in the requested format - available formats are json and json_extended. Default is json.
	format json_extended returns a lot more info about the torrent.
	mode=search&search_imdb=tt123456&format=json&token=xxxx

	By default the api will return only ranked torrents ( internal ) , scene releases + -rarbg releases + -rartv releases.
	If you want other groups included in the results use the ranked parameter with a value of 0 to get them included.
	mode=search&search_imdb=tt123456&ranked=0&token=xxxx

	All api times are returned in UTC.
	All parameters can be mixed together.

*/

// TheMovieDB #DETAILS

var themoviedb = "https://www.themoviedb.org/";

/*
	#PARAMETERS
	https://www.themoviedb.org/documentation/api/wrappers-libraries
	http://docs.themoviedb.apiary.io/#
	http://tmdb.org
*/

// OMDBAPI #DETAILS

var name = "http://www.omdbapi.com/";

/*
	#PARAMETERS
	http://www.omdbapi.com/
*/

// SIMKL #DETAILS

var name = "https://simkl.com/";

/*
	#PARAMETERS
	https://simkl.com/
	http://docs.simkl.apiary.io/#
*/

// MyAPIFilms #DETAILS

var name = "http://www.myapifilms.com/";

/*
	#PARAMETERS
	http://www.myapifilms.com/
*/

// NETFLIXROULETTE #DETAILS

var name = "http://netflixroulette.net/api/";

/*
	#PARAMETERS
	http://netflixroulette.net/api/
*/

// AnimeTorrentsAPI #ANIME

var animetorrentsapi = "http://api.anime.torrentsapi.com";

/*
	#PARAMETERS
	http://api.anime.torrentsapi.com
*/

// Waifu #ANIME

var waifu = "http://waifu.ca";

/*
	#PARAMETERS
	http://waifu.ca
*/

// Hummingbird #ANIME

var name = "https://hummingbird.me";

/*
	#PARAMETERS
	https://hummingbird.me
*/

// Bakabt #ANIME

var name = "http://bakabt.me";

/*
	#PARAMETERS
	http://bakabt.me
*/

// Name #FUNCTION

// var name = "endpoint";

/*
	#PARAMETERS

*/

/*
	OUT OF SERVICE (?)

	http://yify-torrents.com/api/
	https://popcorni33hocj37.onion.to/
	https://odgoglfi7uddahby.onion.to/
	https://mi2i2dospijuauxa.onion.to/
	https://ptapinjktqtsweq7.onion.to/
	https://eztvapi.re/
	http://eztvapi.co.za/	
*/
