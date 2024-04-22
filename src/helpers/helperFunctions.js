function shortenText(text) {
  return text.split(" ").slice(0, 3).join(" ");
}

function searchFilter(data, word) {
  if (!word) return data;
  return data.filter((p) => p.title.toLowerCase().includes(word));
}

function categoryFilter(data, category) {
  if (category === "all") return data;
  return data.filter((p) => p.category === category);
}

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

function removeDefaultQueries(query) {
  if (query.search === "") {
    delete query.search;
    return query;
  }
  if (query.category === "all") {
    delete query.category;
    return query;
  }
}

export {
  shortenText,
  searchFilter,
  categoryFilter,
  HandleUrlQueries,
  removeDefaultQueries,
};
