        let canvas = document.querySelector("#draw-zone");

        let context = canvas.getContext("2d");

        let Card = function(img, x, y, speed, weight, yInertia, bounceX, bounceDecrease) {

            this.img = img;
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.weight = weight;
            this.yInertia = 0.2;
            this.bounceX = 150;
            this.bounceDecrease = 0;

        };

        let Queen = function(x, y, speed, weight) {

            Card.call(this, document.querySelector("#queen-source"),x, y, speed, weight);

        };

        let ThreeCard = function(x, y, speed, weight) {

            Card.call(this, document.querySelector("#three-source"), x, y, speed, weight);

        };

        Queen.prototype = Object.create(Card.prototype);
        ThreeCard.prototype = Object.create(Card.prototype);

        let floor = window.innerHeight - 100;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        Card.prototype.drawCard = function() {

            //console.log("this.bounceDecrease=" + this.bounceDecrease);
           // console.log("loop works!");
            //console.log("this.y=" + this.y);
            //console.log("floor=" + floor);
            //console.log("this.bounceX=" + this.bounceX);
            //console.log("this.x=" + this.x);
            //console.log("this.speed=" + this.speed);
            //console.log("this.img=" + this.img);
            context.drawImage(this.img, this.x, this.y);
            document.querySelector("body").appendChild(this.img);
            this.x -= this.speed;


            if (this.y > floor) {

              console.log("bounce!");
              this.bounceX = 150 - this.bounceDecrease;
              this.bounceDecrease += 80;

              } else {

                this.bounceX -= this.speed;

            };

            if (this.bounceDecrease > 320) {

              this.y = this.y;

            } else {

              this.y -= this.weight + this.bounceX * this.yInertia;

            };


            };

            let queen = new Queen(2500, 500, 20, 25);
            let queen2 = new Queen(2500, 200, 20, 20);
            let queen3 = new Queen(2500, 0, 20, 15);
            let queen4 = new Queen(2500, 0, 20, 50);
            let threeCard = new ThreeCard(2500, 0, 20, 5);

            setInterval(() => queen.drawCard(), 15);
            setInterval(() => queen2.drawCard(), 15);
            setInterval(() => queen3.drawCard(), 15);
            setInterval(() => queen4.drawCard(), 15);
            setInterval(() => threeCard.drawCard(), 15);
