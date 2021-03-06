# Matcha
Matcha is a recreation of the popular dating app, Tinder, except with Matcha we find your ideal match with a user filtering system using your preferences that are fully customizable on the fly. You'll find our built-in chat feature
quite refreshing to use with your match!


[Subject File](https://github.com/wethinkcode-students/web/blob/master/2%20-%20matcha/matcha.en.pdf)


#### Grade Achieved: 125 / 125 [Full Bonus marks]

=======

### Team Members
This project was completed in a team of 4. I worked alongside:
- [bwebb](https://github.com/bentenjamin)
- [jlimbada](https://github.com/JonathanLimbada)
- [ctaljaar](https://github.com/CameronSTaljaard)

## Technologies:
- Database:
	MAMP
	MySQL

- Frontend - styling:
	Bootstrap
	PUG
	HTML
	CSS

- Frontend - functionality:
	JavaScript
	AJAX

- Backend:
	NodeJS

## Requirements:
- NodeJS & npm
- MAMP, for the MySQL server

## Developer Setup:
1. [Install MAMP](https://www.mamp.info/en)
1. [Install NPM](https://www.npmjs.com/get-npm)
2. Run the MAMP server, no configuration necessary, we are simply using the pre-configured SQL server.
3. Clone this repository to a place of your choosing.
5. In the project root directory, run `npm install`, followed by `npm start`
6. Navigate to `http://localhost:8081` in your browser, create and verify your account, and get matching!

## Architecture:
This project follows the MVC design pattern.

1. Model Layer:
	- Consist of the SQL database where all user data is stored.
	- Any functions that assist in creation of the database.
	- Certain functions can be called to update the View Layer.
	- See `database/*.js`
2. View Layer:
	- Any PUG template files.
	- Serves as the user interface, with interactive elements.
	- Can be updated with 'fresh' information from the DB if anything is updated.
	- See `views/*.pug`
3. Controller Layer:
	- Any JavaScript files that contain functions used in user input.
	- Functions capable of manipulating the Model Layer depending on user input.
	- See `routes/*.js`

4. Static Assets:
	- Various static assets (CSS, Images, Fonts) used around the site.
	- See `styles/*` and `images/`.

## Testing:
The [Marking Sheet](https://github.com/wethinkcode-students/corrections_42_curriculum/blob/master/matcha.markingsheet.pdf) will be used as a testing outline. A more simplified Outline and Expected Outcomes are listed below.

#### Outline:
1. Launch Web Server
2. Create Account
3. Verify Account & Login
4. Edit Profile
5. View Suggestions
6. Search / Filter
7. Geolocation
8. Popularity Rating
9. Notifications
10. View another Profile
11. Like / Unlike other users
12. Block users
13. Live Messaging

#### Expected Outcomes:
1. The backend server should start up and connect to the SQL database
2. You should be able to create an account
3. You should be able to verify the account via the received email, and then login
4. You should be able to edit a number of fields on your profile
5. You should be able to view other suggested profiles that match your preferences
6. You should be able to search and filter through a list of other profiles
7. Geolocation should be a feature.
8. Popularity ratings should be displayed on profiles
9. You should receive notifications when certain events happen
10. You should be able to view other profiles
11. You should be able to Like or Unlike other users
12. You should be able to block another user
13. You should be able to live chat with another user once you have both liked one another