$(function() {
    $(".enter").load("enter.html?v=0.2.0");
    // $("#partners").load("partners.html");
    $("footer").load("footer.html?v=0.2.0");
    $("nav").load("header.html?v=0.2.0", function () {
        let links = $("header li a"),
            index = 0, //默认第一个菜单项
            //取当前URL最后一个/后面的文件名，pop方法是删除最后一个元素并返回最后一个元素
            url = location.href.split("?")[0].split("/").pop();
        if (url) {//如果有取到，则进行匹配，否则默认首页（即index所指向的那个）
            for (var i = 0; i < links.length; i++) {//遍历menu中的链接地址
                if (links[i].href.indexOf(url) != -1) {
                    index = i;
                    break;
                }
            }
        }
        $("header li a").eq(index).addClass("active");//给对应的<li>增加选中样式
    });
});
