let paragraf = document.querySelector('.test');
paragraf.textContent = 'Тестовый коментарий' ;
let key = document.querySelector('.key');
key.onclick=function(){
	
	key.classList.toggle('opened');
}