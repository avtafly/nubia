    app.controller('BannerController', function ($scope,$interval) {
        $scope.age = 0;
        $scope.banners = [
            'https:oss.static.nubia.cn/blockimage/152947689579.jpg',
            'https:oss.static.nubia.cn/blockimage/153000606486.jpg',
            'https:oss.static.nubia.cn/blockimage/152456344748.jpg',
            'https:oss.static.nubia.cn/blockimage/152360701694.jpg',
        ];
        $interval(function () {
            $scope.age += 1;
            if ($scope.age > 3) {
                $scope.age = 0
            }
        }, 2000);
    });
    // var step = 0;
    // setInterval(function () {
    //     $('.banner ul').find("li").css({ "display": "none", "opacity": 0 });
    //     step++;
    //     if (step > 3) { step = 0 }
    //     $('.banner ul').find("li").eq(step).css({ "display": "block", "opacity": 1 });
    // }, 2000)