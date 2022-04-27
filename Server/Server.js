require("dotenv").config()
const express = require("express")
const session = require("express-session")

// Array for data to be stored temporarily since there is no db in this project
let data = []

const app = express()