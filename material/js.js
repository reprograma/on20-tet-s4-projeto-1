let dadoemail = "teste@reprograma.com";
let dadosenha = "teste123";
let login = "digite seu login";
let senha = "digite sua senha";


if (prompt(login) == dadoemail) {
    prompt(senha)
  }  else if (prompt(login) !== dadoemail) {
    alert('email incorreto')
  }
  if (prompt(senha) == dadosenha) {
    alert('voce esta logado')
  } else if (prompt(senha) !== dadosenha){
    alert('senha incorreta')
  }
