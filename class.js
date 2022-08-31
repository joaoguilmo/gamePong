class Obj{
    constructor(x,y, tx, ty, color){
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.color = color;
    }

    draw(){

        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.tx, this.ty);

    }
}


class player extends Obj{

    direcao = 8; 

    move(button)
    {
       if(button === "w")
       {
        if(Player1.y > 0)
        {
            Player1.y -= this.direcao;
        }
         
       }
       if(button === "s")
       {
        if(Player1.y < 520)
        {
            Player1.y += this.direcao;

        }
        }

        if(button === "i")
        {
         if(Player2.y > 0)
         {
             Player2.y -= this.direcao;
         }
          
        }
        if(button === "k")
        {
         if(Player2.y < 520)
         {
             Player2.y += this.direcao;
 
         }
         }
    }
}



class ball extends Obj{
    direcao = 6;
    direcaoy = 2; 
    move()
    {
        this.y += this.direcaoy;
        this.x += this.direcao;
        

        if(this.y + this.ty >= Player2.y && 
            this.y + this.ty <= Player2.y + Player1.ty &&
             this.x + this.tx < Player2.x + Player2.tx && 
             this.x + this.tx > Player2.x)
            {
                //this.x = 0;
                this.direcao *= -1;
                
            
            }
        else if(this.y + this.ty >= Player1.y && 
            this.y + this.ty <= Player1.y + Player1.ty && 
            this.x < Player1.x + Player1.tx && 
            this.x > Player1.x )
            {
                //this.x = 0;
                this.direcao *= -1;
                
            }
        else if(this.x < Player1.x && this.x < -Ball.tx)
        {
            this.x = tamanhoTelaX/2 - 15;
            this.y = tamanhoTelaY/2 -15;
            this.direcao *= -1;
            point2++;
        }
        else if(this.x > Player2.x + Player2.tx && this.x > tamanhoTelaX + Ball.tx)
            {
                this.x = tamanhoTelaX/2 - 15;
                this.y = tamanhoTelaY/2 -15;
                this.direcao *= -1;
                point1++;
            }
        if(this.y <= 30)
            {
                this.direcaoy *= -1;
            }
        if(this.y + this.ty >= 720)
            {
                this.direcaoy *= -1;
            }
    }

}



class text
{

    draw(text, x, y, color)
    {
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = text;
        canvas.font = "30px Arial";
        canvas.fillStyle = color;
        canvas.fillText(text, x, y);
        
    }
}