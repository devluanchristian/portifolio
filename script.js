//selecionar class no html
let hamburguer = document.querySelector('.hamburguer'); 


//ação
hamburguer.addEventListener("click", function(e){
    //elemento pai
    document.querySelector('.container').classList.toggle('show-menu')
    
            //posso usar também elementos filhos
    //let sidebar = document.querySelector('.sidebar').classList.toggle('show-menu');
    //let hamburguer2 = document.querySelector('.hamburguer').classList.toggle("show-menu");


});