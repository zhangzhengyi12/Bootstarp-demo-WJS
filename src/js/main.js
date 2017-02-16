/**
 * Created by zhang on 2017/2/11.
 */

$(function () {

    function resize() {
        var windowWidth = $(window).width();
        //获取屏幕的宽度
        var isSmallScreen = windowWidth < 768;
        //判断是否是小屏幕
        $('#carousel-example-generic > .carousel-inner > .item').each(function(i, item) {
            var $item = $(item);
            var src = ($item.data(isSmallScreen ? 'image-sm' : 'image-lg'));
            $item.css('backgroundImage', 'url("' + src + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + src + '" alt="" />');
            } else {
                $item.empty();
            }
        })
        //获取一个存放item的数组
    }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();
    //控制标签页的容器宽度
    //判断屏幕宽度是否低于容器该有的宽度
    var $ulcontainer = $('.nav-tabs');
    var $scroll = $('.scroll-ul');
    //获取ul对象
    var numWidth = 0;
    $ulcontainer.children().each(function (index,elment) {
        numWidth += elment.clientWidth;
    })
    if( numWidth > $(window).width() ){
        console.log($scroll);
        $scroll.css('overflow-x','scroll');
        $ulcontainer.css('width',numWidth);
    }
    //点击a更换title nodevalue
    var $newstitle = $('.news-title');
    $('#news .nav-pills a').on('click',function () {
        var $this = $(this);
        var title = $this.data('title');
        //创建点击事件 获取dat属性 设置titel的nodevlue
        $newstitle.text(title);
    })

    // $('#nav').affix({
    //     offset: {
    //         top: 100,
    //         bottom: function () {
    //             return (this.bottom = $('.footer').outerHeight(true))
    //         }
    //     }
    // })

});

// numWidth > $(window).width()
// numWidth < $(window).width()