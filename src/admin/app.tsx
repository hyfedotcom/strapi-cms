import { StrapiApp } from "@strapi/strapi/admin";

export default {
  async register(app: StrapiApp) {
    const res = await fetch("/api/sites");
    const { data } = await res.json();

    data.forEach(({ site }: { site: any }) => {
      const slug = site.attributes.slug;
      const name = site.attributes.name;

      app.addMenuLink({
        to: `/content-manager/collectionType/api::page.page?filters[site][slug][$eq]=${slug}`,
        icon: "a",
        intlLabel: { id: `menu.${slug}`, defaultMessage: name },
        permissions: [],
        Component: async () => ({ default: () => null }),
      });
    });
  },
};
