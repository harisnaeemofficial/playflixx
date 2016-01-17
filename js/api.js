// https://github.com/search?p=7&q=popcorntime+%22%2Fapi%22&ref=searchresults&type=Code&utf8=%E2%9C%93

// https://www.tokyotosho.info/search.php?terms=wanna+be+the+strongest+in+the+world+horriblesub+720&type=0&size_min=&size_max=&username=hs

// Endpoints

// Haruhichan #ANIME

https://bundles.bittorrent.com/bundles/love-stories-fatalgroove-edm-mix



// VIMEO #MOVIES #TV

var vimeo = "https://developer.vimeo.com/api/";

/*
	#PARAMETERS
	https://developer.vimeo.com/api/

*/

// TEDFLIX #TED

var tedflix = "https://api.ted.com/v1/playlists/11/talks/1164.json?api-key=qhzk7c4fuztg8zmenbk6uvww";

/*
	#PARAMETERS
	keys! 2pmdrang2748qcwp7ymp2ukk / qhzk7c4fuztg8zmenbk6uvww / whzwkput9cms8ym6ze35e7aq
	http://developer.ted.com/io-docs
	http://developer.ted.com/API_Docs

*/


// FANTART #DETAILS

var name = "http://webservice.fanart.tv/v3/tv/289590?api_key=da65baa3206006082e778ddbbb0e1a38";

/*
	#PARAMETERS
	http://webservice.fanart.tv/v3/tv/289590?api_key=da65baa3206006082e778ddbbb0e1a38
	http://webservice.fanart.tv/v3/movies/tt3659388?api_key=da65baa3206006082e778ddbbb0e1a38
	http://docs.fanarttv.apiary.io/#

*/

// THETVDB #DETAILS

var name = "http://thetvdb.com/api/41277F23AA12DE38/series/281662/en.xml";

/*
	#PARAMETERS
	http://thetvdb.com/api/41277F23AA12DE38/series/281662/en.xml
	http://thetvdb.com/?tab=seriesfanart&id=281662
	http://thetvdb.com/banners/fanart/original/281662-16.jpg
	http://thetvdb.com/?tab=seriesfanart&id=289590

	_APIKEY = '41277F23AA12DE38'
_GET_SERIES = 'http://thetvdb.com/api/{apikey}/series/{id}/en.xml'
_GET_EPISODE = 'http://thetvdb.com/api/{apikey}/series/{id}/default/{season}/{episode}/en.xml'
_SEARCH_SERIES = 'http://thetvdb.com/api/GetSeries.php'
_GET_BY_ID = 'http://thetvdb.com/api/GetSeriesByRemoteID.php'
_GRAPHICS = 'http://thetvdb.com/banners/'

*/

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
	https://rarbg.com/pubapi/apidocs.txt
	https://rarbg.to/pubapi/apidocs.txt
	https://torrentapi.org/apidocs_v2.txt
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



// t411 #ANIME

var t411 = "http://api.t411.in/";

/*
	#PARAMETERS
	https://api.t411.me/
t411 API Documentation

Authorization

Retrieve user id and token (ttl=90days):


        POST:
            /auth/
            username=myname
            password=secret
        RESULT:
        {
            token: 12345:123:ASDZXCQWEPOILKJMNB
        }
        ERROR:
        {
            error: "User not found",
            code: 101
        }
    

  
  Enviar
All other requests requires the Authorization header:


        Authorization: 12345:123:QWEASDZXCIOPJKLBNM
    
Copy and paste your token from previously request (this needed for all other examples)

Token: 
6485819:182:5274bc34840abd5c9e19e7d6df1d4f7c
Errors

User Errors

User not found
Account is not confirmed
Account is disabled
Account disabled due to hacks and cheats
Account disabled by administrator
Authorization limit reached
Wrong Password
Token Errors

Token has expired. Please login
Invalid token
Torrent Errors

Torrent not found
Torrent file not found
Torrent is banned
Torrent is hidden
Bookmarks

Bookmark not found
Duplicate bookmark record
Can't save bookmark. Internal server error
Categories

Category not found
Users

Retrieve profile


        GET:
            /users/profile/{id}
        RESULT:
        {
            "username":"Username",
            "gender":"Male",
            "age":"0",
            "avatar":"\/\/images\/avatar\/123\/456123_Username.gif?34551",
            "downloaded":"10814091744",
            "uploaded":"75162042368"
        }
    

/users/profile/447571
  Enviar
Torrents

Categories

Get categories tree


        GET:
            /categories/tree/
        RESULT:
        {
            "12":{              // category ID
                "id":"12",      // category ID, again
                "pid":"0",      // parent category ID
                "name":"video", // category name
                "cats": {
                    "13":{"id":"13","pid":"12","name":"films"},    // sub category #13
                    "14":{"id":"14","pid":"12","name":"cartoons"}  // sub category #14
                }
            },
            "15":{...}
        }
    

/categories/tree
  Enviar
Terms

Get list of all terms linked to categories


        GET:
            /terms/tree/
        RESULT:
        {
            "12":{              // category ID
                "11":{          // term type ID
                    "type":"Application - Genre", // term type internal name
                    "mode":"single",              // term type mode - single or multi
                    "terms":{
                        "123":"Antivirus",        // term ID and name
                        "345":"Torrent clients"
                    }
                }
            },
            "15":{...}
        }
    

/terms/tree
  Enviar
Search

Simple search by all categories


        GET:
            /torrents/search/{query}
        RESULT:
        {
            "query":"avatar"
            "total":2,
            "offset":0,
            "limit":100,
            "torrents":[
                {
                    "id":123123,
                    "name":"Avatar",
                    "category":"321",
                    "seeders":"11",
                    "leechers":"2",
                    "comments":"8",
                    "isVerified":"1",
                    "added":"2013-01-15 16:14:14",
                    "size":"2670809119",
                    "times_completed":"1256",
                    "owner":"7589510",
                    "categoryname":"Animation",
                    "categoryimage":"t411-animation.png",
                    "username":"MegaUsername",
                    "privacy":"normal"
                },
                {...}
            ]
        }


    

/torrents/search/avatar
  Enviar
Set category ID


/torrents/search/avatar&cid=246
  Enviar
Get third page with limit by 5 torrents per page


        GET:
            /torrents/search/{query}?offset=10&limit=5
    

/torrents/search/avatar&offset=10&limit=5
  Enviar
Get search by terms (where 7 is term type ID)


        GET:
            /torrents/search/{query}?cat=631&term[7][]=15&term[7][]=16
    
One term search


/torrents/search/avatar&cat=631&term[7][]=15
  Enviar
Two term search


/torrents/search/avatar&cat=631&term[7][]=15&term[7][]=16
  Enviar
Details


        GET:
            /torrents/details/{id}
        RESULT:
        {
            "id":123,
            "name":"Very scary movie",
            "rewriteName":"very-scary-movie",
            "category":12,
            "categoryName":"Movie",
            "terms":{
                "video quality":"1080p"
            }
        }
    

/torrents/details/50096
  Enviar
Download


        GET:
            /torrents/download/{id}
        RESULT:
            ... file
    

/torrents/download/50096
  Enviar
Top 100


/torrents/top/100
  Enviar
Top Today


/torrents/top/today
  Enviar
Top Week


/torrents/top/week
  Enviar
Top Month


/torrents/top/month
  Enviar
Bookmarks

List of bookmarks


/bookmarks
  Enviar
Create bookmark

Send torrent's Id for save it as bookmark


        POST:
            /bookmarks/save/{torrentId}
        RESULT:
        {
            "id":123
        }
    

/bookmarks/save/50096
  Enviar
Remove bookmark by torrent Id


        DELETE:
            /bookmarks/delete/{torrentId}
        RESULT:
        {
            1
        }
    
Remove set of bookmarks by one request


        DELETE:
            /bookmarks/delete/{torrentId},{torrentId},{torrentId}
        RESULT:
        {
            3
        }
    

/bookmarks/delete/50096
  Enviar

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

	TPB_URL = "https://thepiratebay.la"
KICKASS_URL = "http://kat.cr"
EZTV_URL = "http://eztvapi.co.za/"
NYAA_URL = "http://www.nyaa.se/"
YTS_URL = "http://yts.ag"
RARBG_URL = "https://rarbg.to"
CPABSIEN_URL = "http://www.cpasbien.io/recherche/films/"
T411_URL = "https://api.t411.me/"
STRIKE_URL = "https://getstrike.net"
RARBG_API_URL = "https://torrentapi.org/pubapi_v2.php"
	//	#PARAMETERS
	//	http://bakabt.me

api.get-popcorn.com
api.p0pcor11time.cc
api.popcorntime.i0
api.ptn.sh
api.ptn.wf
br.ptn.pm
br.ptn.sh
br.ptn.wf
eztvapire

. fr.ptn.pm

. fr.ptn.sh

. fr.ptn.wf

. 

. 

. 

. za.ptn.pm

. 2a.ptn.sh

. za.ptn.wf



D??h?dp?d





I??I??r?lr?Ap?a
WHOM-I3

Q) Blog

b10g.get-p0pcom.c0m
b10g.popcorntime.cc
b10g.p0pcorntime.i0
b10g.p0pcorntime.re



L9

Website

api.ptn.re
api.eztvapi.re
api.its.pt
api.p0pcorntime.re
br.its.pt
br.p0pcomtime.i0
br.eztvapi.re
br.ptn.re

9. Cd11.?ZtV21pi.1?6

10. cdn.its.pt

I. cdn.ptn.re

12. 



?1

14.



13.
16.
17.
18.
19.
20.
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.
31.
32.
33.
34.
35.
36.
37.
38.
39.

y?A



mewNH

1:5



3 .

freztvapime

fr.its.pt
fr.popc0rntime.io

fr. ptn.1'e
get?popcorn.com
itspt

popcorntime.cc
popcorntimeio
popcorntime.re
ptn.pm

ptn.re

ptn.sh

ptn.wf

.re








za.its.pt
za.popcorntime.io
za.ptn.re

.ptn.re
popcorntimewar.com
dC-812a20f4.popcorntimewar.com

Continuous Integration Service
ci.popcorntime.io
Discussion Forum

discussget?popcorn.com
discuss.its.pt
discusspopcorntime.cc
discusspopcorntimeio
discuss.popcorntime.re

GitLab

git.get-popcorn.00m
gitpopcorntimecc
git.popcorntime.io
gitpopcorntimere

Page:13

Pagezl4

g) Mail Server

1. mai1.its.pt
mail.popcorntime.i0

E9

MX Servers

E5

mx.p0pcorntime.i0
mx1.p0pcorntime.i0
mx6.p0pcorntime.i0

bJNr?i

Nameservers

I:

.eztvapi.re
.get?popcorn.c0m
.its.pt
.popcorntime.cc
.popcorntime.i0
.popcorntimeme

.ptn.re
.ptn.sh
. .ptn.wf
. 
. ns2.eztvapi.re
. nsZ.get?p0pc0rn.com
. 1132.its.pt
. nsZpopcorntimecc
. n52.p0pc0rntime.io
. n32.popcorntime.re
. ns2.ptn.pm
. n32.ptn.re
. n82.ptn.sh
. n52.ptn.wf
. 
. 11s3.eztvapi.re
. n53 .get?popcorn.com
. ns3.its.pt
. 1183 .popcorntime.cc
. ns3.p0pcorntime.io
. ns3.popc0rntime.re
. ns3.ptn.pm
. ns3.ptn.re
. ns3.ptn.sh
. ns3.ptn.wf






11s4.eztvapi.re

. ns4.get-popcorn.com
. 1134.its.pt

. ns4.p0pcomtime.cc
. ns4.p0pcorntime.i0
. ns4.p0pcorntime.re
. ns4.ptn.p1h

. 11s4.ptn.re

. 11s4.ptn.sh

. ns4.ptn.wf

. 


status.popcorntime.i0
U?date Server
updatepopcomtimeio
Observium
0bservium.ptn.re
$19.11*.

shout.ptn.re
us?chi.ptn.re

arpReach

reach.p0pcorntime.io

Content Delive?

. get.p0pcorntime.io

mirr0r02.ptn.sh

. mirr0r03.ptn.sh
. mirr0r04.ptn.sh
. 11111?1?01?05.ptn.sh

mirr0r06.ptn.sh
mir1?01?07 .ptn.sh
mirrorOS 
mirror09.ptn. sh

0. mirr01?10.ptn.sh

Pagezl?

11.
12.
13.
14.
15.
16.
17.
18.
19.
20.
21.
22.
23.
24.
25.

mirror] 1.p1n.sh
mirrorl 2 .ptn. sh
mirror13.ptn.sh
mirror14.ptn.sh
mirrorl 5 .ptn. Sh
mirror16.ptn.sh
mirrorl 7.ptn.sh
mirrorl 8 .ptn.sh
mirrorl 9. ptn.sh
mirr0r20 .ptn.3h
min-0121 .ptn. sh
mirror22.ptn. sh
mirr01?23 .ptn. sh
mirr0r24.ptn.sh
mir1?01?25 .ptn. sh

Pagezl6	

*/