var beach = (function() {
  var name = 'not specified';
  var location_longitude = 'unknown';
  var location_latitude = 'unknown';

  return {
    getName: function() {
      return name;
    },

    setName: function(n) {
      name = n;
    },

    getLatitude: function () {
      return location_latitude;
    },

    setLatitude: function(l) {
      location_latitude = l;
    },

    getLongitude: function () {
      return location_longitude;
    },

    setLongitude: function(l) {
      location_longitude = l;
    },

    printLocation: function() {
      console.log(name + " beach is located at Lat:" + location_latitude + ", Lng: " + location_longitude);
    }

  };

}) ();

beach.setName('Alki');
beach.setLatitude('47 N');
beach.setLongitude('122 W');
console.log(beach.printLocation());
