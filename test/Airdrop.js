// We import Chai to use its asserting functions here.
const { expect } = require("chai");

// Importing hardhat ethers
const { ethers } = require("hardhat");

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

// Importing dotenv to access .env credentials
require('dotenv').config();
