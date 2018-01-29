console.log( 'js' );

var records = [];
var truthieOrFalsie = true;

function addToCollection( recordName ){
  console.log( 'in addToCollection:', recordName );
  // add number to records if it is of type number
  if( typeof( recordName ) === 'string' ){
    records.push( recordName );
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

function isTruthie( something ){
  if( something ){
    return true;
  } // truthy
  else{
    return false;
  } // end falsie
} // isTruthie

function gimmeBread(){
  return 3 * 'asdf';
}
