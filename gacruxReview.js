console.log( 'js' );

var records = 123;

function aboutTheCollection(){
  console.log( 'in aboutTheCollection', records );
  return records;
} // end aboutTheCollection

function addARecord(){
  console.log( 'in addARecord');
  records++;
  return true;
} // addARecord
