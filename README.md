# E-Voting DApp
What is a decentralized application?<br>

A decentralized application (dApp) is a type of distributed open source software application that runs on a peer-to-peer (P2P) blockchain network rather than on a single computer. DApps are visibly similar to other software applications that are supported on a website or mobile device but are P2P supported. <br>

Objectives of the project:<br>

The following project aims to create a DApp that allows for secure voting on a local ethereum blockchain.<br>
___
## Tech Stack Used : 
The Tech Stack used was basic JavaScript and HTML for rendering a simplified voting application, and Truffle and Solidity for executing Smart Contracts on a Ganache Blockchain using the Metamask browser extension. Truffle was used to fetch and unbox a boilerplate [truffle pet-shop] to use as the base for the project.
Testing was done using /test/election.js file to ensure proper functioning of the contracts and migrations.
___
## Contracts Used
```
* Election.sol present in '/contracts' to facilitate the secure election
* Migrations.sol already present in '/contracts' to facilitate initial migration
```
___
## Installation and Usage
1. Clone the repo
   ```sh
   git clone https://github.com/Kash_1405/E-Voting-DApp
   ```
2. Install required libraries
   ```sh
    $ cd election
    $ npm install   
3. Start Ganache Client [to be downloaded and installed first]. This provides us with 10 free accounts with 100 ETH each [all worthless in the real world of course :P].
4. Migrate the Contracts<br>
    `$ truffle migrate --reset` [Note: Do this every time you rerun the Ganache.]
5. Configure Metamask
6. Run the Client side application using <br>
    `$ npm run dev`<br>
    Visit the site: http://localhost:3000
___
