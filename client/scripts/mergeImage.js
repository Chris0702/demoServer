console.log("js mergeImage init");

$(document).ready(function() {
  $.ajax({
    url: '/file/getLocalPathAll',
    type: 'GET',
    data: {
      foldername: 'mergeImage'
    },
    error: function(xhr) {
      alert('圖片讀取錯誤，請重新載入');
    },
    success: function(response) {
       	console.log('success       response  ')
       	console.log(response)
       	initImage(response)
        // $('#msg_user_name').html(response);
        // $('#msg_user_name').fadeIn();
 
    }
  });
});

function initImage(imgArr){
	for(i in imgArr){
		console.log(i);
		console.log(imgArr[i])
		var img = $('<img />', { 
  		id: i,
  		src: '/'+imgArr[i],
  		width: '200px',
  		height: '150px'
		}).appendTo($('#content'));;

	}

}