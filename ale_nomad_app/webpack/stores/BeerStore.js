import alt from '../lib/alt'
import BeerActions from '../actions/BeerActions'

class BeerStore {
  constructor() {
    this.state = {
        // TODO: state properties we want to set.
    };

    this.bindListeners({
        // updateList: MyActions.setList

        //method: [filename].method  <-- normal setup for listeners
    });
  }

  updateList (list) {
      // es6 shorthand property (if same name like below)
      //set state with local state up top.
      this.setState({
      });
  }

}

export default alt.createStore(BeerStore, 'BeerStore');

// export default MyStore
