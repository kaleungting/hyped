import React from "react";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collectionpage/collectionpage.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import { ShopPageContainer } from "./shop.styles";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collection");
    const { updateCollections } = this.props;
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMaps = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMaps);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
