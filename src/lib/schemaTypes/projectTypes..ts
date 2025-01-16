import { categoryType } from "./categoryTypes";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "profile",
      type: "text",
      title: "Profile",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "profile",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `${select.subtitle}`,
        media: select.media,
      };
    },
  },
});
