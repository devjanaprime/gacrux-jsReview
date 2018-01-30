var records = [];

// to illustrate the value of returning a boolean from a function:
function addRecordExample(){
  if( addToCollection( 1 ) ){
    console.log( 'record added:', records );
  } // end OK
  else{
    console.log( 'nope.');
  } //end !OK
} // end addRecord

function addToCollection( newRecord ){
  console.log( 'in addToCollection:', newRecord );
  // add number to records if it is of type number
  if( typeof( newRecord ) === 'object' && newRecord.title && newRecord.artist && newRecord.year  ){
    records.push( newRecord );
    return true;
  } //end is number
  else{
    return false;
  } // end !is number
} // addToCollection
