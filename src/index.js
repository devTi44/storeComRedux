
export const createStore = (reducer) => {
    // on crée un state grâce au reducer
    let state = reducer();
    // let subscribers = [() => {}];
    // tableau de fonctions
    let subscribers = [];

    return {
    // méthode pour lire le state courant via une copie
      getState: function() {
        return { ...state };
      },

      dispatch: function(action) {
        state = reducer(state, action);
        // callback appelée juste après la mise à jour du state
        subscribers.forEach(subscriber => subscriber());
      },

      subscribe: function(callback) {
        subscribers.push(callback);
      }
    };
};


