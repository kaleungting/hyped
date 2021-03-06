import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const shopSelection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionPreview = createSelector(
  [shopSelection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const collectionCategory = memoize((collectionParam) =>
  createSelector([shopSelection], (collections) =>
    collections ? collections[collectionParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
