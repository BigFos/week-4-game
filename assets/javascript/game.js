$(document).ready(function() {
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    $("#number-to-guess").text(targetNumber);

    var counter = 0;

    var crystalNum = new Array(4);
    var j = 0;
    var min = 1;
    var max = 12;
    var winCounter = 0;
    var lossCounter = 0;

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
            j++;
        }
    }
    console.log(crystalNum);

    $("#red-crystal").attr("data-crystalvalue", crystalNum[0])
    $("#green-crystal").attr("data-crystalvalue", crystalNum[1])
    $("#blue-crystal").attr("data-crystalvalue", crystalNum[2])
    $("#black-crystal").attr("data-crystalvalue", crystalNum[3])



    function init() {
        var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

        $("#number-to-guess").text(targetNumber);

        counter = 0;


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
                j++;
            }
        }
        console.log(crystalNum);


        $("#red-crystal").attr("data-crystalvalue", crystalNum[0])
        $("#green-crystal").attr("data-crystalvalue", crystalNum[1])
        $("#blue-crystal").attr("data-crystalvalue", crystalNum[2])
        $("#black-crystal").attr("data-crystalvalue", crystalNum[3])
    }

    $("#red-crystal").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#current-total").text(counter);

        if (counter === targetNumber) {
            winCounter++
            $("#wins").text(winCounter);
            init();
        } else if (counter >= targetNumber) {
            lossCounter++
            $("#losses").text(lossCounter);
            init();
        }


    });

    $("#green-crystal").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#current-total").text(counter);

        if (counter === targetNumber) {
            winCounter++
            $("#wins").text(winCounter);
            init();
        } else if (counter >= targetNumber) {
            lossCounter++
            $("#losses").text(lossCounter);
            init();
        }


    });

    $("#blue-crystal").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#current-total").text(counter);

        if (counter === targetNumber) {
            winCounter++
            $("#wins").text(winCounter);
            init();
        } else if (counter >= targetNumber) {
            lossCounter++
            $("#losses").text(lossCounter);
            init();

        }


    });

    $("#black-crystal").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#current-total").text(counter);

        if (counter === targetNumber) {
            winCounter++
            $("#wins").text(winCounter);
            init();
        } else if (counter >= targetNumber) {
            lossCounter++
            $("#losses").text(lossCounter);
            init();
        }


    });

}); // End of document ready
