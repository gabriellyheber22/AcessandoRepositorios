
function repos() {
    let usuario = document.getElementById('user').value;
    let input = document.getElementById('user');
    let retornoGit = document.getElementById('retorno-git');
    let divLista = document.getElementById('lista-repositorio');
    let listaRepositirios = document.getElementById('lista');
    let tituloLista = document.getElementById('titulo-lista')
    let statusCarregando = document.getElementById('carregando');
    listaRepositirios.innerText = '';
    input.value = ''
    statusCarregando.style.display = 'block';
    axios.get('https://api.github.com/users/' + usuario + '/repos')
        .then(function (response) {
            retornoGit.style.display ='flex'
            statusCarregando.style.display = 'none';
            //O forEach() percorre cada item do array e executa a função fornecida para cada elemento. Nesse caso, 'repositorio' é o item atual da iteração
            response.data.forEach((repositorio) => {
               
                item = document.createElement('li');//Criando o item
                listaRepositirios.appendChild(item);//Adicionando o item a lista
                let itemTextName = document.createTextNode(repositorio.name); //pegando o retorno do repositorio e criando um text node
                let itemLink = document.createElement('a'); //Criando tag de link para atribuir a URL do repositorio
                itemLink.setAttribute('href', ''+repositorio.html_url+''); //Adicionando os atributos
                itemLink.setAttribute('target', 'blank')//Abrir link em nova
                itemLink.appendChild(itemTextName); //Encapsulando o nome do repositorio com a sua url
                item.appendChild(itemLink); //Adicionando o link ao <li>
                
            });
        })
        .catch(function (error) {
            tituloLista.style.display ='none';
            retornoGit.style.display ='flex';
            retornoGit.style.alignItems = 'center'
            divLista.style.display ='flex';
            divLista.style.justifyContent = 'center';
            divLista.style.alignItems = 'center'
            divLista.style.flexDirection = 'column';
            statusCarregando.style.display = 'none';
            item = document.createElement('li');//Criando o item
                listaRepositirios.appendChild(item);
                let itemTextError = document.createTextNode('Código do erro 404');
               
                item.appendChild(itemTextError);
        })
}






