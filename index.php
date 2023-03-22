<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">

    <meta name="author" content="WDTools.org · Catch it">
    <meta name="publisher" content="WDTools.org · Catch it">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="HandheldFriendly" content="true">
    <meta name="MobileOptimized" content="width">
    <meta http-equiv="cleartype" content="on">

    <link rel="stylesheet" href="css/main.min.css" media="all">

    <title>WDTools.org · Catch it</title>
  </head>
  <body class="game_settings_active">

    <header id="header">
      <div id="score_container">Score:
        <span id="score_span">0</span>
      </div>
      <div id="counter"></div>
      <div id="time_container">Time left:
        <span id="time_left"></span>
      </div>
    </header>

    <main id="main">
      <div class="line_x"></div>
      <div class="line_y"></div>

      <div id="try_to_catch" class="green"></div>
    </main>

    <div id="overlay_set_time">
      <h1>Welcome to Catch it!!!</h1>
      <p>How many minutes would you like to play?</p>
      <div class="play_time_container">
        <button class="play_time" data-id="1">1</button>
        <button class="play_time" data-id="2">2</button>
        <button class="play_time" data-id="3">3</button>
        <button class="play_time" data-id="4">4</button>
        <button class="play_time" data-id="5">5</button>
      </div>
    </div>

    <div id="overlay_game_over">
      <h2><span>Game</span> <span>Over</span></h2>
      <p>Your score: <span class="finale_score">10</span></p>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="./js/main.js"></script>
  </body>
</html>
