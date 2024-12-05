
//GALERIA
//Construção do HTML da página "Galeria" por meio de requisição a documento JSON
const imagens = document.querySelector("#container-galeria");

        fetch("../data/gallery.json").then((response)=> {
            response.json().then((dados) => {
                dados.imagens.map((imagem) => {
                    imagens.innerHTML += `<div class="col-md-6"><img class = "galeria" src="${imagem.caminho}" alt="${imagem.descricao}"></div>`
                })
              })
            
        })


//MENU
//Construção do HTML da página de cardápio por meio de requisição a elemento JSON
const cardsContainer = document.querySelector("#container-menu");

        fetch("../data/menu.json").then((response)=> {
            response.json().then((dados) => {
                dados.menu.map((menuOption) => {
                    cardsContainer.innerHTML += `<div class="card m-4">
                <img src="${menuOption.image}" alt="${menuOption.alt}" class="car-img-top">
                <div class="card-body">
                    <h5 class="card-title">${menuOption.title}</h5>
                    <div class="card-text">${menuOption.description}</div>
                </div>
            </div>`
                })
              })
            
        })



//FORMULÁRIO DE CONTATO
//Variáveis que armazenam os valores dos componentes do DOM
const form = document.getElementById("form");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");


//Monitoração do botão de submit e dos inputs.
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkForm();    
})

email.addEventListener("blur", ()=>{checkInputEmail()})
subject.addEventListener("blur", ()=>{checkInputSubject()})
message.addEventListener("blur", ()=>{checkTextarea()})


//FUNÇÕES PARA VERIFICAR O PREENCHIMENTO DOS CAMPOS
function checkInputSubject(){
    const subjectValue = subject.value;
    if (subjectValue ===""){errorInput(subject, "Assunto é um campo obrigatório!") }
    else{cleanErrorMessage(subject);}
}

function checkInputEmail(){
    const emailValue = email.value;
   //Regex para verificar o formato do e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(emailValue)){errorInput(email, "Insira um email válido!")}
    else{cleanErrorMessage(email);}
}

function checkTextarea(){
    const textArea = message.value;
    if (textArea ===""){errorInput(message, "Insira sua mensagem!")}
    else{cleanErrorMessage(message);}
}


//Função para imprimir na tela a mensagem de mau preenchimento dos campos.
function errorInput(input, message){
    const formItem = input;
    const parent = input.parentElement;
    const textMessage = parent.querySelector(".error-text");
    textMessage.innerText = message;    
    formItem.className = "form-control error";
}

//Função para apagar da tela a mensagem de mal preenchimento
function cleanErrorMessage(input){
     const formItem = input;
     const parent = input.parentElement;
     const textMessage = parent.querySelector(".error-text");
     formItem.className = "form-control"
     textMessage.innerText = "";

}

//Função para verificar o formulário chamada ao clicar o botão "Enviar"
function checkForm(){
    checkInputEmail();
    checkInputSubject();
    checkTextarea();

    //Confere se há mau preenchimento por meio da verificação da existência da classe "error".
    const formItems = form.querySelectorAll(".form-control");
    const isValid = [...formItems].every((item)=>{
        return item.className ==="form-control";
    })

    //Impressão na tela do alerta de bom preenchimento dos campos
    if (isValid===true){
        const showAlert = document.getElementById("show-alert");
        showAlert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">Mensagem validada com sucesso!
                            <button type="button" class="btn-close" data-bs-dismiss = "alert" aria-label="close"></button></div>`
        email.value = "";
        subject.value = "";
        message.value = "";
    }

}