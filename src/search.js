
function buttonClicked(){
    var city  = document.getElementById("city").value;
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
        .then ((response) => response.json())
        .then ((data) =>{
            //button name change to 'Re-enter location'
            document.querySelector("#search").value = "Re-Enter Location"
            // button function change when click twice
            const search = document.getElementById("search");
            search.addEventListener("click", () => {
                location.reload()
            });
            var info = data
            console.log(info)
                //display output from api
                document.getElementById("out1").append( info.main.temp)
                document.getElementById("out2").append(info.coord.lon)
                document.getElementById("out3").append(info.coord.lat)
                document.getElementById("out4").append(info.wind.speed)
                document.getElementById("out5").append( info.weather[0].main)
            
})}

