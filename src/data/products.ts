import { v4 as uuidv4 } from 'uuid';

interface CategoryProps {
    title: string
}

interface ProductProps {
    id: string
    name: string
    image: string
    description: string
    categories: CategoryProps[]
    price: number
    amount: number
}

export const data = [
    {
        id: uuidv4(),
        name: 'Expresso Tradicional',
        image: 'coffee.png',
        description: 'O tradicional café feito com água quente e grãos moídos',
        categories: ['tradicional'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Expresso Americano',
        image: 'coffee-3.png',
        description: 'Expresso diluído, menos intenso que o tradicional',
        categories: ['tradicional'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Expresso Cremoso',
        image: 'coffee-11.png',
        description: 'Café expresso tradicional com espuma cremosa',
        categories: ['tradicional'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Expresso Gelado',
        image: 'coffee-7.png',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        categories: ['tradicional', 'gelado'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Café com Leite',
        image: 'coffee.png',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        categories: ['tradicional', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Latte',
        image: 'coffee-10.png',
        description: 'O tradicional café feito com água quente e grãos moídos',
        categories: ['tradicional', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Capuccino',
        image: 'coffee-11.png',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        categories: ['tradicional', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Macchiato',
        image: 'coffee-8.png',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        categories: ['tradicional', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Mocaccino',
        image: 'coffee-1.png',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        categories: ['tradicional', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Chocolate Quente',
        image: 'coffee-4.png',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        categories: ['especial', 'com leite'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Cubano',
        image: 'coffee.png',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        categories: ['especial', 'alcoólico', 'gelado'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Havaiano',
        image: 'coffee-9.png',
        description: 'Bebida adocicada preparada com café e leite de coco',
        categories: ['especial'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Cubano',
        image: 'coffee-5.png',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        categories: ['especial', 'alcoólico', 'gelado'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Árabe',
        image: 'coffee-2.png',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        categories: ['especial', 'alcoólico', 'gelado'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Cubano',
        image: 'coffee.png',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        categories: ['especial'],
        price: 9.90,
        amount: 1,
    },
    {
        id: uuidv4(),
        name: 'Irlandês',
        image: 'coffee-5.png',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        categories: ['especial', 'alcoólico'],
        price: 9.90,
        amount: 1,
    }
]