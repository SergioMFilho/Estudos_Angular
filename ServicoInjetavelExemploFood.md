Criando serviço
```
ng generate service food
```
Será gerado um arquivo com a seguinte estrutura:
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FoodService {de
  constructor() { }
```
Analisando este arquivo, percebemos que se trata de uma classe que contém um decorator chamado @Injectable(), importado do pacote @angular/core. Esse decorator indica ao Angular que essa classe é injetável e pode ser utilizada em outras classes.

O decorator @injectable(), por padrão, possui um metadado chamado providedIn. Esse nome vem de provider (provedor), que significa fornecedor. Ele é o responsável por fornecer uma instância dessa classe através da injeção de dependência. Nesse caso, o valor dessa propriedade: providedIn: 'root', indica que o Angular deve fornecer o serviço no injetor raiz, em outras palavras, significa que esse serviço é visível para toda a aplicação e você pode injetá-lo em qualquer lugar do seu projeto.

Então, agora que já sabemos como criar serviços injetáveis, vamos aprender como usá-los em nossos componentes?

## Como injetar serviços em componentes?

No nosso projeto, temos um componente chamado delivery, que é utilizado para renderizar na tela as opções de pedidos num restaurante. Esse componente precisa do serviço que criamos anteriormente, o FoodService, para a escolha do tipo de refeição.

Em alguns dias da semana, o restaurante faz uma promoção para as pessoas que quiserem pedir, além da refeição, uma sobremesa ou uma bebida. Nesse caso, o FoodService precisa se comunicar com outros dois serviços, o DessertService e o DrinkService.

Sem a injeção de dependência
```
export class DeliveryComponent {

   drinkService = new DrinkService();
   dessertService = new DessertService();
   foodService = new FoodService(this.dessertService, this.drinkService);

  //métodos da classe
}
```

Com a injeção de Dependência
```
export class DeliveryComponent {

  constructor(private foodService: FoodService) { }

  //métodos da classe
}
```

## Usando serviços em outros serviços
```
import { DrinkService } from '../drink/drink.service';
import { DessertService } from '../dessert/dessert.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private dessertService: DessertService,
    private drinkService: DrinkService
  ) { }

  food!: string;

  selectFood(food: string) {
    this.food = food;
    console.log(this.food);
  }

  selectFoodAndDessert(food: string, dessert: string) {
    this.selectFood(food);
    this.dessertService.selectDessert(dessert);
  }

  selectFoodAndDrink(food: string, drink: string) {
    this.selectFood(food);
    this.drinkService.selectDrink(drink);
  }

}
```
Resumindo, fizemos a injeção dos serviços DrinkService e DessertService no FoodService e injetamos apenas este último no nosso componente. Na imagem abaixo, pelas mensagens no console do navegador, vemos que no componente delivery podemos consumir informações dos três serviços. Tudo isso, por meio da injeção de dependência! Que demais, né?
![InjecaoServicos](./Screenshot%20from%202023-07-06%2015-37-26.png)

Referências : 

`https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam?_gl=1*12iajl3*_ga*MzI2NjA0MTAzLjE2NzgyNzQxMjA.*_ga_59FP0KYKSM*MTY4ODY1ODc1OS4zMS4xLjE2ODg2NjYwMzAuMC4wLjA.*_fplc*TndMeG10RWY0cUt1eTEzRzlQOU9SSVBIUjlyY2EzSlJwQkdvTE05VVBlOVFhak9WdnhyTnBiRWxDR0xMNkRZc3hqcEZ3bzJFQVJVMjZ5Ymk0S3BDb3QwJTJGaHJUcCUyQlRrQWNBOVJ1WXdxamIwOVByZTdlWnclMkZNeDBBSlI4anJRJTNEJTNE`