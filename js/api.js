// https://github.com/search?p=7&q=popcorntime+%22%2Fapi%22&ref=searchresults&type=Code&utf8=%E2%9C%93

// https://www.tokyotosho.info/search.php?terms=wanna+be+the+strongest+in+the+world+horriblesub+720&type=0&size_min=&size_max=&username=hs

// Endpoints

// Haruhichan #ANIME

var haruhichan = "http://ptp.haruhichan.com/list.php";

/*
	#PARAMETERS
	https://github.com/phantomware/naughtyPhancast/blob/9ffd6eb25bbcd3b55b21efcdcec0b26405039d60/src/app/lib/providers/haruhichan.js
	page = 0 -
	type = TV, Movie
	sort = rank, popularity
	order = asc, desc
	genre = Action, Adventure, Cars, Comedy, Dementia, Demons, Drama, Ecchi, Fantasy, Game, Harem, Historical, Horror, Josei, Kids, Magic, Martial Arts, Mecha, Military, Music, Mystery, Parody, Police, Psychological, Romance, Samurai, School, Sci-Fi, Seinen, Shoujo, Shoujo Ai, Shounen, Shounen Ai, Slice of Life, Space, Sports, Super Power, Supernatural, Thriller, Vampire
	limit = 1 - 50
	type = All
	example: http://ptp.haruhichan.com/anime.php?id=912 // #DETAILS
*/

// Trakt #DETAILS

var trakt = "https://api-v2launch.trakt.tv";

/*
	#PARAMETERS
	CLIENT_ID = 'c7e20abc718e46fc75399dd6688afca9ac83cd4519c9cb1fba862b37b8640e89',
	CLIENT_SECRET = '476cf15ed52542c2c8dc502821280aa5f61a012db57f1ed1f479aaf88ab385cb',
	var API_ENDPOINT = URI('https://api.trakt.tv/'),
		API_KEY = '515a27ba95fbd83f20690e5c22bceaff0dfbde7c',
		API_PLUGIN_VERSION = AdvSettings.get('traktTvVersion'),
		PT_VERSION = AdvSettings.get('version');

			    	'trakt-api-key': '8e798f3c3ed286081991f459f3d8fcb4e40969a31ce29f1f08e0ac4dbaf49258'
*/


// TVShowTime #DETAILS

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
	http://api.torrentsapi.com/list?
	http://api.torrentsapi.com/list?';//sort=seeds&quality=720p&page=' + params.page + "&count=" + params.limit;
	api.torrentsapi.com/api/v2/list_movies.json
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
	https://github.com/isdampe/kat-api/blob/master/kat-api.js
	https://github.com/sharkone/scrapyard/blob/41f240d35cac2f2d2787008186825d2bc48510a5/scrapyard/kickass.py
	https://kat.cr/api/
	http://kickass.to/json.php?q=terminator&page=1
	https://kat.cr/json.php?q=terminator&page=1 !!!!!!!



    //fingerprint = 'ED:10:DE:CD:19:37:65:7B:FE:71:FC:CB:E3:68:5C:AB:EE:66:01:D0',
    //mirror = 'http://kickass.to/dailydump.txt.gz';
    //apiUrl = 'http://yts.wf/api/',
    fingerprint = 'ED:10:DE:CD:19:37:65:7B:FE:71:FC:CB:E3:68:5C:AB:EE:66:01:D0',
        var params = {};
        params.sort = 'seeds';
        params.limit = '50';

        if (filters.keywords) {
            params.keywords = filters.keywords.replace(/\s/g, '% ')+"+category:movies+lang_id:17";
        }else {
            params.keywords = "category:movies+lang_id:17";
        }

        if (filters.genre) {
            params.genre = filters.genre;
        }

        if (filters.order) {
            var order = 'desc';
            if (filters.order === 1) {
                order = 'asc';
            }
            params.order = order;
        }

        if (filters.sorter && filters.sorter !== 'popularity') {
            params.sort = filters.sorter;
        }

        if (filters.page) {
            params.set = filters.page;
        } else {
            params.set = 1;
        }


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
	http://api.themoviedb.org/3/discover/
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

var waifu = "http://anime.waifu.ca/tvshows/all";

/*
	#PARAMETERS
	http://waifu.ca
	http://anime.waifu.ca/

	Using the URLconf defined in supranime.urls, Django tried these URL patterns, in this order:
	^admin/
	^update$ [name='update']
	^s/all$ [name='showall']
	^s/today$ [name='showtoday']
	^featured$ [name='featured']
	^search/suggest$ [name='search']
	^tvshows/featured$ [name='tvshows_featured']
	^tvshows/newepisodes$ [name='tvshows_newepisodes']
	^tvshows/all$ [name='tvshows_all']
	^tvshows/(?P<id>\d+)$ [name='detail_anime']
	^episodes/(?P<id>\d+)$ [name='detail_title']
	^media/(?P<path>.*)$
	^static\/(?P<path>.*)$
	The current URL, , didn't match any of these.	

	&page=

	example: http://anime.waifu.ca/tvshows/newepisodes
	http://crossorigin.me/http://anime.waifu.ca/tvshows/165 #DETAILS
*/

// Hummingbird #ANIME

var name = "https://hummingbird.me";

/*
	#PARAMETERS
	https://hummingbird.me
	https://github.com/hummingbird-me/hummingbird/wiki/API-v2-Methods
*/

// Apiprivatetorrents #PORN

var apiprivatetorrents = "http://api.apiprivatetorrents.com/movies";

/*
	#PARAMETERS
	http://api.apiprivatetorrents.com/movies?page=2
		https://github.com/phantomware/naughtyPhancast/blob/9ffd6eb25bbcd3b55b21efcdcec0b26405039d60/src/app/lib/providers/tpbm.js
        var params = {
            sort: 'seeds',
            count: 50,
            with_rt_ratings: true
        };

        if (filters.page) {
            params.page = filters.page;
        }

        if (filters.keywords) {
            params.keywords = filters.keywords;
        }

        if (filters.genre) {
            params.genre = TPBMDict[filters.genre];
        }

        if (filters.order === 1) {
            params.order_by = 'asc';
        }

        if (filters.sorter && filters.sorter !== 'popularity') {
            params.sort = filters.sorter.replace(" ","");
        }

        //if (Settings.movies_quality !== 'all') {
        //    params.quality = Settings.movies_quality;
        //}
*/

// Ptapitsxaabevfvk #TV

var name = "https://ptapitsxaabevfvk.onion.to/shows/1";

/*
	#PARAMETERS
	?nocache
	http:// + .link .city
	shows/1 = list
	show/{IMDB} = details

	sort = 'seeds';
    limit = '50';
*/

// Butter #MOVIES

var name = "http://butter.vodo.net/popcorn";

/*
	#PARAMETERS
	https://github.com/butterproject/butter-desktop/blob/master/src/app/lib/providers/vodo.js
	http://butter.vodo.net/popcorn
*/

// Archive.org #MOVIES

var name = "https://archive.org/advancedsearch.php";

/*
	#PARAMETERS
	https://archive.org/advancedsearch.php

*/

// Name #FUNCTION

// var name = "endpoint";

/*
	#PARAMETERS

*/

/*
	OUT OF SERVICE (?)
	http://yify-torrents.com/api/
	https://eztvapi.re/
	https://popcorni33hocj37.onion.to/
	https://odgoglfi7uddahby.onion.to/
	https://mi2i2dospijuauxa.onion.to/
	https://ptapinjktqtsweq7.onion.to/
	https://yts.im/api/
	http://yify-torrents.com/api/
	http://popporn-time.com/api
	http://popcornbxexxf3bu.onion.to/
	http://popcorncouzx5cjn.onion.to/
	http://popcornd6v5duho3.onion.to/
	http://popcorni33hocj37.onion.to/
	http://popcornisgjxlf6f.onion.to/
	http://popcornqbt6ktnfs.onion.to/
	http://popcornwvnbg7jev.onion.to/	
	https://popcorni33hocj37.onion.to/
	https://odgoglfi7uddahby.onion.to/
	https://mi2i2dospijuauxa.onion.to/
	https://ptapinjktqtsweq7.onion.to/
	https://eztvapi.re/
	http://eztvapi.co.za/
	http://tv.ytspt.re/	
	http://api.t4pp.com
	http://ptp.pollee.com/
	https://yts.to/
	https://7aa7xwqtxoft27r2.onion.to/
	        var eztvEndpoints = ['eztvapi.re', 'tv.ytspt.re', 'api.popcorntime.io', 'api.popcorntime.cc', 'http://7aa7xwqtxoft27r2.onion'];
        var ytsEndpoints = ['yts.to', 'yts.io', 'yts.sh', 'http://gm6gttbnl3bjulil.onion'];

    uri: 'https://cloudflare.com/',
    headers: {
        'Host': 'xor.image.yt',
        'User-Agent': 'Mozilla/5.0 (Linux) AppleWebkit/534.30 (KHTML, like Gecko) PT/3.8.0'
    },

	Settings.updateEndpoint = {
	    url: 'https://popcorntime.re/',
	    index: 0,
	    proxies: [{
	        url: 'https://popcorntime.re/',
	        fingerprint: '30:A6:BA:6C:19:A4:D5:C3:5A:E8:F1:56:C6:B4:E1:DC:EF:DD:EC:8C',
	    }, {
	        url: 'https://popcorntime.io/',
	        fingerprint: '30:A6:BA:6C:19:A4:D5:C3:5A:E8:F1:56:C6:B4:E1:DC:EF:DD:EC:8C'
	    }, {
	        url: 'https://popcorntime.cc/',
	        fingerprint: '30:A6:BA:6C:19:A4:D5:C3:5A:E8:F1:56:C6:B4:E1:DC:EF:DD:EC:8C'
	    }, {
	        url: 'https://its.pt/',
	        ssl: false,
	        fingerprint: /301/
	    }]
	};
	// Bakabt #ANIME

	var name = "http://bakabt.me";

	
	//	#PARAMETERS
	//	http://bakabt.me
	

*/
