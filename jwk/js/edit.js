/* 
* @Author: anchen
* @Date:   2017-11-05 18:34:52
* @Last Modified by:   anchen
* @Last Modified time: 2017-11-05 18:46:29
*/

$(document).ready(function(){
    var file = document.getElementById("files");
    var imgfile = document.getElementById("imgfile");
    function imgChange(obj1, obj2) {
        //获取点击的文本框
        //存放图片的父级元素
        var imgContainer = document.getElementsByClassName(obj1)[0];

        //获取的图片文件
        var fileList = file.files;
        //文本框的父级元素
        var input = document.getElementsByClassName(obj2)[0];
        var imgArr = [];
        for (var i = 0; i < fileList.length; i++) {
            var imgUrl = window.URL.createObjectURL(file.files[i]);
            imgArr.push(imgUrl);
            imgfile.setAttribute("src",imgArr[i]);
            console.log(imgArr[i])
        };
    };
    file.onchange = function() {
        imgChange('z_photo','z_file');
    }
});