class App
{
    constructor(){
        this.myTitle = document.getElementById("myTitle")
        this.myImage = document.getElementById("myImage")
        this.myInput = document.getElementById("myInput")
        this.response = document.getElementById("response")
        this.information = document.getElementById("information")
        this.current = 0
        this.locations = [
            {
                "title": "spot 0",
                "image": "img/0.jpg",
                "possible": "1"
            },
            {
                "title": "spot 1",
                "image": "img/1.jpg",
                "possible": "0, 2, 4, 5"
            },
            {
                "title": "spot 2",
                "image": "img/2.jpg",
                "possible": "1, 3"
            },
            {
                "title": "spot 3",
                "image": "img/3.jpg",
                "possible": "2"
            },
            {
                "title": "spot 4",
                "image": "img/4.jpg",
                "possible": "1"
            },
            {
                "title": "spot 5",
                "image": "img/5.jpg",
                "possible": "1, 6, 10"
            },
            {
                "title": "spot 6",
                "image": "img/6.jpg",
                "possible": "5, 7, 11"
            },
            {
                "title": "spot 7",
                "image": "img/7.jpg",
                "possible": "6, 8, 9"
            },
            {
                "title": "spot 8",
                "image": "img/8.jpg",
                "possible": "7"
            },
            {
                "title": "spot 9",
                "image": "img/9.jpg",
                "possible": "7, 10"
            },
            {
                "title": "spot 10",
                "image": "img/10.jpg",
                "possible": "5, 9"
            },
            {
                "title": "spot 11",
                "image": "img/11.jpg",
                "possible": "6"
            }
        ]   
    }
    runApplication(){
        console.log("hello world")
    }
    show(index){
        this.myTitle.textContent = this.locations[index].title;
        this.myImage.src = this.locations[index].image
    }
    getInput(){
        console.log(this.myInput.value)
        if (this.myInput.value <= 11 && this.locations[this.current].possible.includes(this.myInput.value)){
            this.show(this.myInput.value)
            this.response.textContent = "You move to spot " + this.myInput.value
            this.information.textContent = "your possible choices now are " + this.locations[this.myInput.value].possible
            this.current = this.myInput.value
        }
        else{
            this.response.textContent = "Try to go to a spot that is stated under this"
        }
        this.myInput.value = ""
    }
}

let app = new App();
app.runApplication();