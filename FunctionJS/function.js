var Album = {
    init: function (artist, name, year) {
        this.artist= artist;
        this.name=name;
        this.year=year;
    },
    desc: function () {
        var show= this.name+" by "+this.artist+" ( "+this.year+" ).";
        return show;
    }
};

var Albums = [];

var alb1 = Object.create(Album);
alb1.init("Kanye West", "My Beautiful Dark Twisted Fantasy", "2010");

var alb2 = Object.create(Album);
alb2.init("Kanye West", "Yeezus", "2013");

var alb3 = Object.create(Album);
alb3.init("Kanye West","The Life Of Pablo", "2016");

var alb4 = Object.create(Album);
alb4.init("Kanye West", "The College Dropout", "2004");

Albums.push(alb1);
Albums.push(alb2);
Albums.push(alb3);
Albums.push(alb4);

Albums.forEach(function (Album){
    console.log(Album.desc());
});
