function NavBarurlPhpbuilder(){
    let hostname = window.location.host;
    let protocol = window.location.protocol;
    if(hostname === "localhost:3000"){
        hostname = "localhost:80/vigneshexplorations/src/assets/";
        let resulturl = `${protocol}//${hostname}`;
        return resulturl;
    }
    else {
        let resulturl = `${protocol}//${hostname}/`; //https:vignesh.co.in/
        return resulturl;
    }
}
    

export default NavBarurlPhpbuilder;