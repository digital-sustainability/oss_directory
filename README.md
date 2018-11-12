# OSS Directory

##### Table of contents
- [Installation](#installation)
- [Documentation](#documentation)
- [License](#license)




## Installation

In order to setup, you'll first need to install:
+ [Node.js](https://nodejs.org/en/download/)
+ [Sails](https://sailsjs.com/get-started)
+ [Angular](https://angular.io/guide/quickstart)
+ [mariaDB](https://downloads.mariadb.org/) or any mysql distribution

After cloning the project install the required packages:
```bash
cd sails-angular
npm install
cd angular
npm install
```
### Configurations

#### MySQL DB
You can skip this section if you do not want to setup a database. Sails will use your local disc instead.   
Make sure to comment out the database conf in conf/env/development.js  

Create user and database e.g.

    CREATE DATABASE `dbname`;  
    CREATE USER 'myuser' IDENTIFIED BY 'password';

    //allow access from localhost
    GRANT USAGE ON *.* TO 'myuser'@localhost;

    //grant and apply privileges
    GRANT ALL privileges ON `dbname`.* TO 'myuser'@localhost;
    FLUSH PRIVILGES;

And set your environment configurations (config/env/):

    datastores: {
        default: {
            adapter: 'sails-mysql',
            url: 'mysql://myuser:password@localhost:port/dbname',
          },
    },

## Documentation

### Current Status

The following is a short overview of the work in progress. For more details please consider the wiki pages.

![project architecture](./doc/SoftwareArchitektur.png)

## License

-- Coming soon --
