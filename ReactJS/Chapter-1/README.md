## IMUTABILIDADE

Utilizado na programação funcional para criar uma nova variável na memória.
Para o React, é mais facil e performático dele saber as alterações em uma nova variável do que comparar com uma que já existe.

```js
const users = ['name 1', 'name 2']

// no
users.push('name 3')

// yes
const newUsers = [...users, 'name 3']
```
