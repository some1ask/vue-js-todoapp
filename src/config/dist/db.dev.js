"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyClFnviudy1hTnlG3HJQubMfprUe30Zw9c",
  authDomain: "vue-fire-todo-c21e1.firebaseapp.com",
  databaseURL: "https://vue-fire-todo-c21e1.firebaseio.com",
  projectId: "vue-fire-todo-c21e1",
  storageBucket: "vue-fire-todo-c21e1.appspot.com",
  messagingSenderId: "559857589315",
  appId: "1:559857589315:web:2e89f08591d0796a7248f6"
}; // Initialize Firebase

var db = _firebase["default"].initializeApp(firebaseConfig).firestore();

exports.db = db;