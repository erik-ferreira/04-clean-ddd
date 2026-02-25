# DDD (Domain-drive Design) | Design dirigido à domínio

- Não tem relação com código, é uma forma de converter um problema real em um modelo de software
- É uma forma de manter uma comunicação clara e padronizada entre todas as partes envolvidas no desenvolvimento de um software

## Domínio

- O ponto mais importante do DDD

### Domain Experts

- Entender de fato o problema do cliente antes de começar a desenvolver o software
- São as pessoas que entendem a fundo a problemática que estamos resolvendo com o software
- Exemplo: Um software para agência de viagens; A pessoa que esta no balcão, vendendo as viagens no dia a dia, é uma dessas domain experts

### Linguagem Ubíqua

- A partir de várias conversas com os domain experts, conseguimos criar uma linguagem comum, que é a linguagem ubíqua, ou seja, uma linguagem universal onde as pessoas envolvidas no desenvolvimento do software, conseguem conversar por igual

### Agregados

### Value Objects

### Eventos de domínio

### Subdomínios (Bounded Contexts)

### Entidades (Entities)

- Tudo que vai ser mantido pelo usuário na aplicação.
- Exemplo em uma situação de forum:
  - Dificuldade em saber as dúvidas dos alunos
  - Eu tenho que responder os alunos e eu me perco em quais dúvidas já foram respondidas

  - Resultado: Palavras chave em conversas com os domain experts (dúvidas, responder)

### Casos de uso

- Como as entidades vão conversar entre si
- Ex: Eu e Alunos seria uma entidade, e o fato de responder seria um caso de uso

## Design

- Como a aplicação vai ser desenhada
- Converter o problema do cliente em algo palpável, um software que resolve esse problema
