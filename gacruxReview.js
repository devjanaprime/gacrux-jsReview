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
