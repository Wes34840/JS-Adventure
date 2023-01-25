class App
{
    constructor(){
        this.myTitle = document.getElementById("myTitle")
        this.myImage = document.getElementById("myImage")
        this.buttonForward = document.getElementById("buttonForward")
        this.buttonRight = document.getElementById("buttonRight")
        this.buttonLeft = document.getElementById("buttonLeft")
        this.buttonBack = document.getElementById("buttonBack")
        this.response = document.getElementById("response")
        this.information = document.getElementById("information")
        this.current = 0
        this.floorImg = document.getElementById("floorImg")
        this.layOut = [
            "img/floors/floor0.png",
            "img/floors/floor1.png",
            "img/floors/floor2.png"
        ]
        this.locations = [
            {
                "title": "spot 1",
                "image": "img/1.jpg",
                "directions": {
                    "Forward": 9,
                    "Right": 3,
                    "Left": 6,
                    "Back": 2
                },
                "possible": "Forward, Right, Left, Back"
            },
            {
                "title": "spot 2",
                "image": "img/2.jpg",
                "directions": {
                    "Back": 1
                },
                "possible": "Back"
            },
            {
                "title": "spot 3",
                "image": "img/3.jpg",
                "directions": {
                    "Right": 5,
                    "Left": 4, 
                    "Back": 1
                },
                "possible": "Right, Left, Back"
            },
            {
                "title": "spot 4",
                "image": "img/4.jpg",
                "directions": {
                    "Back": 3
                },
                "possible": "Back"
            },
            {
                "title": "spot 5",
                "image": "img/5.jpg",
                "directions": {
                    "Left": 3
                },
                "possible": "Left"
            },
            {
                "title": "spot 6",
                "image": "img/6.jpg",
                "directions": {
                    "Forward": 7,
                    "Right": 8,
                    "Back": 1
                },
                "possible": "Forward, Right, Back"
            },
            {
                "title": "spot 7",
                "image": "img/7.jpg",
                "directions": {
                    "Back": 6
                },
                "possible": "Back"
            },
            {
                "title": "spot 8",
                "image": "img/8.jpg",
                "directions": {
                    "Back": 6
                },
                "possible": "Back"
            },
            {
                "title": "spot 9",
                "image": "img/9.jpg",
                "directions": {
                    "Right": 10,
                    "Left": 11,
                    "Back": 1
                },
                "possible": "Right, Left, Back"
            },
            {
                "title": "spot 10",
                "image": "img/10.jpg",
                "directions": {
                    "Back": 9
                },
                "possible": "Back"
            },
            {
                "title": "spot 11",
                "image": "img/11.jpg",
                "directions": {
                    "Forward": 15,
                    "Right": 12,
                    "Left": 9
                },
                "possible": "Forward, Right, Left"
            },
            {
                "title": "spot 12",
                "image": "img/12.jpg",
                "directions": {
                    "Forward": 14,
                    "Left": 13,
                    "Back": 11
                },
                "possible": "Forward, Left, Back"
            },
            {
                "title": "spot 13",
                "image": "img/13.jpg",
                "directions": {
                    "Back": 12
                },
                "possible": "Back"
            },
            {
                "title": "spot 14",
                "image": "img/14.jpg",
                "directions": {
                    "Back": 12
                },
                "possible": "Back"
            },
            {
                "title": "spot 15",
                "image": "img/15.jpg",
                "directions": {
                    "Back": 11,
                    "Right": 16,
                    "Left": 17
                },
                "possible": "Back, Right, Left"
            },
            {
                "title": "spot 16",
                "image": "img/16.jpg",
                "directions": {
                    "Back": 15
                },
                "possible": "Back"
            },
            {
                "title": "spot 17",
                "image": "img/17.jpg",
                "directions": {
                    "Back": 15
                },
                "possible": "Back"
            },
        ]   
    }
    runApplication(){
        console.log("hello world")
    }
    show(index){
        index--
        this.current = index
        if (this.current <= 7){
            this.floorImg.src = this.layOut[0]
        }
        else if (this.current >= 8 && this.current <= 12){
            this.floorImg.src = this.layOut[1]
        }
        else{
            this.floorImg.src = this.layOut[2]
        }
        this.response.textContent = "You move to " + this.locations[this.current].title
        this.information.textContent = "Your possible choices now are " + this.locations[this.current].possible
        this.myTitle.textContent = this.locations[index].title;
        this.myImage.src = this.locations[index].image
        this.buttonVisible()
    }
    buttonVisible(){
        this.buttonForward.style.visibility = "hidden"
        this.buttonRight.style.visibility = "hidden"
        this.buttonLeft.style.visibility = "hidden"
        this.buttonBack.style.visibility = "hidden"
        if (this.locations[this.current].possible.includes("Forward")){
            this.buttonForward.style.visibility = "visible"
        }
        if (this.locations[this.current].possible.includes("Right")){
            this.buttonRight.style.visibility = "visible"
        }
        if (this.locations[this.current].possible.includes("Left")){
            this.buttonLeft.style.visibility = "visible"
        }
        if (this.locations[this.current].possible.includes("Back")){
            this.buttonBack.style.visibility = "visible"
        }
    }
    goDir(direction){
        let point_index = this.locations[this.current].directions[direction]
        this.show(point_index)

    }
}

let app = new App();
app.runApplication();