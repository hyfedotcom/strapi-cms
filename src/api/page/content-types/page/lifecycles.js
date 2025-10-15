module.exports = {
  beforeUpdate(event) {
    const data = event.params.data;
    if (data.structured_data && typeof data.structured_data === "object") {
      data.structured_data = JSON.stringify(data.structured_data);
    }
  },
  beforeCreate(event) {
    const data = event.params.data;
    if (data.structured_data && typeof data.structured_data === "object") {
      data.structured_data = JSON.stringify(data.structured_data);
    }
  },
};

module.exports = {
  beforeCreate(event) {
    const data = event.params.data;
    if (!data.slug && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
  },
  beforeUpdate(event) {
    const data = event.params.data;
    if (data.title && !data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
  },
};

module.exports = {
  async beforeUpdate(event) {
    const data = event.params.data;
    // const isDev = process.env.NODE_ENV === "development";

    if (data.slug) {
      delete data.slug;
    }
  },
};
