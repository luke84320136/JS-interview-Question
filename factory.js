const dog = () => {
  const sound = 'woof';
  return {
    talk: () => console.log(sound)
  };
};

const brak = dog();
brak.talk();
