# Congress Scrapers

These bots download data from every committee in the House and Senate, and upload the data to a MongoDB database.

## Getting Started

git clone git@github.com:KingOfCramers/Sked_Checker_Text_Bot.git
yarn install
node app.js

### Prerequisites

These bots require a running instance of MongoDB in order to work, with an admin user setup. While you can reconfigure the DB connection (in the `mongodb/connect/index.js` file) it is not recommended.

The bots also require a working installation of Chromium running on your local machine.

## Author

* **Harrison Cramer** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details