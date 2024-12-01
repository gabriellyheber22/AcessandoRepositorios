function repos() {
    let usuario = document.getElementById('user').value;
    let listaRepositirios = document.getElementById('lista');
    listaRepositirios.innerText = '';
    axios.get('https://api.github.com/users/' + usuario + '/repos')
        .then(function (response) {
            //O forEach() percorre cada item do array e executa a função fornecida para cada elemento. Nesse caso, 'repositorio' é o item atual da iteração
            response.data.forEach((repositorio) => {
                item = document.createElement('li');//Criando o item
                listaRepositirios.appendChild(item);//Adicionando o item a lista
                let itemTextName = document.createTextNode(repositorio.name); //pegando o retorno do repositorio e criando um text node
                let itemLink = document.createElement('a'); //Criando tag de link para atribuir a URL do repositorio
                itemLink.setAttribute('href', ''+repositorio.html_url+''); //Adicionando os atributos
                itemLink.setAttribute('target', 'blank')//Abrir link em nova aba
                itemLink.appendChild(itemTextName); //Encapsulando o nome do repositorio com a sua url
                item.appendChild(itemLink); //Adicionando o link ao <li>
            });
        })
        .catch(function (error) {
            console.warn(error);
        })
}

