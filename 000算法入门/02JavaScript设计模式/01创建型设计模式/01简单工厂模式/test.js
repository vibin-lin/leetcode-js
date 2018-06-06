

//篮球基类
var BasketBall = function () {
    this.intro = '篮球啊'
}

BasketBall.prototype = {
    getMember: function () {
        console.log('每个队伍要5人')
    },
    getBallSize: function () {
        console.log('篮球很大')
    }
}

//足球基类
var Football = function () {
    this.intro = '足球啊'
}

Football.prototype = {
    getMember: function () {
        console.log('足球在世界范围很流行')
    },
    getBallSize: function () {
        console.log('足球很大')
    }
}

//网球基类
var Tennis = function () {
    this.intro = '网球啊'
}
Tennis.prototype = {
    getMember: function () {
        console.log('每年都有很多网球系列赛')
    },
    getBallSize: function () {
        console.log('网球很小')
    }
}

//工厂
var SportFactory = function (name) {
    switch (name) {
        case 'NBA':
            return new BasketBall()
        case 'WordCup':
            return new Football()
        case 'FrenchOpen':
            return new Tennis()
    }
}

var footnall = SportFactory('WordCup')
console.log(footnall)
console.log(footnall.intro)
footnall.getMember()