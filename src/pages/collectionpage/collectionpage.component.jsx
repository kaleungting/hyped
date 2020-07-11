import React from "react";

import "./collectionpage.styles.scss";
import { connect } from "react-redux";
import { collectionCategory } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../component/collection-item/collection-item.component";
const CollectionPage = ({ collection }) => {
  let { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionCategory(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
