import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "hubers-ca",
      name: "blog-content",
    },
  },
  collections: {
    math: collection({
      label: "Math",
      slugField: "title",
      path: "math/*/",
      format: { contentField: "content", data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    code: collection({
      label: "Code",
      slugField: "title",
      path: "code/*/",
      format: { contentField: "content", data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Settings",
      schema: {},
    }),
  },
});
