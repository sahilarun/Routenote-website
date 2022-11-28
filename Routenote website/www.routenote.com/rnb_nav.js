//masterlist of pages which require navigational links - url of choice for each page must go in provided quotes of relevant variable
var value = $.cookie('gclid');
var value1 = $.cookie('fbclid');
//console.log(value);
if(value){
          var v_link = 'https://routenote.com/rn/signup_page/design?gclid='+value;
    }else{
		if(value1){
          var v_link = 'https://routenote.com/rn/signup_page/design?fbclid='+value1;
		}else{
			  var v_link = 'https://routenote.com/rn/signup_page/design';
		}
	}
window.rnb_links = {
    whyRouteNote: "https://routenote.com/whychoose",
   pushPromo: "https://routenote.com/push",
   musicDistribution: "https://routenote.com/distribution",
   musicMonetisation: "https://routenote.com/monetise",
   partners: "https://routenote.com/partner",
   pricing: "https://routenote.com/pricing",
   about: "https://routenote.com/about",
   contact: "https://routenote.com/contact",
   brandAssets: "https://routenote.com/content/brand-assets",
   termsAndConditions: "https://routenote.com/termsandconditions",
   privacyPolicy: "https://routenote.com/privacypolicy",
   signIn: "https://routenote.com/rn/login",
   signUp: v_link,
   forgottenPassword: "https://routenote.com/rn/?q=user/password",
   newsletter: "https://routenote.com/unsubscribe",
   modernSlavery: "https://routenote.com/modern-slavery-statement",
   spotifyForArtists: "https://routenote.com/spotifyforartists",
    artistProfiles: "https://routenote.com/artist-profiles",
    freeCodes: "https://routenote.com/free-codes",
    freeOrPremium: "https://routenote.com/free-or-premium",
    labelDistribution: "https://routenote.com/label-distribution",
    musicMarketing: "https://routenote.com/music-marketing",
    releaseMusicOnline: "https://routenote.com/release-music-online",
    spotifyDistribution: "https://routenote.com/spotify-distribution",
    switchToRouteNote: "https://routenote.com/switch-to-routenote",
    syncLicensing: "https://routenote.com/sync-licensing",
    
}

//array of objects which correspond to structure of site's main header
window.rnb_nav = [
    {
        name: "Why RouteNote?",
        url: window.rnb_links.whyRouteNote
    },

    {
        name: "Services",
        dropdown: [
            {
                name: "Music Distribution",
                description: "Sell your music in the world's best streaming and download services.",
                url: window.rnb_links.musicDistribution
            },

            {
                name: "Copyright & Monetisation",
                description: "Control and monetise your music on Youtube, Facebook, Soundcloud and more.",
                url: window.rnb_links.musicMonetisation
            },

            {
                name: "PUSH.fm",
                description: "PUSH your music to new audiences with free digital marketing tools.",
                url: window.rnb_links.pushPromo
                
            },

            {
                name: "Synchedin",
                description: "License your music to digital content creators.",
                url: "https://synchedin.com",
				rel: " no referer, no opener",
                target: "_blank"
            },
			{
                name: "RouteNote Create",
                description: "Affordable royalty-free samples to use in your music.",
                url: "https://create.routenote.com",
				rel: " no referer, no opener",
                target: "_blank"
            },
        ]
    },

    {
        name: "Partners",
        url: window.rnb_links.partners
    },

    {
        name: "Pricing",
        url: window.rnb_links.pricing
    },

    {
        name: "Learn",
        dropdown: [
            {
                name: "Support Hub",
                description: "All your questions answered.",
                url: "http://support.routenote.com/",
				rel: " no referer, no opener",
                target: "_blank"
            },

            {
                name: "Blog",
                description: "Keep up with the latest news throughout the industry.",
                url: "http://routenote.com/blog",
				rel: " no referer, no opener",
                target: "_blank"
            },

            {
                name: "Videos",
                description: "Tips and tricks for musicians.",
                url: "https://www.youtube.com/user/routenote",
				rel: " no referer, no opener",
                target: "_blank"
            }
        ]
    },
]
