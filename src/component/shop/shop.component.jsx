import React from "react";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collectionpage/collectionpage.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import { ShopPageContainer } from "./shop.styles";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collection");
    const { updateCollections } = this.props;
    collectionRef.get().then((snapshot) => {
      const collectionMaps = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMaps);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMaps) =>
    dispatch(updateCollections(collectionMaps)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
