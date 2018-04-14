<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="jlert.css">
    <link rel="stylesheet" href="index.css">
    <title>JLert JS</title>
    <style>
        .jlert-container {
    width: 250px;
    min-width: 150px;
    font-size: 14px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99999;
    margin: 20px;
}
.style-jlert {
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #f9f9ea;
}
.text-jlert {
    font-size: 13px;
}
.icon-jlert {
    height: 100%;
    position: absolute;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-jlert {
    left: 0;
    top: 0;
    border-radius: 5px 0px 0px 5px;
}
.right-jlert {
    right: 0;
    top: 0;
    border-radius: 0px 5px 5px 0px;
}
.left-jlert-text {
    margin-left: 35px;
}
.right-jlert-text {
    margin-right: 35px;
}

.top-left-jlert {
    top: 0;
    left: 0;
}
.top-right-jlert {
    top: 0;
    right: 0;
}
.bottom-left-jlert {
    bottom: 0;
    left: 0;
}
.bottom-right-jlert {
    bottom: 0;
    right: 0;
}
.top-center-jlert {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
}
.bottom-center-jlert {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
}
.btn-close-jlert {
    position: absolute;
    z-index: 1;
    right: -8px;
    top: -10px;
    background: whitesmoke;
    box-shadow: 0px 0px 3px #aaa;
    cursor: pointer;
    color: #34495e;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 10px;
    visibility: hidden;
}
.progressBar-jlert {
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 0px;
    border-radius: 0px 0px 5px 5px;
    height: 4px;
    background: #0652DD;
}
.jlert-container:hover > div > .btn-close-jlert {
    visibility: visible;
}
.jlert-container-jlert {
    display: flex;
    flex-direction: column;
}
.jlert-gum-animation {
    animation: gum 1s infinite 0.1s;
}
.jlert-intermittent-animation {
    animation: intermittent 1s infinite 0.1s;
}
@keyframes dblclick {
    40% {
      transform: scale(1.1);
    }
    20%, 60% {
      transform: scale(0.8);
    }
  }
  @keyframes gum {
    30% {
      transform: scaleX(1.25) scaleY(0.75);
    }

    40% {
      transform: scaleX(0.75) scaleY(1.25);
    }

    60% {
      transform: scaleX(1.15) scaleY(0.85);
    }
  }
  @keyframes intermittent {
    25%, 75% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
    </style>
</head>

<body>
    <div class="container-page">
        <header>
            <h2>JLert JS</h2>
        </header>
        <div class="container-panels">
            <div class="main">
                <div class="text-div">
                    <input type="text" class="input" placeholder="Texto de jlert">
                </div>
                <div class="choice-simple-icon">
                    <form action="">
                        <input type="radio" name="typeJlert" value="simple"> Simple
                        <input type="radio" name="typeJlert" value="icon"> Icon
                    </form>
                </div>
                <div class="choice-color">
                    <div class="div-input-color" style="margin-bottom:10px;">
                        <input class="input-color input" type="text" placeholder="HEX RGB RGBA NAME For Background">
                        <span>{wrong | warning | info | done}</span>
                    </div>
                    <div class="div-input-color" style="margin-bottom:10px;">
                        <input class="input-color input" type="text" placeholder="HEX RGB RGBA NAME For Color">
                        <span>{wrong | warning | info | done}</span>
                    </div>
                    <div class="div-input-color" style="margin-bottom:10px;">
                        <input class="input-color input" type="text" placeholder="HEX RGB RGBA NAME For Base icon">
                        <span>{wrong | warning | info | done}</span>
                    </div>
                </div>
                <div class="choice-position">
                    <select>
                        <option value="icon">Position for icon</option>
                        <option value="left">Left icon</option>
                        <option value="right">Right icon</option>
                    </select>
                    <select>
                        <option value="jlert">Posiiton for jlert</option>
                        <option value="top-left">top-left</option>
                        <option value="top-right">top-right</option>
                        <option value="top-center">top-center</option>
                        <option value="bottom-left">bottom-left</option>
                        <option value="bottom-right">bottom-right</option>
                        <option value="bottom-center">bottom-center</option>
                    </select>
                </div>
                <div class="div-options">
                    <div>
                        <input type="checkbox"> Round</div>
                    <div>
                        <input type="checkbox"> Close button</div>
                    <div>
                        <input type="checkbox"> First element</div>
                </div>
                <div class="div-time">
                    <input class="input" type="text" placeholder="Time in ms">
                </div>
                <div class="div-icon-name" style="paddin-top:20px;">
                    <div class="div-input-color">
                        <input class="input-color input" type="text" placeholder="Name icon">
                        <span>{wrong | warning | info | done}</span>
                    </div>
                </div>
            </div>
            <div class="aside">
                    <pre>
                        <h3>animate: {</h3>
    <span>init:</span>     <input type="text" class="input-js">,
    <span>end:</span>      <input type="text" class="input-js">,
    <span>timeInit:</span> <input type="text" class="input-js">,
    <span>timeEnd:</span>  <input type="text" class="input-js">
                        <h3>}</h3>
                    </pre>
            </div>
        </div>
    </div>



    <button id="btnNuevo">nuevo mensaje</button>

    <script>
        let nuevo = document.querySelector('#btnNuevo');
        let contador = 1;
        nuevo.addEventListener('click', function (e) {
            jlert.createAlert('icon', 'Usuario creado exitosamente' + contador, {
                bg: 'info',
                base: 'info',
                round: false,
                color: 'whitesmoke',
                positionIcon: 'right',
                icon: 'info',
                time: 3000,
                closeButton: false,
                position: 'top-right',
                firstElement: false,
                animation: { init: 'gum', end: 'gum', timeInit: 1000, timeEnd: 1000 },
                progressBar: false
            }).openJlert();
            contador++;
        });
    </script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+"
        crossorigin="anonymous"></script>
    <script src="jlert.js"></script>
</body>

</html>
