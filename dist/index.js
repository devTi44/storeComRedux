"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createStore = function createStore(reducer) {
  // on crée un state grâce au reducer
  var state = reducer(); // let subscribers = [() => {}];
  // tableau de fonctions

  var subscribers = [];
  return {
    // méthode pour lire le state courant via une copie
    getState: function getState() {
      return _objectSpread({}, state);
    },
    dispatch: function dispatch(action) {
      state = reducer(state, action); // callback appelée juste après la mise à jour du state

      subscribers.forEach(function (subscriber) {
        return subscriber();
      });
    },
    subscribe: function subscribe(callback) {
      subscribers.push(callback);
    }
  };
};

exports.createStore = createStore;
