# Tic Tac Toe

Tic Tac Toe is a Javascript game built to allow users to play (two players) for fun. It was designed to be simple and entertaining for two players.

![Mock Up](/docs/readme-images/mockup.png)

[Tic Tac Toe Live Link](https://neelp20.github.io/Tic-Tac-Toe/)

## Features

#### Landing Page
* The first page gives the instructions to play the game:

   * A link will be on home page that when clicked will direct the user to the Game page.
   * This will allow users to easily navigate between the pages within the site on any device size.

   ![Full view](/docs/readme-images/home-screenshot.png)
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

* Game Page

![Game Page](/docs/readme-images/gamepage-screenshot.png)
* Navbar
   * Contains tic tac toe logo on the left side of the page.
   * On the right side, contains link to the Instruction page and will be responsive on all devices.

![Navbar](/docs/readme-images/nav-screenshot.png)


* Scoreboard
   * Above the game board, scoreboard will be displayed to show the score/draw. It will be updated once the player gets three in a row or a draw.
   
   
   

![Scoreboard](/docs/readme-images/scoreboard-screenshot.png)
* Game Board
   * A nine boxes will be blank when the page is loaded.
   * User will be able to click on them to play the game.
   * A "Sound" can be turned on/off while playing the game.

![Gameboard](/docs/readme-images/gameboard-screenshot.png)
* Reset Game Button
   * "Reset Game" will reset the game board and score board.
   
![Reset Game](/docs/readme-images/resetgame-screenshot.png)
* New Game Button
   * "New Game" will clear the board, but keep the score on scoreboard.

![New Game](/docs/readme-images/newgame-screenshot.png)

## The Game
 * The game starts with blank boxes, and always player O begins the game.
 * Next is player X's turn.
 * Once the boxes are clicked, can not be changed back.
 * When someone gets three in a row, the board will be locked until "Reset Game" or "New Game" is clicked.
 * When all 9 squares are filled and neither player has three in a row, the game is a draw.
 * Messages indicating a win or a draw will appear via an "Alert".

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


* When player O wins the game.

![Player O wins is winner](/docs/readme-images/winnerO-screenshot.png)

* When player X wins the game.

![Player X is winner](/docs/readme-images/winnerX-screenshot.png)

* When its a Draw.

![It's a draw](/docs/readme-images/draw-screenshot.png)

### Features left to implement
   * Add functionality to play the game against computer.

## Wireframes

- Home Page

![Home page wireframe](/docs/wireframes/home-wireframes.png)

- Game Page

![Game page wireframe](/docs/wireframes/gamepage-wireframe.png)

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
- Surface pro 7



**Game Board**

Testing was done to ensure the correct messages were displayed at the appropriate time by playing the game. The following messages are displayed(alert):

* Congratulations, Winner is O.
* Congratulations, Winner is X.
* It's a draw.

All messages were displayed(alert) as expected.

**Validator Testing**

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![Home Page](/docs/readme-images/home-validator.png)

![Game Page](/docs/readme-images/game-validator.png)

![404 Page](/docs/readme-images/404-validator.png)

- CSS
 - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](/docs/readme-images/cssvalidator-screenshot.png)

- Javascript
 - No errors were found when passing through the [Jshint validator](https://jshint.com)
 - A warning appeared for one variable as an undefined variable.
 - A const/esversion warnings, Couldn't find a way to silence them since its very common in jshint.

![Javascript Validator Results](/docs/readme-images/javascript-validator.png)

**Lighthouse Report**

![Lighthouse report](/docs/readme-images/home-lighthouse.png)

![Lighthouse report](/docs/readme-images/gamepage-lighthouse.png)

![Lighthouse report](/docs/readme-images/404-lighthouse.png)


## Deployment

### Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘Tic-Tac-Toe’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://neelp20.github.io/Tic-Tac-Toe/

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

## Credits

* [For Confetti](https://www.npmjs.com/package/js-confetti)
  * [Youtube Channel](iEatWebsites)
* Website logo was downloaded from google.
* My Mentor Gareth McGirr for his guidance and support throughout my project.







