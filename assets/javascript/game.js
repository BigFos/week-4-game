   var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var winCounter = 0;
  var lossCounter = 0;

  var crystalNum = new Array(4);
  var j = 0;
  var min = 1;
  var max = 12;

  while (j < crystalNum.length) {
      var randnum = Math.floor(Math.random() * (max - min + 1) + min);

      var found = false;

      for (var i = 0; i < crystalNum.length; i++) {
          if (crystalNum[i] == randnum) {
              found = true;
              break;
          }
      }

      if (!found) {
          crystalNum[j] = randnum;
          // document.write(qarray[j] + "<br />");
          j++;
      }
  }
  console.log(crystalNum);

  // // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // // We begin by expanding our array to include four options.
  // var numberOptions = Math.floor(Math.random() * ((12-1)+1) + 1);
  // console.log(numberOptions);

  // // Next we create a for loop to create crystals for every numberOption.
  // for (var i = 0; i < crystalNum.length; i++) {

  // //   // For each iteration, we will create an imageCrystal
  //    var imageCrystal = $("<img>");

  // //   // First each crystal will be given the class ".crystal-image".
  // //   // This will allow the CSS to take effect.
  // //   imageCrystal.addClass("crystal-image");

  // //   // Each imageCrystal will be given a src link to the crystal image
  // //   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // //   // Each imageCrystal will be given a data attribute called data-crystalValue.
  // //   // This data attribute will be set equal to the array value.
  //   imageCrystal.attr("data-crystalvalue", crystalNum[i]);

  // //   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $(".crystals").append(imageCrystal);
  // }
$("#red-crystal").attr("data-crystalvalue", crystalNum[0])
$("#green-crystal").attr("data-crystalvalue", crystalNum[1])
$("#blue-crystal").attr("data-crystalvalue", crystalNum[2])
$("#black-crystal").attr("data-crystalvalue", crystalNum[3])
  // // This time, our click event applies to every single crystal on the page. Not just one.
  $("#red-crystal").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#current-total").text(counter);

    if (counter === targetNumber) {
      winCounter++
      $("#wins").text(winCounter);

    }

    else if (counter >= targetNumber) {
      lossCounter++
      $("#losses").text(lossCounter);
    }

  });

  $("#green-crystal").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
   $("#current-total").text(counter);

    if (counter === targetNumber) {
      winCounter++
      $("#wins").text(winCounter);
    }

    else if (counter >= targetNumber) {
      lossCounter++
      $("#losses").text(lossCounter);
    }

  });

$("#blue-crystal").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#current-total").text(counter);

    if (counter === targetNumber) {
      winCounter++
      $("#wins").text(winCounter);
    }

    else if (counter >= targetNumber) {
      lossCounter++
      $("#losses").text(lossCounter);
    }

  });

$("#black-crystal").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#current-total").text(counter);

    if (counter === targetNumber) {
      winCounter++
      $("#wins").text(winCounter);
    }

    else if (counter >= targetNumber) {
      lossCounter++
      $("#losses").text(lossCounter);
    }

  });