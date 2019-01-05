function open_feedback() {
    var feedback_area = document.getElementById("feedback__wrapper");
    feedback_area.classList.remove('feedback__wrapper--off');
    feedback_area.classList.add('feedback__wrapper--on');
}
function close_feedback() {
    var feedback_area = document.getElementById("feedback__wrapper");
    feedback_area.classList.remove('feedback__wrapper--on');
    feedback_area.classList.add('feedback__wrapper--off');
}
function toggle_search() {
    var search_area = document.getElementById("search-dropdown");
    if(search_available === false){
        search_area.classList.add("search-dropdown--on");
        search_area.classList.remove("search-dropdown--off");
        search_available = true;
    }else{
        search_area.classList.add("search-dropdown--off");
        search_area.classList.remove("search-dropdown--on");
        search_available = false;
    }
}
function open_side_nav(){
    var side_nav_area= document.getElementById("nav-aside");
    var body_cover = document.getElementById('body-cover');
    body_cover.classList.remove('body-cover--off');
    body_cover.classList.add('body-cover--on');
    side_nav_area.classList.remove('nav-aside--off');
    side_nav_area.classList.add('nav-aside--on');
}
function close_side_nav(){
    var side_nav_area= document.getElementById("nav-aside");
    var body_cover = document.getElementById('body-cover');
    side_nav_area.classList.remove('nav-aside--on');
    side_nav_area.classList.add('nav-aside--off');
    body_cover.classList.remove('body-cover--on');
    body_cover.classList.add('body-cover--off');
}

function text_truncate() {
    var text_ellipsis = document.getElementsByClassName("text--truncate");
    var num_class = text_ellipsis.length;
    for (var i = 0; i < num_class; i++) {
        var limit_char = 0;
        while (text_ellipsis[i].scrollHeight > text_ellipsis[i].clientHeight) {
            if( limit_char == 100) {
                break;
            }
            var text = text_ellipsis[i].innerText;
            text = text.substring(0, text.length - 4) + "...";
            text_ellipsis[i].innerText = text;
            limit_char++;
        }
    }

}

