

class App{
    
    runApplication(){
        const myImage = document.getElementById("myImage");
        const myTitle = document.getElementById("myTitle");
        const container = document.getElementById("container");
        console.log("Hello world");
    }
    changeImage(index){
        let paintings = [
            "img/arma.gif", 
            "img/aldi-parking.gif", 
            "img/fis.jpg", 
            "img/just-about.jpg", 
            "img/BUP.png", 
            "img/morbin-time.jpeg"
        ];
        let titles = [
            "Arma",
            "Aldi parking",
            "Fis",
            "Ronald Mcdonald i guess",
            "B U P",
            "It's morbin time"
        ];
        myImage.src = paintings[index];
        myTitle.innerHTML = titles[index]
    }

}

let app = new App();
app.runApplication();