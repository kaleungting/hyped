import React from "react";

import { connect } from "react-redux";
import { collectionCategory } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../component/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collectionpage.styles";
const CollectionPage = ({ collection }) => {
  let { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionCategory(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
