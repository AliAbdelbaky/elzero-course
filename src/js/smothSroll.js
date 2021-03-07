import Scrollbar from "smooth-scrollbar";
let options = {
    'damping': 0.1,
    'alwaysShowTracks': true,
    'thumbMinSize': 20
};
Scrollbar.init(document.querySelector("body"), options);