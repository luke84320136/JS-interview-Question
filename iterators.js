const heros = ['Luke Skywalker', 'Han Solo', 'Leia Organa'];

const iterator = heros[Symbol.iterator]();
iterator;

for (const hero of heros) {
  hero;
}
