import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "hubers-ca",
      name: "blog-content",
    },
    // kind: "local",
  },
  collections: {
    math: collection({
      label: "Math",
      slugField: "title",
      path: "math/*/",
      format: { data: "yaml" },
      entryLayout: "content",
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
