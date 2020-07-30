import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={`/shop/${routeName}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
