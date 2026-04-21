console.log("Map script loaded bjuuur");
console.log("Maps_API_KEY in map.js:", Maps_API_KEY);



 //Google Maps API Script I use this to call google maps api 
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: Maps_API_KEY ,
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });




let map;
//I use this function to load the google maps library.
function set_markerlocation() {
    

}
async function initMap() {
    const { Map, RenderingType } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    
    map = new Map(document.getElementById('map'), {
        center: { lat: 40, lng: 0},
        
        zoom: 2.2,
        renderingType: RenderingType.VECTOR,
         gestureHandling: "cooperative",
          mapId: 'DEMO_MAP_ID',
    });


const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: User_lat, lng: User_lng },


});
}
initMap();

