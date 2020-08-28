import React from "react";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import CollectionPage from "../../pages/collectionpage/collectionpage.component";
import { connect } from "react-redux";
import { ShopPageContainer } from "./shop.styles";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    let { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { isCollectionFetching, match, isCollectionLoaded } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
