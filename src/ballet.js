const ballet_styles = [
  {
    style: 'Classical',
    'fun-fact': 'Classical ballet has training methods which often get their names by their creators'
  },
  {
    style: 'Neoclassical',
    'fun-fact': 'it has no strict scenery, plot and costumes and minimal set design'
  },
  {
    style: 'Contemporary',
    'fun-fact': 'Dance moves are bigger, fast, and so it is characterized by robust athleticism, floor work, turn-in of the legs, dancing barefoot, acting and mime.'
  }
];


export const getBalletStyles = () => {
  return new Promise ((resolve, reject) => {
    setTimeout( () => {
      resolve(ballet_styles);
    }, 5000)
  });
};