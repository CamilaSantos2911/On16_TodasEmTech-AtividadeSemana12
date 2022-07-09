const filmes = require('../models/filmes-barbie')


describe("Testes do modelo Livros", () => {
  const filmes = new Filme({
    "id": 10,
    "titulo": "A procura da Felicidade",
    "autor": "Chris Gardner",
    "editora": "EUA"
    
  });
  it("Deve chamar o schema e retornar um novo filme", () =>{
    expect(livro.titulo).toBe("A procura da felicidade");
  });
  it("Deve salvar no banco de dados o novo livro", () =>{
    livro.save().them((dados) => {
      expect(dados.titulo)
    })
  })
})