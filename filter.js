

function filterFile(data, filter){

    for (var i = 0; i < data.length; i++) {

  //    console.log(data[i]);
      if (data[i].substring(data[i].length-filter.length,data[i].length)==filter)
        console.log(data[i]);

    }
  }
