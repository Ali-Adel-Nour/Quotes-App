const express = require('express');

require('dot.env').config();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const session = require('express-session');

const passport = require('passport');

const ejs = require('ejs');
