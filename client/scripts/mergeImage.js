console.log("js mergeImage init");

var mergeImgArr = [];
var targetImg = [];
var step = 0;

$(document).ready(function() {
    initImage()
    initButton()

});

function initButton() {
    $('#nextStep').click(function(e) {
        console.log('nextStep   click')
        if (step == 0){
        	$('#nextStep').html('開始合併');
        	step++;
        }
        else if (step >= 1) {
            console.log("send")
            console.log(mergeImgArr)
            console.log(targetImg)
            $.ajax({
                url: '/exe/mergeImage',
                type: 'POST',
                data: {
                    mergeImgArr: mergeImgArr,
                    targetImg: targetImg
                },
                error: function(xhr) {
                    alert('button error');
                },
                success: function(res) {
                    alert(res);
                }
            });
            step=0;
        }
    })
}


function initImage() {
    $.ajax({
        url: '/file/getLocalPathAll',
        type: 'GET',
        data: {
            foldername: 'mergeImage'
        },
        error: function(xhr) {
            alert('圖片讀取錯誤，請重新載入');
        },
        success: function(imgArr) {
            console.log('success       imgArr  ')
            console.log(imgArr)
            for (i in imgArr) {
                createImgBlock(imgArr[i], i)

            }
            imageClickInit();
        }
    });
}

function createImgBlock(imgSrc, blockIndex) {
    imgBlockId = 'imgBlock' + blockIndex;
    var div = $('<div/>', {
        id: imgBlockId,
        class: 'thumbnail col-md-2'
    }).appendTo($('#content'));;
    // console.log(imgBlockId);
    // console.log(imgSrc)
    var img = $('<img />', {
        id: imgSrc,
        src: '/' + imgSrc,
        width: '200px',
        height: '150px',
        class: 'mergeImage'
    }).appendTo($('#' + imgBlockId));

}

function imageClickInit() {
    $('.mergeImage').click(function(e) {
        console.log('click!!!!!')
        // console.log(e)
        var imgId = jQuery(this).attr("id");
		// $('#'+imgId).attr('background','#cccccc')        
        // "box-shadow:3px 3px 5px 6px #cccccc;"

        if (step == 0) {
            mergeImgArr.push(imgId);
        } else if (step == 1) {
            targetImg = imgId

        }
        // alert(contentPanelId);
        console.log(mergeImgArr)
        console.log(targetImg)
    })
}