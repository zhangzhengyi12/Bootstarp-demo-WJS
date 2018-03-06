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


//    关于轮播图触摸支持的实现
//    首先找到在轮播图上X轴的移动 然后做出响应的动作
    var $carousels = $('.carousel');
    var startx ,endx;
    var dis = 80;
    //获取触摸参数
    $carousels.on('touchstart',function (e) {
        startx = e.originalEvent.touches[0].clientX
    })
    //获取开始的值

    $carousels.on('touchmove',function (e) {
        endx = e.originalEvent.touches[0].clientX
    })
    //通过变量不断的覆盖value 获取到最后一刻的x值
    $carousels.on('touchend',function (e) {
        if(Math.abs(startx - endx) > dis){
            // startx > endx ? $carousels.carousel('next') : $carousels.carousel('prev');

            // if(startx > endx ){
            //     $carousels.carousel('next');
            // }else if(startx < endx ){
            //     $carousels.carousel('prev');
            // }
            //

            startx > endx ? $carousels.carousel('next') : startx < endx ? $carousels.carousel('prev') : 1 ;
        }

    }) //在触摸完成后 触发对比事件 和bootstarp自带的翻页方法

});

// numWidth > $(window).width()
// numWidth < $(window).width()