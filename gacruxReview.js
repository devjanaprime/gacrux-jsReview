console.log( 'js' );

var records = 123;
var truthieOrFalsie = true;

function addToCollection( number ){
  console.log( 'in addToCollection:', number );
  // add number to records if it is of type number
  if( typeof( number ) === 'number' ){
    records += number;
    return true;
  } //end is number
  else{
    return false;
  } // end !is number
} // addToCollection

// to illustrate the value of returning a boolean from a function:
function addRecord(){
  if( addToCollection( 1 ) ){
    console.log( 'record added:', records );
  } // end OK
  else{
    console.log( 'nope.');
  } //end !OK
} // end addRecord

function isTruthie(){
  if( truthieOrFalsie ){
    return true;
  } // truthy
  else{
    return false;
  } // end falsie
} // isTruthie
