// LICENSE_CODE ZON
'use strict'; /*jslint browser:true*/
define(function(){
define('login_config', {url_prefix: ''});
var E = {};
E.init = function(opt, dependencies, setup){
    var alt_cdn = /\bholaalt-holanetworksltd\b/.test(opt.cdn_path);
    function c(cdn, local){
        if (typeof local!='string')
            throw '"local" should exist for alt_cdn cases!';
	if (alt_cdn)
	{
	    cdn = local.replace(/\bcdn4\.hola\.org\b/,
		'holaalt-holanetworksltd.netdna-ssl.com');
	}
        else
            cdn = opt.cdn_path+cdn;
	return [cdn, local];
    }
    if (E.inited)
        return void console.error('Config already initialized');
    E.inited = true;
    E.ver = opt.ver;
    var create_xhr;
    var ua = /[( ]MSIE ([789]|10).\d[);]/.exec(window.navigator.userAgent||'');
    if (window.XDomainRequest && +ua[1]<10)
    {
        // IE doesn't support CORS, use XDomainRequest instead
        create_xhr = function(){
            var xdr = new window.XDomainRequest();
            xdr.onload = function(){
                xdr.readyState = 4;
                xdr.status = 200;
                if (xdr.onreadystatechange)
                    xdr.onreadystatechange();
            };
            xdr.onerror = function(){
                xdr.readyState = 4;
                xdr.status = 500;
                if (xdr.onreadystatechange)
                    xdr.onreadystatechange();
            };
            // request will be aborted if onprogress missing
            xdr.onprogress = function(){};
            return xdr;
        };
    }
    require.onError = function(err){ window.hola.base.require_on_error(err); };
    E.config = {ver: opt.ver, baseUrl: '/', urlArgs: '', config: {
        text: {
            // requirejs text plugin will use <script> and not xhr when
            // trying to load html from another domain. we force always
            // to use xhr for loading html files
            useXhr: function(url, protocol, hostname, port){ return true; },
            createXhr: create_xhr
        }
    },
    map: {'*': {
        events: '/util/events.js',
        // XXX romank: remove after complete fixing paths (WIP)
        '/svc/be_user_nav.js': '/svc/pub/be_user_nav.js',
        '/svc/mp/circle_progress.js': '/svc/mp/pub/circle_progress.js',
        '/svc/search.js': '/svc/pub/search.js',
        '/svc/be_base.js': '/svc/pub/be_base.js',
        '/svc/mp/be_mp_storage.js': '/svc/mp/pub/be_mp_storage.js',
        // tmp for /svc/pub/search.js
        '/www/be.js': '/www/hola/pub/be.js',
        '/www/ui.js': '/www/hola/pub/ui.js',
        // fix for joint http://jointjs.com/tutorial/requirejs
        'underscore': 'lodash'
    }},
    paths: {
        '/protocol/countries.js': '/protocol/countries.js?md5=6249-fdda7a0b',
        '/svc/account/membership.js': '/svc/account/membership.js?md5=1174-fce075f5',
        '/svc/pub/be_user_nav.js': '/svc/pub/be_user_nav.js?md5=21954-fa484c21',
        '/svc/mp/pub/circle_progress.js':
            '/svc/mp/pub/circle_progress.js?md5=3880-3463c1ca',
        '/svc/pub/search.js': '/svc/pub/search.js?md5=18814-0b403326',
        '/svc/util.js': '/svc/util.js?md5=3165-b6fecc05',
        '/svc/svc_ipc.js': '/svc/svc_ipc.js?md5=9887-19839301',
        '/svc/mp/pub/be_mp_storage.js': '/svc/mp/pub/be_mp_storage.js?md5=776-5e6c6613',
        '/svc/mp/pub/msg.js': '/svc/mp/pub/msg.js?md5=3555-6ca1d1fb',
        '/svc/mp/pub/www_storage.js': '/svc/mp/pub/www_storage.js?md5=2613-3f20b43b',
        '/svc/mp/pub/util.js': '/svc/mp/pub/util.js?md5=22553-fb8175b5',
        '/svc/mp/pub/playlist.js': '/svc/mp/pub/playlist.js?md5=2270-72c49321',
        // http handler, not actual file
        '/svc/versions.js': '/svc/versions.js',
        '/util/ajax.js': '/util/ajax.js?md5=2410-508322e8',
        '/util/array.js': '/util/array.js?md5=4796-e00903f3',
        '/util/conv.js': '/util/conv.js?md5=10519-b5a1acc2',
        '/util/country.js': '/util/country.js?md5=6419-c524b3bc',
        '/util/csrf.js': '/util/csrf.js?md5=706-40b2e891',
        '/util/csv.js': '/util/csv.js?md5=4408-99abb6bb',
        '/util/date.js': '/util/date.js?md5=9439-e1166ac6',
        '/util/es6_shim.js': '/util/es6_shim.js?md5=10052-0c2e1bf5',
        '/util/typedarray_shim.js': '/util/typedarray_shim.js?md5=38633-3989b0fa',
        '/util/escape.js': '/util/escape.js?md5=6705-b73ea77e',
        '/util/etask.js': '/util/etask.js?md5=40259-8deaa57e',
        '/util/events.js': '/util/events.js?md5=4414-191c6d19',
        '/util/jquery_ajax_ie.js': '/util/jquery_ajax_ie.js?md5=7313-7dc9ad69',
        '/util/rate_limit.js': '/util/rate_limit.js?md5=1018-d070019d',
        '/util/sprintf.js': '/util/sprintf.js?md5=10323-50ec5719',
        '/util/strftime.js': '/util/strftime.js?md5=7451-2324e98a',
        '/util/lang.js': '/util/lang.js?md5=5376-97012140',
        '/util/string.js': '/util/string.js?md5=1638-dfe256f3',
        '/util/storage.js': '/util/storage.js?md5=1588-52fa3f70',
        '/util/url.js': '/util/url.js?md5=7429-de92a33c',
        '/util/user_agent.js': '/util/user_agent.js?md5=6519-a373776c',
        '/util/util.js': '/util/util.js?md5=7314-44f6f188',
        '/util/version_util.js': '/util/version_util.js?md5=1960-91e3e117',
        '/util/zerr.js': '/util/zerr.js?md5=8749-f22a2c87',
        '/util/ccounter_client.js': '/util/ccounter_client.js?md5=1635-b0e6cf56',
        '/util/zdot.js': '/util/zdot.js?md5=6084-cbee0ee0',
        '/www/cp/pub/cp_util.js': '/www/cp/pub/cp_util.js?md5=14522-22925e11',
        '/www/cp/pub/cp.js': '/www/cp/pub/cp.js?md5=32214-6eccc747',
        '/www/hola/pub/be.js': '/www/hola/pub/be.js?md5=23652-b76a7762',
        '/www/hola/pub/bext_install.js':
            '/www/hola/pub/bext_install.js?md5=1816-6919ee66',
        '/www/hola/pub/challenge.js': '/www/hola/pub/challenge.js?md5=1075-fa346dec',
        '/www/hola/pub/download_page.js':
            '/www/hola/pub/download_page.js?md5=13048-38e3492a',
        '/www/hola/pub/download.js': '/www/hola/pub/download.js?md5=12773-1245272d',
        '/www/hola/pub/download/ext_flow.js':
            '/www/hola/pub/download/ext_flow.js?md5=7321-e0e64144',
        '/svc/pub/app_checker.js':
            '/svc/pub/app_checker.js?md5=6251-25a1d54a',
        '/www/hola/pub/download/mp_installed_view.js':
            '/www/hola/pub/download/mp_installed_view.js?md5=770-3a3bf2da',
        '/www/hola/pub/download/vpn_installed_view.js':
            '/www/hola/pub/download/vpn_installed_view.js?md5=491-ce0d3930',
        '/www/hola/pub/download/streamer_flow.js':
            '/www/hola/pub/download/streamer_flow.js?md5=4384-bf8420c9',
        '/www/hola/pub/download/tracker.js':
            '/www/hola/pub/download/tracker.js?md5=1774-e5d707e8',
        '/www/hola/pub/download/ext_exe_flow.js':
            '/www/hola/pub/download/ext_exe_flow.js?md5=27234-77dd00b9',
        '/www/hola/pub/browser_support.js':
            '/www/hola/pub/browser_support.js?md5=1025-b129898d',
        '/www/hola/pub/download_rmt_upgrade.js':
            '/www/hola/pub/download_rmt_upgrade.js?md5=9829-876f6832',
        '/www/hola/pub/ios_profile.js':
            '/www/hola/pub/ios_profile.js?md5=628-1c3f4cb3',
        '/www/util/pub/localize.js': '/www/util/pub/localize.js?md5=407-683ba404',
        '/www/lum/pub/billing.js': '/www/lum/pub/billing.js?md5=32740-1dc56498',
        '/www/lum/pub/billing_util.js':
            '/www/lum/pub/billing_util.js?md5=3738-ea2cbdcc',
	'/www/hola/pub/mp_compat.js': '/www/hola/pub/mp_compat.js?md5=2021-3e7f5dad',
	'/www/hola/pub/mp_download.js':
            '/www/hola/pub/mp_download.js?md5=1607-5ba0c4d8',
	'/www/hola/pub/mp_torrents.js':
            '/www/hola/pub/mp_torrents.js?md5=6946-43a6fd75',
        '/www/hola/pub/mplay.js': '/www/hola/pub/mplay.js?md5=16903-0aa9b07c',
        '/www/hola/pub/mplayer.js': '/www/hola/pub/mplayer.js?md5=5277-62bfa51d',
        '/www/hola/pub/player_install.js':
            '/www/hola/pub/player_install.js?md5=1319-f9279cbb',
        '/www/hola/pub/promo.js': '/www/hola/pub/promo.js?md5=901-3e5c9a56',
	'/www/hola/pub/page_search.js':
            '/www/hola/pub/page_search.js?md5=2154-322c6551',
	'/www/hola/pub/payment.js': '/www/hola/pub/payment.js?md5=21572-cb467962',
        '/www/hola/pub/popular_sites.js':
            '/www/hola/pub/popular_sites.js?md5=1545-aa90d1bd',
	'/www/hola/pub/referral.js': '/www/hola/pub/referral.js?md5=5552-e9d514ac',
	'/www/hola/pub/site.js': '/www/hola/pub/site.js?md5=50512-497f004c',
	'/www/hola/pub/site_load.js': '/www/hola/pub/site_load.js?md5=3667-a8c13cf1',
        '/www/hola/pub/social.js': '/www/hola/pub/social.js?md5=1574-81caca45',
        '/www/hola/unblock/util.js': '/www/hola/unblock/util.js?md5=2823-0eaeba3e',
	'/www/hola/pub/ui.js': '/www/hola/pub/ui.js?md5=39439-2f73190f',
        '/www/hola/pub/unblock.js': '/www/hola/pub/unblock.js?md5=65316-483153a7',
        '/www/hola/pub/util.js': '/www/hola/pub/util.js?md5=5413-2cfff8ee',
	'/www/hola/pub/zon_config.js':
            '/www/hola/pub/zon_config.js?md5=1348-a1ae9b2c',
        '/www/hola/pub/index.js':
            '/www/hola/pub/index.js?md5=5959-bfb7c761',
        '/www/hola/pub/publishers.js':
            '/www/hola/pub/publishers.js?md5=3986-2d609842',
        '/www/hola/pub/ensure_login.js':
            '/www/hola/pub/ensure_login.js?md5=1471-c5f1a82b',
        '/www/cdn/pub/cdn.js': '/www/cdn/pub/cdn.js?md5=10821-23e7ea9a',
        '/www/cdn/pub/cdn_cp.js': '/www/cdn/pub/cdn_cp.js?md5=17923-e5774bb3',
        '/www/cdn/pub/cdn_cp_stats.js': '/www/cdn/pub/cdn_cp_stats.js?md5=25339-0b7f2070',
        '/www/cdn/pub/cdn_cp_graph.js': '/www/cdn/pub/cdn_cp_graph.js?md5=8410-8ab2ff71',
        '/www/cdn/pub/cdn_util.js': '/www/cdn/pub/cdn_util.js?md5=5048-5d03a60b',
        '/www/cdn/pub/flot_ztooltip.js':
            '/www/cdn/pub/flot_ztooltip.js?md5=1791-3b9984bf',
        '/www/login/pub/user.js': '/www/login/pub/user.js?md5=1906-c13360c2',
        '/www/login/pub/user_security.js':
            '/www/login/pub/user_security.js?md5=1029-fbcbb1f7',
        '/www/login/pub/user_security_ui.js':
            '/www/login/pub/user_security_ui.js?md5=3514-5e844d19',
        '/www/login/pub/login.js': '/www/login/pub/login.js?md5=33074-3364a407',
	'/www/login/pub/password.js': '/www/login/pub/password.js?md5=2344-6ffc173f',
	'/www/login/pub/verify_email.js':
            '/www/login/pub/verify_email.js?md5=853-11296cea',
        '/www/lum/pub/lum.js': '/www/lum/pub/lum.js?md5=1744-f8b098ea',
        '/www/lum/pub/lum_cp.js': '/www/lum/pub/lum_cp.js?md5=14074-d68f1436',
        '/www/lum/pub/lum_core.js': '/www/lum/pub/lum_core.js?md5=47698-f744bf12',
        '/www/util/pub/ui_angular.js': '/www/util/pub/ui_angular.js?md5=5233-d43868ce',
        '/www/util/pub/alert.js': '/www/util/pub/alert.js?md5=3445-de217635',
        '/www/util/pub/prism.js': '/www/util/pub/prism.js?md5=17497-84fdd4ce',
        '/www/util/pub/prism_vb.js': '/www/util/pub/prism_vb.js?md5=632-bb8505c6',
        '/www/util/pub/myip.js': '/www/util/pub/myip.js?md5=157-ea90b84b',
        // XXX arik/romank: change path to full path (requirejs text plugin
        // doesn't use paths when providing full path (so no ?md5=)
         'installation_templates':
            '/www/hola/pub/installation_templates.html?md5=16731-f436e8fa',
        edge: '/edge.5.0.1.min.js?md5=103891-2850882f',
        text: '/requirejs.text.js?md5=15594-7b960451',
        jschardet: '/jschardet.min.js?md5=355728-900a338b',
        socket_io: '/socket.io.min.js?md5=82873-cc24aba0',
        angular: c('/angular.js/1.3.17/angular.min',
            '/angular.min.js?md5=126443-a8cb0e38'),
        'angular-select': c('/angular-ui-select/0.12.0/select.min',
            '/angular-select.min.js?md5=34795-420aa5d4'),
        'angular-sanitize': c('/angular.js/1.3.17/angular-sanitize.min',
            '/angular-sanitize.min.js?md5=6082-bdfacc8a'),
        'angular-ui-bootstrap': c('/angular-ui-bootstrap/0.13.4/'
            +'ui-bootstrap-tpls.min.js',
            '/www/util/pub/ui-bootstrap-tpls.min.js?md5=89681-9d4059f2'),
        jquery: c('/jquery/1.11.1/jquery.min',
            '/jquery.min.js?md5=95786-8101d596'),
        jquery_cookie: c('/jquery-cookie/1.4.0/jquery.cookie.min',
            '/jquery.cookie.min.js?md5=1267-e4d55fe6'),
        jquery_xmlrpc: '/jquery.xmlrpc.js?md5=10879-003befc0',
        jquery_url_parser: c('/jquery-url-parser/2.3.1/purl.min',
            '/purl.min.js?md5=4487-c1c6d861'),
        underscore: c('/underscore.js/1.6.0/underscore-min',
            '/underscore-min.js?md5=14682-dd9663be'),
        backbone: c('/backbone.js/1.1.2/backbone-min',
            '/backbone-min.js?md5=19999-9c3e3189'),
        typeahead: c('/typeahead.js/0.10.2/typeahead.bundle.min',
            '/typeahead.bundle.min.js?md5=28645-5a65070f'),
        bootstrap: c('/twitter-bootstrap/3.2.0/js/bootstrap.min',
            '/bootstrap.min.js?md5=31819-abda8436'),
        fastclick: c('/fastclick/0.6.11/fastclick.min',
            '/fastclick.min.js?md5=8109-306e939f'),
        bootbox: c('/bootbox.js/4.2.0/bootbox.min',
            '/bootbox.min.js?md5=8418-846fc8bc'),
        smooth_scroll: c('/jquery-smooth-scroll/1.4.13/'
            +'jquery.smooth-scroll.min',
            '/jquery.smooth-scroll.min.js?md5=3001-11d2b90e'),
        tagmanager: c('/tagmanager/3.0.0/tagmanager',
            '/tagmanager.js?md5=15669-952a53ad'),
        codemirror: c('/codemirror/3.22.0/codemirror.min',
            '/codemirror.min.js?md5=115292-a3ef6367'),
        codemirror_javascript: c('/codemirror/3.22.0/mode/'
            +'javascript/javascript.min', '/javascript.min.js?md5=11167-43426553'),
        codemirror_clike: c('/codemirror/3.22.0/mode/'
            +'clike/clike.min', '/clike.min.js?md5=9572-d6450bc6'),
        lodash: c('/lodash.js/2.4.1/lodash.min', '/lodash.min.js?md5=28151-58e3df17'),
        geometry: '/geometry.min.js?md5=9004-ffd36319',
        vectorizer: '/vectorizer.min.js?md5=8094-a3340471',
        joint: '/joint.clean.min.js?md5=72643-ba4fe473',
        zeroclipboard: c('/zeroclipboard/2.1.6/ZeroClipboard.min',
            '/zeroclipboard.min.js?md5=25583-e498ae53'),
        jsonview: '/jquery.jsonview.js?md5=5500-a1d3cf5b',
        bootstrap_datepicker: c('/bootstrap-datepicker/1.4.0/js/bootstrap'+
            '-datepicker.min', '/bootstrap-datepicker.min.js?md5=29695-56af4a10'),
        bootstrap_datetimepicker: c('/bootstrap-datetimepicker/4.14.30/js'+
            '/bootstrap-datetimepicker.min',
            '/bootstrap-datetimepicker.min.js?md5=35776-7b418408'),
        moment: c('/moment.js/2.10.3/moment.min', '/moment.min.js?md5=34436-f7fcec73'),
        ui_router: c('/angular-ui-router/0.2.15/angular-ui-router.min',
            '/angular-ui-router.min.js?md5=30439-78c94563'),
        // XXX alexeym: add lokijs from cdnjs when it will be available
        lokijs: '/lokijs.min.js?md5=51414-f344351d',
        crossfilter: '/crossfilter.min.js?md5=9877-1fdad419',
        flot: c('/flot/0.8.3/jquery.flot.min', '/jquery.flot.min.js?md5=52825-e76bde4c'),
        'flot.time': c('/flot/0.8.3/jquery.flot.time.min',
            '/jquery.flot.time.min.js?md5=4658-138f69c7'),
        'flot.crosshair': c('/flot/0.8.3/jquery.flot.crosshair.min',
            '/jquery.flot.crosshair.min.js?md5=1479-df624d8e'),
        // XXX mikhail: 2016-01-01 angular-flot 0.0.10 is not on cdnjs yet,
        // as they only accept libs with 100+ github stars.
        'angular-flot': '/angular-flot.min.js?md5=1523-800a9623',
        filesaver: c('/FileSaver.js/2014-11-29/FileSaver.min',
            '/www/util/pub/FileSaver.min.js?md5=2849-7ffcaff5')
    }, shim: {
        // XXX mark/ingvar: remove those that aren't needed
	codemirror: {exports: 'CodeMirror'},
	codemirror_javascript: {deps: ['codemirror']},
	codemirror_clike: {deps: ['codemirror']},
	jquery_url_parser: {deps: ['jquery']},
        jquery_xmlrpc: {deps: ['jquery'], exports: 'jQuery.xmlrpc'},
	typeahead: {deps: ['jquery']},
        moment: {exports: 'moment'},
	bootstrap: {deps: ['jquery']},
	tagmanager: {deps: ['jquery']},
        smooth_scroll: {deps: ['jquery']},
	angular: {deps: ['jquery'], exports: 'angular'},
        'angular-select': {deps: ['angular']},
        'angular-sanitize': {deps: ['angular']},
        'angular-ui-bootstrap': {deps: ['angular']},
	bootbox: {deps: ['jquery'], exports: 'bootbox'},
        '/www/util/pub/prism.js': {exports: 'Prism'},
        joint: {
            deps: ['geometry', 'vectorizer', 'jquery', 'lodash', 'backbone'],
            exports: 'joint',
            init: function(geometry, vectorizer){
                this.g = geometry;
                this.V = vectorizer;
            }
        },
        zeroclipboard: {exports: 'zeroclipboard'},
        edge: {exports: 'AdobeEdge'},
        jsonview: {deps: ['jquery']},
        bootstrap_datepicker: {deps: ['bootstrap']},
        bootstrap_datetimepicker: {deps: ['bootstrap']},
        ui_router: {deps: ['angular']},
        crossfilter: {exports: 'crossfilter'},
        flot: {deps: ['jquery'], exports: 'jQuery.plot'},
        'flot.time': {deps: ['jquery', 'flot']},
        'flot.crosshair': {deps: ['flot']},
        'angular-flot': {deps: ['angular', 'flot', 'flot.time',
            'flot.crosshair']}
    }};
    var cdn_list;
    // jshint ignore:start
    cdn_list = ["//www-holanetworksltd.netdna-ssl.com","//d1qm2c7h6sna4e.cloudfront.net","//hola.org"];
    // jshint ignore:end
    if (cdn_list.length)
        E.config.cdn = cdn_list;
    require.config(E.config);
    define('virt_jquery_all', ['jquery', '/util/jquery_ajax_ie.js',
        'jquery_cookie', 'jquery_url_parser', 'jquery_xmlrpc'],
        function(j){ return j; });
    require(['/util/es6_shim.js', '/util/typedarray_shim.js'], function(){
        if (Array.isArray(dependencies) && typeof setup=='function')
            require(dependencies, setup);
    });
};

return E; });
