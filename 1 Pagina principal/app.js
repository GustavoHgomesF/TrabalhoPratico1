const dados = {
    "destinos": [
      {
        "id": 1,
        "nome": "Paris, França",
        "descricao": "A cidade do amor e da luz.",
        "conteudo": "Paris é famosa por seus monumentos históricos, gastronomia refinada e atmosfera romântica. Entre os pontos mais icônicos estão a Torre Eiffel, o Museu do Louvre e a Catedral de Notre-Dame.",
        "categoria": "História e Cultura",
        "autor": "João Silva",
        "destaque": true,
        "data": "2025-04-01",
        "imagem_principal": "assets/TorreEiffel.jpeg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/paris1.jpg", "descricao": "Vista da Torre Eiffel ao entardecer" },
          { "id": 2, "src": "assets/paris2.jpg", "descricao": "Passeio pelo Rio Sena" }
        ]
      },
      {
        "id": 2,
        "nome": "Roma, Itália",
        "descricao": "História e cultura em cada esquina.",
        "conteudo": "Roma é um verdadeiro museu a céu aberto, com ruínas antigas como o Coliseu, o Fórum Romano e o Pantheon, além da Cidade do Vaticano com a Basílica de São Pedro.",
        "categoria": "História Antiga",
        "autor": "Maria Oliveira",
        "destaque": true,
        "data": "2025-04-02",
        "imagem_principal": "assets/Roma.jpeg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/roma1.jpg", "descricao": "Coliseu de Roma ao pôr do sol" },
          { "id": 2, "src": "assets/roma2.jpg", "descricao": "Fontana di Trevi" }
        ]
      },
      {
        "id": 3,
        "nome": "Tóquio, Japão",
        "descricao": "Modernidade e tradição lado a lado.",
        "conteudo": "Tóquio mistura tecnologia de ponta com tradições seculares, oferecendo desde templos milenares até arranha-céus futuristas. É um dos centros urbanos mais vibrantes do mundo.",
        "categoria": "Tecnologia e Cultura",
        "autor": "Carlos Tanaka",
        "destaque": false,
        "data": "2025-04-03",
        "imagem_principal": "assets/tokyo.jpg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/toquio1.jpg", "descricao": "Cruzamento de Shibuya" },
          { "id": 2, "src": "assets/toquio2.jpg", "descricao": "Templo Senso-ji" }
        ]
      }
    ]
  };
  
  function carregarCarrossel() {
    const carouselInner = document.getElementById("carousel-inner");
    const destaques = dados.destinos.filter(dest => dest.destaque);
    destaques.forEach((destino, index) => {
      const item = document.createElement("div");
      item.className = `carousel-item${index === 0 ? " active" : ""}`;
      item.innerHTML = `
        <img src="${destino.imagem_principal}" class="d-block w-100" alt="${destino.nome}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${destino.nome}</h5>
          <p>${destino.descricao}</p>
        </div>
      `;
      item.addEventListener('click', () => {
        window.location.href = `detalhes1.html?id=${destino.id}`;
      });
      carouselInner.appendChild(item);
    });
  }
  
  function carregarCards() {
    const container = document.getElementById("cards-destinos");
    dados.destinos.forEach(destino => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card h-100" style="cursor:pointer">
          <img src="${destino.imagem_principal}" class="card-img-top" alt="${destino.nome}">
          <div class="card-body">
            <h5 class="card-title">${destino.nome}</h5>
            <p class="card-text">${destino.descricao}</p>
          </div>
        </div>
      `;
      col.querySelector(".card").addEventListener("click", () => {
        window.location.href = `detalhes1.html?id=${destino.id}`;
      });
      container.appendChild(col);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("carousel-inner")) carregarCarrossel();
    if (document.getElementById("cards-destinos")) carregarCards();
  });
  