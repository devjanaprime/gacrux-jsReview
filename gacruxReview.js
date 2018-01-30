var records = [];

var prototypeRecord = {
  artist: 'Kendrick Lamar',
  title: 'DAMN',
  year: 2017,
  tracklist: [ [ 'BLOOD', 'DNA', 'YAH', 'ELEMENT', 'FEEL', 'LOYALTY', 'PRIDE' ], [ 'HUMBLE', 'LUST', 'LOVE', 'XXX', 'FEAR', 'GOD', 'DUCKWORTH' ] ]
}

var test1 = {
  artist: 'Childish Gambino',
  title: 'Awaken My Love,!',
  year: 2016,
  tracklist: [ [ 'How I Met Your Mother', 'Have Some Love', 'Boogieman', 'Zombies', 'Riot' ], ['Redbone', 'California', 'Terrified', 'Babyboy', 'The Night', 'Stand Tall' ] ]
}

var test2 = {
  artist: 'Chance The Rapper',
  title: 'Coloring Book',
  year: 2016,
  tracklist: [ [ 'All We Got', 'No Problem', 'Summer Friends', 'Dram', 'Blessings' ], [ 'Same Drugs', 'Mix Tape', 'Angels', 'Juke Jam', 'All Night', 'How Great', 'Smoke Break', 'Finish Line/Down' ] ]
}

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

function findByArtist( artistName ){
  console.log( 'in findByArtist:', artistName );
  // array of records by given artist, if/when found
  var arrayToReturn = [];
  // loop through array and check if artist matches
  for( var i=0; i<records.length; i++ ){
    if( records[ i ].artist === artistName ){
      // match found, push this record into array to return
      arrayToReturn.push( records[ i ] );
    } // end match found
  } // end for
  return arrayToReturn;
} // end findByArtist

function findRecord( recordToFind ){
  console.log( 'in findRecord:', recordToFind );
  console.log( records.indexOf( recordToFind ) );
  var objectToReturn = {
    index: records.indexOf( recordToFind ),
    record: records[ records.indexOf( recordToFind ) ]
  } // end objectToReturn
  return objectToReturn;
} // findRecord

function sameYear( inputRecord ){
  // use findByYear to search for all reecords from this year
  console.log( findByYear( inputRecord.year ) );
} // end sameYear

function findByYear( year ){
  console.log( 'in findByYear:', year );
  var arrayToReturn = [];
  for( var i=0; i<records.length; i++ ){
    // if records[ i ].year matches year given then MATCH!
    if( records[ i ].year === year ){
      arrayToReturn.push( records[ i ] );
    } // end match
  } // end for
  return arrayToReturn;
} // findByYear

/// temp setup for testing - ///
addToCollection( prototypeRecord );
addToCollection( test1 );
addToCollection( test2 );
