import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
export const brandType = defineType({
    name: "brand",
    title: "Brand",
    type: "document",
    icon: TagIcon,
    fields:[
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options:{
                hotspot:true,
            }
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
})