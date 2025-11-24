// As variável com let não pode ser declarada  duas vezes no mesmos escopo(mesmao espaço do código)

  var name = "Steve"
  var name = "Janderson" // Isso vai funcionara, mas não é um boa pratica

  let age = 30;
  let age = 40;  // Isso vai dar erro, pois não se pode delcara a variável duas vezes no mesmo escopo

  // Conclusão, tente não usar var, use let ou const

  // Não podemos declara nome de variáveis com palavras resevadas
  let let = 10;        Isso vai dar erro, pois let é um palavra resevada
  let break = 20;      Isso vai dar erro, pois let é um palavra resevada
  let continue = 30;   Isso vai dar erro, pois let é um palavra resevada
  let function = 40 ;  Isso vai dar erro, pois let é um palavra resevada

