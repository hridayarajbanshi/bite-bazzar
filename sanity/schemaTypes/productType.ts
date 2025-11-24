import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { metadata } from '../../app/(client)/layout';
export const productType = defineType({
    name: "products",
    title: "products",
    type: "document",
    icon: "TrolleyIcon",
    fields:[
        defineField({
            name: "name",
            title: "Product Name",
            type: "String",
            validation:(Rule)=> Rule.required()
        }),
        defineField({
            name: 'slug',
            title: "Slug",
            type: "slug",
            options:{
                source: "name",
                maxLength: 96,
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: "image",
            title: "Product Images",
            type: "array",
            of: [{
                type: "image",
                options: {
                    hotspot: true
                }
            }],

        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: "price",
            title: "Price ",
            type: "number",
            validation: (Rule)=> Rule.required().min(0)
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            validation: (Rule)=>Rule.required().min(0)
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type:"array",
            of: [{
                type: "reference", to: {type: "category"}
            }]
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation:(Rule)=> Rule.min(0)
        }),
        defineField({
            name: "brand",
            title: "Brand",
            type: "reference",
            to: {type: "brand"}
        }),
        defineField({
            name: "satus",
            title: "Product Status",
            type: "string",
            options:{
                list: [
                    {title: "New", value: "new"},
                    {title: "Hot", value: 
                        "hot"
                    },
                    {title: "Sale", value: 
                        "sale"
                    },
                ],
            },
        }),
        defineField({
            name: "variant ",
            title: "Product Type",
            type: "string",
            options: {
                list: [
                    {title: "Laptops", value: "laptops"},
                    {title: "smartphones", value: "Smartphones"},
                    {title: "smartwatches", value: "Smartwatches"},
                    {title: "airbuds", value: "Airbuds"},
                    {title: "headphones", value: "Headphones"},
                    {title: "camera", value: "Camera"},
                ]
            }
        }),
        defineField({
            name: "isFeatured",
            title: "Featured Product",
            type: "boolean",
            description: "Toggle to Featured on or off",
            initialValue: false,
        })
    ],
    preview:{
        select: {
            title: "name",
            media: "image",
            subtitle: "price"
        },
        prepare(selection){
            const {title, subtitle, media} = selection;
            const image = media && media[0];
            return {
                title: title,
                subtitle: `Rs.${subtitle}`,
                media: image,
            }
        }
    }
})