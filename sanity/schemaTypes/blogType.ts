import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogType = defineType(
    {
        name: "blog",
        title: "Blog",
        type: "document",
        icon: DocumentTextIcon,
        fields:[
            defineField({
                name: "title",
                title: "Title",
                type: "string",
            }),
            defineField({
                name: "slug",
                title: "Slug",
                type: "slug",
                options: {
                    source: "title",
                }
            }),
            defineField({
                name:"mainImage",
                title:"Main Image",
                type:"image",
                options:{
                    hotspot:true,
                }
            }),
            defineField({
                name:"blogcategories",
                title:"Blog Categories",
                type:"array",
                of:[{type:"reference", to:[{type:"blogCategory"}]}],
            }),
            defineField({
                name: "isLatest",
                title: "Latest Blog",
                type: "boolean",
                description: "Mark as latest blog to feature on homepage",
            }),
            defineField({
                name: "body",
                type: "blockContent",
            }),
            defineField({
                name: "publishedAt",
                title: "Published At",
                type: "datetime",
            }),
        ],
        preview:{
            select:{
                title:"title",
                media:"mainImage",
        },
        prepare(selection){
            const {title, media} = selection;
            return{
                title:title,
                media:media,
            }; 
        }

    }
});