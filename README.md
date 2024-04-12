# Tweet-Mongo

## Description
Welcome to TweetMongo - A simplified version of the twitter social network that uses MongoDB and Mongoose which allows users to post their thoughts, react to the thoguhts of others in the form of a comment, and add friends. However, thoughts change and no one should be punished for typos. Unlike twitter, With TweetMongo, users can edit their existing thoughts rather than deleting them and losing all their comments (reactions). Lastly, if a user made a username years ago that the no longer want, they're not stuck with it, they can update their username anytime. Join TweetMongo and share your thoughts today!

## Table of Contents
- Installation
- Screenshot
- Usage
- Features
- Contributions
- Credits
- License
- Testing

## Installation
1. To run the project locally, follow these steps:
2. Clone the repository to your local machine using git clone https://github.com/AliahG97/Tweet-Mongo.git
3. Navigate to the project directory.
4. Install dependencies by running npm install.
5. Set up your mongoose database with the necessary schema.
6. Update the database connection details (PORT) in the application code.
7. Add npm start to the package json script
8. Start the application with npm start in terminal
9. Begin the API calls in Insomnia


## Screenshot
![ReadMe Gen Screenshot](./Assets/Images/no-sql-screenshot.gif)
Repo: https://github.com/AliahG97/Tweet-Mongo
Watch video: https://youtu.be/kmt4D99yVEc

## Usage
Users can create a username that gets a unique ID. The user is able to update the username or email at anytime, and delete the account and thoughts. The user can then create a thought which can be tracked according to the users ID. The user can update and or dele their thought at anytime. the user can also add and delete friends to their user Id list. The user can comment/ react to thoughts, but they cannot be edited only deleted.

## Features
1. Users:
- POST: Create a User by
- GET: All Users
- GET: User by Id
- PUT: Update User
- DELETE: Delete a User and associated thoughts

2. Friends:
- POST: Add a Friend
- DELETE: Delete a Friend

3. Thoughts:
- POST: Create a Thought
- GET: All Thoughts
- GET: Thought by Id
- PUT: Update Thought
- DELETE: Delete Thought

4. Reactions:
- POST: Add a Reaction
- DELETE: Delete a Reaction


## Contribution
- Add a thought search based on matching thought text keywords.

## Credits
Aliah Guerra (https://github.com/AliahG97) 


## License
This project is licensed under the MIT License.

## Testing
1. Cd to project file
2. npm install
3. npm start

