
query = document.getElementById("search_input").value;
str_file = document.getElementsByTagName("html")[0].innerHTML;
let res = str_file.search(query);

function Search() {
    if(res>0){
        alert("Your search was found on this page!");
    }
    else {
        alert("Your search was not found on this page!");
    }
}