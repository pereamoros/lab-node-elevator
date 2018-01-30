class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction  = "";
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.timeoutId;
  }

  start() {
    this.timeoutId = setInterval( () => this.update, 1000);
  }
  stopE() {
    clearInterval(this.timeoutId);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    //check if waitingList > 0

    this.passengers.push(person.name);
    //delete the passenger from the waitingList

    //add the destination floor of the passenger to the elvator requests

    //show a message --> Julia has enter the elevator
  }
  _passengersLeave() {
    //check if passengers collection. destinationFloor === currentFloor

      //delete that person from the passengers array

    //show a message --> Julia has left the elevator

  }
  floorUp() {
    if(this.floor < 10 && this.floor >= 0){
      this.floor++;
      console.log(this.floor);
    }
  }
  floorDown() {
    if(this.floor <= 10 && this.floor > 0){
      this.floor--;
    }
  }
  call(person) {
    this.requests.push(person);
    this.waitingList.push(person.name);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor ${this.floor}`);
  }
}

module.exports = Elevator;