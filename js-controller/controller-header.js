app.controller('myHeader', function ($scope) {
    $scope.domain = '';
    $scope.officialDomain = 'https://www.nubia.com';
    $scope.shopDomain = 'https://shop.nubia.com';
    $scope.oosdomain = 'https://oss.static.nubia.cn/';
    $scope.phoneUrl = 'https://www.nubia.com/show/page/block?pageType=8&pagePosition=801';
    $scope.loginUrl = 'https://www.nubia.com/user/pass/userInfo';
    // $scope.phones =[{"id":1043,"title":"Z18mini","link":"https://www.nubia.com/nubiaZ18mini","small_image":"blockimage/152116389452.png"}]
    $scope.phones = eval("(" + "[{\"id\":1043,\"title\":\"Z18mini\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/152343491468.png\",\"small_image\":\"blockimage/152343491442.png\",\"file_path\":\"\",\"link\":\"https://www.nubia.com/nubiaZ18mini\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":993,\"original_price\":1799.00,\"price\":1799.00,\"product_link\":\"nubiaz18mini/black6gb64gb\",\"sale_point\":{\"sale_point\":\"left\",\"block_image_icon\":{\"is_need\":true,\"text\":\"新品\",\"color\":\"#e60012\"}}}},{\"id\":1004,\"title\":\"V18 全面屏\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/152152399040.png\",\"small_image\":\"blockimage/152152399030.png\",\"file_path\":\"\",\"link\":\"https://www.nubia.com/nubiav18\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":983,\"original_price\":1299.00,\"price\":1299.00,\"product_link\":\"nubiav18/black4gb64gb\",\"sale_point\":{\"sale_point\":\"\",\"block_image_icon\":{\"is_need\":false,\"text\":\"\",\"color\":\"\"}}}},{\"id\":867,\"title\":\"Z17S全面屏\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/150779043916.png\",\"small_image\":\"blockimage/150779044081.png\",\"file_path\":\"\",\"link\":\"https://www.nubia.com/nubiaz17s\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":935,\"original_price\":2699.00,\"price\":2499.00,\"product_link\":\"nubiaz17s/black6gb64gb\",\"sale_point\":{\"sale_point\":\"left\",\"block_image_icon\":{\"is_need\":true,\"text\":\"直降200\",\"color\":\"#e60012\"}}}},{\"id\":868,\"title\":\"Z17miniS小牛8\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/150779051631.png\",\"small_image\":\"blockimage/150779051689.png\",\"file_path\":\"\",\"link\":\"https://www.nubia.com/nubiaz17minis\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":938,\"original_price\":1499.00,\"price\":1299.00,\"product_link\":\"nubiaz17minis/black6gb64gb\",\"sale_point\":{\"sale_point\":\"left\",\"block_image_icon\":{\"is_need\":true,\"text\":\"直降200\",\"color\":\"#e60012\"}}}},{\"id\":706,\"title\":\"Z17 旗舰版\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/150112378146.png\",\"small_image\":\"blockimage/150112378262.png\",\"file_path\":\"\",\"link\":\"http://www.nubia.com/nubiaz17\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":882,\"original_price\":2499.00,\"price\":2299.00,\"product_link\":\"nubiaZ17/black\",\"sale_point\":{\"sale_point\":\"\",\"block_image_icon\":{\"is_need\":false,\"text\":\"\",\"color\":\"\"}}}},{\"id\":996,\"title\":\"N3\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/152116389431.png\",\"small_image\":\"blockimage/152116389452.png\",\"file_path\":\"\",\"link\":\"https://www.nubia.com/nubian3\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":981,\"original_price\":1799.00,\"price\":1799.00,\"product_link\":\"nubian3/black4gb64gb\",\"sale_point\":{\"sale_point\":\"\",\"block_image_icon\":{\"is_need\":false,\"text\":\"\",\"color\":\"\"}}}},{\"id\":664,\"title\":\"Z17mini\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/149750591139.png\",\"small_image\":\"blockimage/149750591120.png\",\"file_path\":\"\",\"link\":\"http://www.nubia.com/nubiaz17mini\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":854,\"original_price\":1499.00,\"price\":1099.00,\"product_link\":\"nubiaz17mini/whitegold4g\",\"sale_point\":{\"sale_point\":\"left\",\"block_image_icon\":{\"is_need\":true,\"text\":\"直降400\",\"color\":\"#e60012\"}}}},{\"id\":665,\"title\":\"Z11\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/149622411591.png\",\"small_image\":\"blockimage/149622411546.png\",\"file_path\":\"\",\"link\":\"http://www.nubia.com/nubiaz11\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":776,\"original_price\":2299.00,\"price\":1999.00,\"product_link\":\"nubiaz11/whitegold\",\"sale_point\":{\"sale_point\":\"\",\"block_image_icon\":{\"is_need\":false,\"text\":\"\",\"color\":\"\"}}}},{\"id\":752,\"title\":\"N2\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/149914648730.png\",\"small_image\":\"blockimage/149914648717.png\",\"file_path\":\"\",\"link\":\"http://shop.nubia.com/nubian2\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0,\"block_products\":{\"spec_id\":827,\"original_price\":1799.00,\"price\":1599.00,\"product_link\":\"nubian2/black64g\",\"sale_point\":{\"sale_point\":\"\",\"block_image_icon\":{\"is_need\":false,\"text\":\"\",\"color\":\"\"}}}},{\"id\":774,\"title\":\"M2 畅玩版\",\"sub_title\":\"\",\"page_type\":8,\"big_image\":\"blockimage/150149235598.png\",\"small_image\":\"blockimage/15014923554.png\",\"file_path\":\"\",\"link\":\"http://www.nubia.com/nubiam2_fluency\",\"media_type\":1,\"description\":\"\",\"title_position\":0,\"content_bg_color\":0}]" + ")");

    $scope.username = '';
    // $phone = JSON.parse({ "id": 1043, "title": "Z18mini", "link": "https://www.nubia.com/nubiaZ18mini", "small_image": "blockimage/152116389452.png" })

    // ----------mask--------


    var mobile = $('#mobile')

    var tool = $('#tool')
    var span1 = $('.span1')
    var span2 = $('.span2')
    var mask_mobile = $('.showsmobiles-mask')
    var list = $('.list a')
    // console.log(list)
    mask = function (type, mask) {
        span2.click(function () {
            for (i = 0; i < list.length; i++) {
                if (i <= 6) {
                    list.eq(i).hide()
                    // console.log(list.eq(i))
                }
            }
        })
        span1.click(function () {
            for (i = 0; i < list.length; i++) {
                list.eq(i).show()
            }
        })
        type.hover(
            // console.log(e)
            function (e) {
                mask.show()
                e.stopPropagation()
                // console.log(e)

            }
        );
        mask.hover(
            // console.log(e)
            function (e) {
                mask.show()
                // console.log(e)

            },
            function () {
                mask.hide()
            }
        );
    }
    mask(mobile, mask_mobile)
})
