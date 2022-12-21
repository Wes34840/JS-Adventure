class App{

    constructor(){
    this.myTitle = document.getElementById("myTitle");
    this.myImage = document.getElementById("myImage");
    this.seasons = [
        {
            "title" : "Seasons",
            "image" : "img/seasons.jpg",
            "background" : "grey"
        },
        {
            "title" : "Spring",
            "image" : "img/spring.jpg",
            "background" : "green"
        },
        {
            "title" : "Summer",
            "image" : "img/summer.jpg",
            "background" : "yellow"
        },
        {
            "title" : "Fall",
            "image" : "img/fall.jpg",
            "background" : "orange"
        },
        {
            "title" : "Winter",
            "image" : "img/winter.jpg",
            "background" : "white"
        }
    ];
    }
    runApplication(){
        console.log("hello world");
    }
    show(index){
        myTitle.textContent = this.seasons[index].title;
        myImage.src = this.seasons[index].image;
        document.getElementById("container").style.background = this.seasons[index].background;
    }
}


let app = new App();
app.runApplication();