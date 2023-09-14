const { Meals } = require('../services/db/models/meal.model');

const createMeals = async () => {
  try {
    await Meals.bulkCreate([
      {
        name: 'Ensalada de Quinoa',
        id: 'a11',
        description: 'Ensalada de quinoa con vegetales frescos',
        price: 2500,
        category_id: 1,
        restaurant_id: 1,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fa11.jpg?alt=media&token=bf1d1cf3-a8a7-4a82-b561-53e762b8be78',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Smoothie Verde',
        id: 'b12',
        description: 'Smoothie con espinacas, piña y jengibre',
        price: 1800,
        category_id: 9,
        restaurant_id: 2,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fb12.jpg?alt=media&token=a389c3d4-c216-4070-aee8-f42ac4fcf671',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Sopa de Lentejas',
        id: 'c13',
        description: 'Sopa de lentejas con verduras frescas',
        price: 2200,
        category_id: 3,
        restaurant_id: 3,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fc13.jpg?alt=media&token=64dd267c-28e3-4528-bbb8-23d598524754',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Wrap de Lechuga',
        id: 'd14',
        description: 'Wrap de lechuga con hummus y vegetales',
        price: 1800,
        category_id: 7,
        restaurant_id: 4,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fd14.jpg?alt=media&token=0984c8c0-be7d-41cc-9c5f-50c8e31f1909',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Bol de Acai',
        id: 'e15',
        description: 'Bol de acai con frutas y granola',
        price: 2300,
        category_id: 1,
        restaurant_id: 5,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fe15.jpg?alt=media&token=41676c16-903c-4985-97c4-f7e2d86cbed2',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Tacos de Calabacín',
        id: 'f16',
        description: 'Tacos de calabacín con salsa de aguacate',
        price: 2400,
        category_id: 10,
        restaurant_id: 6,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Ff16.jpg?alt=media&token=63e4d24d-315c-4297-8eb5-0231f58effa4',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Burger Vegana',
        id: 'g17',
        description: 'Hamburguesa vegana con lechuga y tomate',
        price: 2000,
        category_id: 7,
        restaurant_id: 7,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fg17.jpg?alt=media&token=510cad27-2af3-4d3c-9b1b-4013e07af137',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Ensalada de Algas',
        id: 'h18',
        description: 'Ensalada de algas con sésamo y jengibre',
        price: 2500,
        category_id: 1,
        restaurant_id: 8,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fh18.jpg?alt=media&token=521380fd-07af-41f2-9c6e-b08e3f724e52',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Sushi Vegano',
        id: 'i19',
        description: 'Sushi vegano con aguacate y pepino',
        price: 2700,
        category_id: 11,
        restaurant_id: 9,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fi19.jpg?alt=media&token=d4888cc0-d73d-40fe-b30f-bd7012eb2b13',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
      {
        name: 'Bowl de Quinoa',
        id: 'j20',
        description: 'Bowl de quinoa con garbanzos y espinacas',
        price: 2300,
        category_id: 1,
        restaurant_id: 10,
        image:
          'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/meals%2Fj20.jpg?alt=media&token=e7c591fa-f728-450f-9577-407f5738f16b',
        is_vegan: true,
        is_glutenfree: true,
        is_proteinplus: true,
      },
    ]);

    console.log('Meals creados');
  } catch (err) {
    console.log('Error al cargar Meals', err);
  }
};

module.exports = { createMeals };
