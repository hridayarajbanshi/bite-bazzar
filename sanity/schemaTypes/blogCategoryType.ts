import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
export const blogCategoryType = defineType(
    {
        name: "blogCategory",
        title: "Blog Category",
        type: "document",
        icon: TagIcon,
        fields:[
            defineField({
                name: "title",
                title: "Title",
                type: "string",
            }),
            defineField({
            name: "description",
            title: "Description",
            type: "text",
            }),
            defineField({
                name: "slug",
                title: "Slug",
                type: "slug",
                options: {
                    source: "title",
                }
            }),
        ]


});