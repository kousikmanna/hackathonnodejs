$(document).ready(function() {
	var pathname = window.location.pathname;
    var webshopSlug = pathname.split('/')[1];
    if(window.location.pathname.split('/')[1] == 'user' && window.location.pathname.split('/')[2] == 'posts'){
        getPosts();
    }
    if(window.location.pathname.split('/')[1] == 'user' && window.location.pathname.split('/')[2] == 'profiles'){
        getProfiles();
    }
});



function getPosts(){
	$.ajax({
        url: '/posts',
        type: 'GET',
        success: function(response) {
        	// console.log('response',response)
        	var list = '';
            $.each(response, function(key, val) {
            	console.log('val',val);
            	var title ="";
            	if(val['-Title']){
            		title=title+ "<div><span style='color:blue;'>Title: </span>"+val['-Title']+"</div>";
            	}
                list = list + "<div class='post-detail'>"+title+
			"<div><span style='color:blue;'>Posts: </span> "+val['-Body']+"</div>\
			<div><span style='color:blue;'>Posted Time: </span>"+val['-CreationDate']+"</div>\
			</div>";
            })
            $('.posts').append(list);
        },
        error: function(xhr, status, error) {
            alert('Some problem occured.');
        }
    })
}

function  getProfiles(){
	
}