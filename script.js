
     
        let faces ={
         W : Array(9).fill('white'),
         G : Array(9).fill('Green'),
         B : Array(9).fill('Blue'),
         R : Array(9).fill('Red'),
         Y : Array(9).fill('Yellow'),
         O : Array(9).fill('Orange'),
        };
         
        // draw the cube
         function draw() {
      for (let f in faces) {
        let faceDiv = document.getElementById(f);
        faceDiv.innerHTML = "";
        faces[f].forEach(c => {
          let sq = document.createElement("div");
          sq.className = "square";
          sq.style.background = c;
          faceDiv.appendChild(sq);
        });
      }
    }

    //rotate of cube
    function rotate(move){

      switch (move) {
        case 'U':
          [faces.W[0], faces.W[1], faces.W[2],
          faces.G[0], faces.G[1], faces.G[2],
          faces.B[0], faces.B[1], faces.B[2],
          faces.Y[0], faces.Y[1], faces.Y[2]] = 
          [faces.G[0], faces.G[1], faces.G[2],
           faces.B[0], faces.B[1], faces.B[2],
           faces.Y[0], faces.Y[1], faces.Y[2],
           faces.W[0], faces.W[1], faces.W[2]];

           break;
          case 'M':
           [faces.W[3], faces.W[4], faces.W[5],
            faces.G[3], faces.G[4], faces.G[5],
            faces.B[3], faces.B[4], faces.B[5],
            faces.Y[3], faces.Y[4], faces.Y[5]] =
           [faces.G[3], faces.G[4], faces.G[5],
            faces.B[3], faces.B[4], faces.B[5],
            faces.Y[3], faces.Y[4], faces.Y[5],
            faces.W[3], faces.W[4], faces.W[5]];

            break;
            case 'D':
              [faces.W[6], faces.W[7], faces.W[8],
               faces.G[6], faces.G[7], faces.G[8],
               faces.B[6], faces.B[7], faces.B[6],
               faces.Y[6], faces.Y[7], faces.Y[8]] = 
              [faces.G[6], faces.G[7], faces.G[8],
               faces.B[6], faces.B[7], faces.G[8],
               faces.Y[6], faces.Y[7], faces.Y[8],
               faces.W[6], faces.W[7], faces.W[8]];

               break;
      }
       draw();//“repaint after every twist.”
    }
    //init
     draw(); //“paint the cube the first time.”
     