$.ajax({
    url: '/show/page/shop/leftmenu',
    async: false,
    success: function (ret) {
        if (ret.code == 0) {
            var result = ret.data.result;
            var leftMenuArr = [];
            leftMenuArr.push('<div class="nb-ml-side">');
            leftMenuArr.push('<ul>');
            for (x in result) {
                leftMenuArr.push(' <li  class="nb-z-ico" data-top="0">');
                leftMenuArr.push(' <a class="cl" href="javascript:void(0)">');
                leftMenuArr.push(' <div class="seri-info"><h2 >' + result[x]['name'] + '</h2></div>');
                leftMenuArr.push(' </a>');
                leftMenuArr.push('<div class="nb-mlside-menu cl">');
                var subResult = result[x]['menus_list'];
                for (subIndex in subResult) {

                    leftMenuArr.push('<a class="cl"  ' +
                        'href="' + subResult[subIndex]['link'] + '" ' +
                        'target="'+subResult[subIndex]['target']+'">');
                    leftMenuArr.push('<div class="figure">')
                    leftMenuArr.push('<img src="' + subResult[subIndex]['image'] + '?x-oss-process=image/resize,w_92,h_92"' +
                        ' data-x2="' + subResult[subIndex]['image'] + '">');
                    leftMenuArr.push('</div>');
                    leftMenuArr.push('<p>' + subResult[subIndex]['title'] + '</p>');
                    leftMenuArr.push('</a>');
                }
                leftMenuArr.push('</div>');
                leftMenuArr.push('</li>');
            }
            leftMenuArr.push('</ul></div>');
            var str = leftMenuArr.join("");
            $('#leftmenu').html(str);
        }
    }
});
var pageBlock = {};
var OSS_DOMAIN = "http://oss.static.nubia.cn/";
var SHOP_PAGE_FILL = {
    init_all:function(){
        this.init_slider();
        this.init_book();
        this.init_hot();
        this.init_best_phone_banner();
        this.init_bet();
        this.init_accessory_banner();
        this.init_accessory();
        this.init_hot_comment();
        this.init_vedio();
    },
    init_slider:function(){
        var positon = 206, bee_fn = "nubiabee('trackStructEvent','shop_index_banner','count',1,{})";
        block = pageBlock[positon];
        var htmlArr = [];
        for (x in block) {
            var link = block.link != '' ? block.link : 'javascript:void(0);';
            htmlArr.push('<li>');
            htmlArr.push(this.common_banner(block[x], bee_fn));
            htmlArr.push('</li>');
        }
        var str = htmlArr.join("");
        $("#sliderBlock").html(str);
        $('.bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            speed: 1500,
            responsive: true,
            easing: 'ease-in-out'
        });

        $('.bx-wrapper').on('mouseover mouseenter', function(){
            $('.bx-controls-direction').show();
        })

        $('.bx-wrapper').on('mouseleave', function(){
            $('.bx-controls-direction').hide();
        })
    },
    init_book:function(){
        var positon = 201;
        block = pageBlock[positon];
        var htmlArr = [];
        for (x in block) {
            htmlArr.push('<div class="nb-ml-nr-item i-left">');
            htmlArr.push('<div class="">');
            htmlArr.push(' <a href="'+block[x]['link']+'" target="_blank" onclick="nubiabee(\'trackStructEvent\',\'shop_index_recommend\',\'count\',1,{})">');
            htmlArr.push('<img src="'+ OSS_DOMAIN + block[x]['small_image'] + '"' +
                ' data-x2="' + OSS_DOMAIN + block[x]['big_image'] + '"' +
                'width="310" height="180">');
            htmlArr.push('</a>');
            htmlArr.push('</div>');
            htmlArr.push('</div>');
        }
        var str = htmlArr.join("");
        $("#bookBlock").html(str);
    },
    init_hot:function(){
        var positon = 202, bee_fn = "nubiabee('trackStructEvent','shop_index_hot','count',1,{})";
        block = pageBlock[positon];
        str = this.common_block(block, bee_fn)
        $("#hotBlock").html(str);
    },
    init_bet:function(){
        var positon = 207, bee_fn = "nubiabee('trackStructEvent','shop_index_phone_competitive','count',1,{})";
        block = pageBlock[positon];
        str = this.common_block(block, bee_fn)
        $("#bestBlock").html(str);
    },
    init_accessory:function(){
        var positon = 204, bee_fn = "nubiabee('trackStructEvent','shop_index_accessory_competitive','count',1,{})";
        block = pageBlock[positon];
        str = this.common_block(block, bee_fn)
        $("#accessoryBlock").append(str);
    },
    init_hot_comment:function(){
        var positon = 208;
        block = pageBlock[positon];
        var htmlArr = [];
        for (x in block) {
            htmlArr.push('<a href="'+block[x]['link']+'" onclick="nubiabee(\'trackStructEvent\',\'shop_index_viewnews\',\'count\',1,{})">');
            htmlArr.push('<li style="margin-bottom:13px" class="goods-hover-shows phone-comment">');
            htmlArr.push('<img src="'+ OSS_DOMAIN + block[x]['small_image'] + '"' +
                ' data-x2="' + OSS_DOMAIN + block[x]['big_image'] + '"' +
                '>');
            htmlArr.push('<div class="figure-info">');
            htmlArr.push('<h2 class="" >'+block[x]['title']+'</h2>');
            htmlArr.push('<p class="ellapse-m" >'+block[x]['description']+'</p>');
            htmlArr.push('</div>');
            htmlArr.push('</li>');
            htmlArr.push('</a>');
        }
        var str = htmlArr.join("");
        $("#hotCommentBlock").html(str);
    },
    init_vedio:function(){
        var positon = 209;
        block = pageBlock[positon];
        var htmlArr = [];
        for (x in block) {
            htmlArr.push('<li  style="margin-bottom:13px" class="goods-hover-shows phone-play">');
            htmlArr.push('<a class="btnplay" href="'+ block[x]['file_path'] +'" >')
            htmlArr.push('<div class="figure ">')
            htmlArr.push('<img src="'+ OSS_DOMAIN + block[x]['small_image'] + '"' +
                ' data-x2="' + OSS_DOMAIN + block[x]['big_image'] + '"' +
                '>');
            htmlArr.push('</div>')
            htmlArr.push('</a>')
            htmlArr.push('<div class="figure-info">')
            htmlArr.push('<h2>'+block[x]['title']+'</h2>')
            htmlArr.push('<p>'+block[x]['sub_title']+'</p>')
            htmlArr.push('</div>')
            htmlArr.push('</li>');
        }
        var str = htmlArr.join("");
        $("#vedioBlock").html(str);
        $("#vedioBlock").on("click",'.btnplay',function(e) {
            e.preventDefault();

            $(".nb-sl-close,.nb-video-layer,.bn-vl-box").css("display","block").stop().animate({"opacity":1},500);
            var url=$(this).attr("href");
            var html='<video class="video-p" autoplay controls  src='+url+' style="width:100%"></video>';
            $(".bn-vl-box").html("").append(html);
            nubiabee('trackStructEvent','shop_index_video','count',1,{})
        })
    },
    init_best_phone_banner:function(){
        var positon = 210, bee_fn = "nubiabee('trackStructEvent','shop_index_phone_competitive','count',1,{})";
        if(pageBlock[positon] == undefined || pageBlock[positon].length <= 0){
            return;
        }
        block = pageBlock[positon][0];
        var str = this.common_banner(block, bee_fn);
        $("#bestPhoneBanner").html(str);
    },
    init_accessory_banner:function(){
        var positon = 211, bee_fn = "nubiabee('trackStructEvent','shop_index_accessory_competitive','count',1,{})";
        if(pageBlock[positon] == undefined || pageBlock[positon].length <= 0){
            return;
        }
        block = pageBlock[positon][0];
        var str = this.common_banner(block, bee_fn);
        $("#accessoryBannerBlock").html(str);
    },
    common_block:function(block, bee_fn){
        var htmlArr = [];
        for (x in block) {
            htmlArr.push('<li style="margin-bottom:13px" class="goods-hover-shows">');
            htmlArr.push('<a href="'+block[x]['link']+'" onclick="'+bee_fn+'">');
            if(block[x]['block_products'] != null && block[x]['block_products'] != undefined && block[x]['block_products']['sale_point']['block_image_icon']['is_need']){
                htmlArr.push('<div class="hot-mall" >');
                htmlArr.push('<span>'+block[x]['block_products']['sale_point']['block_image_icon']['text']+'</span>');
                htmlArr.push('</div>');
            }
            htmlArr.push('<div class="nbc-pro-cont">');
            htmlArr.push('<div class="figure">');
            htmlArr.push('<img src="'+ OSS_DOMAIN + block[x]['small_image'] + '"' +
                ' data-x2="' + OSS_DOMAIN + block[x]['big_image'] + '"' +
                'width="290" height="248">');
            htmlArr.push('<div class="figure-info">');
            htmlArr.push('<h2 >'+ block[x]['title'] +'</h2>');
            htmlArr.push('<span>'+ block[x]['sub_title'] +'</span>');
            htmlArr.push('</div>');
            htmlArr.push('</div>');
            if(block[x]['block_products'] != null && block[x]['block_products'] != undefined) {
                htmlArr.push('<div class="price">');
                htmlArr.push('<span> ' +
                    '<sup>￥</sup> ' +
                    '<label>' + block[x]['block_products']['price'] + '</label>' +
                    ' </span>');
                if (block[x]['block_products']['original_price'] > block[x]['block_products']['price']) {
                    htmlArr.push('<span class="price_old" >' + block[x]['block_products']['original_price'] + '</span>')
                }
                htmlArr.push('</div>');
            }
            htmlArr.push('</div>');
            htmlArr.push('</a>');
            if(block[x]['block_products'] != null && block[x]['block_products'] != undefined) {
                htmlArr.push('<div class="nbc-pro-btn">');
                htmlArr.push('<a class="btn-info" href="' + block[x]['link'] + '">查看详情</a>');
                var detailLink = block[x]['block_products']['product_link'] != '' ? "/buy/" + block[x]['block_products']['product_link'] : '/product/s/' + block[x]['block_products']['spec_id'];
                htmlArr.push('<a class="btn-sell" href="' + detailLink + '">立即购买</a>');
                htmlArr.push('</div>')
            }
            htmlArr.push('</li>');
        }
        var str = htmlArr.join("");
        return str;
    },
    common_banner:function(blockItem, bee_fn){
        var htmlArr = [];
        var link = blockItem.link != '' ? blockItem.link : 'javascript:void(0);';
        htmlArr.push('<a href="'+link+'" onclick="'+bee_fn+'">');
        htmlArr.push('<img style="position:relative;" src="'+ OSS_DOMAIN + blockItem['small_image'] + '"' +
            ' data-x2="' + OSS_DOMAIN + blockItem['big_image'] + '"' +
            '>');
        htmlArr.push('</a>')
        var str = htmlArr.join("");
        return str;
    }
};
$.ajax({
    url: '/show/page/shop',
    async: false,
    success: function (ret) {
        pageBlock = ret.data;
        SHOP_PAGE_FILL.init_all();
    }
});
