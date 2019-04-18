$("document").ready(function() {
    function getData(city) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=ef3e268cbe387a39c451c064de7ff0c1",

            success: function(data) {
                console.log(data);
                handleData(data)
            }
        });
    }

    function handleData(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);

        // $('#09d.gif').width(00); // Units are assumed to be pixels
        // $('#09d.gif').height(700);

        var temp = data.main.temp;

        console.log('temp', temp);

        var icon = data.weather[0].icon;
        var image = '<img src="' + icon + '.gif">';



        $('.image-container').html(image);

        // let temp = data.main.temp;
        //     if (temp='clear sky'){
        //       $("#fire").html("<img id='weather-image' src='fire.gif'>")
        //   }  else if (temp='moderate rain'){
        //       $("#snow").html("<img src='snow.gif'>")
        //     } else if (temp='light rain'){
        //         $("#snow").html("<img src='10d.gif'>")
        //       }

        $("#tempText").html(data.main.temp + "° C")
        $("#speedText").html(data.main.speed)
        $("#tempCircle").css("width", data.main.temp)
        $("#tempCircle").css("height", data.main.temp)
    }

    var city = "New York"
    getData(city)

    $("#target").submit(function(event) {
        city = $("#city").val()
        getData(city)
        $("#target").val("In" + city)
        event.preventDefault();
    });
})
