const turnOn = document.getElementById( 'on');
const turnOff = document.getElementById('off');
const lamp = document.getElementById('lamp');


function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}





function lampOn (){
	if (!isLampBroken () ){
          lamp.src = './img/ligada.png';
	}
	
}



function lampOff() {
	 if ( !isLampBroken () ) {
           lamp.src = './img/desligada.png';
	 }
   
}

function lampBroken(){
	lamp.src = './img/quebrada.png';
}




on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);