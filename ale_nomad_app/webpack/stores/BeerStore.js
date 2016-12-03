import alt from '../lib/alt'
import BeerActions from '../actions/BeerActions'

class BeerStore {
  constructor() {
    this.state = {
        // TODO: state properties we want to set.
        beers: []
    };

    this.bindListeners({
        // updateList: MyActions.setList
        updateBeers: BeerActions.beerList

        //method: [filename].method  <-- normal setup for listeners
    });
  }

  updateBeers (beers) {
      // es6 shorthand property (if same name like below)
      //set state with local state up top.
      this.setState({ beers })
  }

}

export default alt.createStore(BeerStore, 'BeerStore');

// export default MyStore
