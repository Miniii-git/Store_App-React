function shortenText(text) {
  return text.split(" ").slice(0, 3).join(" ");
}

//-----------------------------------------------------------------------

function searchFilter(data, word) {
  if (!word) return data;
  return data.filter((p) => p.title.toLowerCase().includes(word));
}

//-----------------------------------------------------------------------

function categoryFilter(data, category) {
  if (category === "all") return data;
  return data.filter((p) => p.category === category);
}

//-----------------------------------------------------------------------

function HandleUrlQueries(query) {
  if (query.category === "all") {
    let Q = query.search ? { search: query.search } : {};
    return Q;
  } else {
    let Q = query.search
      ? { category: query.category, search: query.search }
      : { category: query.category };
    return Q;
  }
}

//-----------------------------------------------------------------------

function sumProducts(SelectedItemsArray) {
  const totalNumber = SelectedItemsArray.reduce(
    (total, eachItem) => total + eachItem.quantity,
    0
  );

  const totalPrice = SelectedItemsArray.reduce(
    (total, eachItem) => total + eachItem.price * eachItem.quantity,
    0
  );
  return { totalNumber, totalPrice };
}

//-----------------------------------------------------------------------

function showProductQuantity(state, id) {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
}

//----------------------------------------------------------------------

/*function removeDefaultQueries(query) {
  if (query.search === "") {
    delete query.search;
    return query;
  }
  if (query.category === "all") {
    delete query.category;
    return query;
  }
  return query;
}

function editQueries(query) {
  if (query.category === "all") {
    const { category, ...rest } = query;
    return rest;
  }
  if (query.search === "") {
    const { search, ...rest } = query;
    return rest;
  }
  return query;
}

function createQueryObject(cq, nq) {
  if (nq.category === "all") {
    const { category, ...rest } = cq;
    return rest;
  }
  if (nq.search === "") {
    const { search, ...rest } = cq;
    return rest;
  }
  return { ...nq, ...cq };
}*/

export {
  shortenText,
  searchFilter,
  categoryFilter,
  HandleUrlQueries,
  sumProducts,
  showProductQuantity,
};
