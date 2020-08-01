import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  TitleLink,
  PreviewContainer,
} from "./collection-preview.styles";
const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewContainer>
    <TitleLink to={`/shop/${routeName}`}>{title.toUpperCase()}</TitleLink>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
