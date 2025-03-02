# Tic Tac Toe

Tic Tac Toe is a Javascript game built to allow users to play offline(two players) for fun. It was designed to be simple and entertaining for two players.

<!-- ![Mock Up]() -->

[Tic Tac Toe Live Link](https://neelp20.github.io/Tic-Tac-Toe/)

## Features

#### Landing Page
* The first page gives the instructions to play the game:

   * contains two buttons for Online and Offline mode.
   * This will allow users to easily navigate between the pages within the site on any device size.

   ![Full view](/docs/readme-images/instruction-page.png)
* Favicon
   * A site wide favicon will be implemented with a tic tac toe logo.
   * This will be helpful for the user to identify the website easily if they have multiple tabs open.

![Favicon](/docs/readme-images/favicon-screenshot.png)
* 404 Page
   * A 404 page will be implemented and will be displayed if a user navigates to a broken link.
   * The 404 page will allow the user to easily navigate back to the main website, without the need of the browsers back button.

![404 Page](/docs/readme-images/404-screenshot.png)
* Game Start Button
   * A button will be on the home page that when clicked will direct the user to the main game page.
   * This will allow the user to start the game after they have read the instructions to play.

![Game Start Button](/docs/readme-images/start-game.png)
* Navbar
   * Contains link to the Instruction page and will be responsive on all devices.

![Navbar](/docs/readme-images/nav-screenshot.png)
* Scoreboard
   * Above the game board, scoreboard will be displayed to show the score/draw. It will be hidden and pop up once the player gets three in a row or draw.
   * Contains "New Game" button for the user to continue the game.

![Scoreboard](/docs/readme-images/scoreboard-screenshot.png)
* Game Board
   * A nine boxes will be blank when the page is loaded.
   * User will be able to click on them to play the game.

![Gameboard](/docs/readme-images/gameboard-screenshot.png)
* Reset Game Button
   * "Reset Game" will reset the game board and score board.
   
![Reset Game](/docs/readme-images/resetgame-screenshot.png)
* New Game Button
   * "New Game" will clear the board, but keep the score on scoreboard.

![New Game](/docs/readme-images/newgame-screenshot.png)

## The Game
 * The game starts with blank boxes, and always player X begins the game.
 * Next is player O's turn.
 * Once the boxes are clicked, can not be changed back.
 * When someone gets three in a row, the board will be locked until "Reset Game" or "New Game" is clicked.

 ### Winning Conditions
In this game with nine boxes, there are eight winning conditions.
* [ 0, 1, 2 ]
* [ 0, 3, 6 ]
* [ 0, 4, 8 ]
* [ 1, 4, 7 ]
* [ 2, 5, 8 ]
* [ 2, 4, 6 ]
* [ 3, 4, 5 ]
* [ 6, 7, 8 ]

### Example of three scenarios
* When player X wins the game.

![Player X is winner](/docs/readme-images/winnerX-screenshot.png)
* When player O wins the game.

![Player O wins is winner](/docs/readme-images/winnerO-screenshot.png)
* When its a Draw.

![It's a draw](/docs/readme-images/draw-screenshot.png)

### Features left to implement
   * Add functionality to play the game against computer.

## Wireframes

- Home Page

![Home page wireframe](/docs/wireframes/home-wireframe.png)

- Game Page

![Game page wireframe](/docs/wireframes/game-wireframe.png)

- 404 Page

![404 page wireframe](/docs/wireframes/404-wireframe.png)

## Technologies

- HTML
  - The structure of the website was developed using HTML as the main language.
- CSS
  - The website was styled using custom CSS in an external file.
- Javascript
  - The game play logic was created using Javascript in an external file.
- Visual Studio Code
  - The website was developed using Visual Studio Code IDE.
- GitHub
  - Source code is hosted on GitHub and deployed using Git pages.
- Git
  - Used to commit and push code during the development of the website.
- Favicon.io
  - Favicon files were created at https://favicon.io/favicon-converter/
- balsamiq
  - Wireframes were craeted using balsamiq from https://balsamiq.com/wireframes/desktop/#
- Font Awesome
  - Icon obtained from https://fontawesome.com/ was used for Home icon on Game page header.
  

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined.

Steps to test:

1. Open browser and navigate to [Tic Tac Toe](https://neelp20.github.io/Tic-Tac-Toe/)
2. Open the developer tools (right click and inspect)
3. Set the responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

- iphone SE
- pixel 7
- Galaxy Z Fold 5

<!-- ### Accessibility -->

<!-- **Game Board**

Testing was done to ensure the correct messages were displayed at the appropriate time by playing the game. The following messages are displayed:

* Winner is O.
* Winner is X.
* It's a draw.

All messages were displayed as expected. -->






