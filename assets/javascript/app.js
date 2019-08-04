let movies = ["Man of steel", "300", "Longest Yard", "Head of State"];

      
      function displayMovieInfo() {
        
        let movie = $(this).attr("data-name");
        let queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          
          let movieDiv = $("<div class='movie'>");

          console.log(response);
          
          let rating = response.Rated;

          
          let pOne = $("<p>").text("Rating: " + rating);
          $("#movies-view").empty();
          
          movieDiv.append(pOne);

         
          let released = response.Released;

          
          let pTwo = $("<p>").text("Released: " + released);

          
          movieDiv.append(pTwo);

          
          let plot = response.Plot;

          
          let pThree = $("<p>").text("Plot: " + plot);

          
          movieDiv.append(pThree);

          
          let imgURL = response.Poster;

          
          let image = $("<img>").attr("src", imgURL);

          
          movieDiv.append(image);

          $("#movies-view").empty();

          
          $("#movies-view").prepend(movieDiv);
        });

      }

      
      function renderButtons() {

       
        $("#buttons-view").empty();

    
        for (let i = 0; i < movies.length; i++) {

         
          let newButton = $("<button>");
          
          newButton.addClass("movie-btn");
          
          newButton.attr("data-name", movies[i]);
          
          newButton.text(movies[i]);
          
          $("#buttons-view").append(newButton);
        }
      }

      
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        
        let movie = $("#movie-input").val().trim();

        
        movies.push(movie);

       
        renderButtons();
      });

      
      $(document).on("click", ".movie-btn", displayMovieInfo);

      
      renderButtons();