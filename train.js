
let brain;



function train(){
  
  
  let options = {
    inputs: 34,
    outputs: 2,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  brain.loadData("upload/YCMA.json",dataReady);
  

  

}


function dataReady() {
  brain.normalizeData();
  brain.train({epochs: 50}, finished); }
  function finished() {
  console.log('model trained');
  brain.save();
}






