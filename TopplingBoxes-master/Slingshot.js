class Slingshot{
    constructor(bodyA,pointB)
    {
          var options = {
          bodyA:bodyA,
          pointB:pointB,
          length :10,
          stiffness : 0.04

          }
this.sling1 = loadImage("images/sling1.png")
this.sling2 = loadImage("images/sling2.png")
this.sling3 = loadImage("images/sling3.png")


 this.pointB = pointB
          this.slings = Constraint.create(options)
          World.add(world,this.slings)
    }
 fly (){
     this.sling1.bodyA = null
 }
    display()
    {
       image(this.sling1,200,20)
       image(this.sling2,170,20)
     if (
         this.slings.bodyA
     )
        {var pointA = this.slings.bodyA.position
        var pointB = this.pointB
        strokeWeight (4)
        stroke (48,22,8)
        fill ("black")
        line (pointA.x-25,pointA.y,pointB.x-10,pointB.y)
        line (pointA.x-25,pointA.y,pointB.x+30,pointB.y-3)
        }

}

}

