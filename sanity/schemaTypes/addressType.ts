import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
    name: "address",
    title: "Address",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "name",
            title: "Address Name",
            type: "string",
            description: "A name to identify this address (e.g., Home, Work)",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "User Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "country",
            title: "Country",
            type: "string",
            initialValue: "Nepal",
            readOnly: true,
            hidden: false,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "province",
            title: "Province",
            type: "string",
            options: {
                list: [
                    { title: "Province 1", value: "province1" },
                    { title: "Madhesh Province", value: "madhesh" },
                    { title: "Bagmati Province", value: "bagmati" },
                    { title: "Gandaki Province", value: "gandaki" },
                    { title: "Lumbini Province", value: "lumbini" },
                    { title: "Karnali Province", value: "karnali" },
                    { title: "Sudurpashchim Province", value: "sudurpashchim" }
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "district",
            title: "District",
            type: "string",
            options: {
                list: [
                    // Province 1 Districts
                    { title: "Bhojpur", value: "bhojpur" },
                    { title: "Dhankuta", value: "dhankuta" },
                    { title: "Ilam", value: "ilam" },
                    { title: "Jhapa", value: "jhapa" },
                    { title: "Khotang", value: "khotang" },
                    { title: "Morang", value: "morang" },
                    { title: "Okhaldhunga", value: "okhaldhunga" },
                    { title: "Panchthar", value: "panchthar" },
                    { title: "Sankhuwasabha", value: "sankhuwasabha" },
                    { title: "Solukhumbu", value: "solukhumbu" },
                    { title: "Sunsari", value: "sunsari" },
                    { title: "Taplejung", value: "taplejung" },
                    { title: "Terhathum", value: "terhathum" },
                    { title: "Udayapur", value: "udayapur" },
                    
                    // Madhesh Province Districts
                    { title: "Parsa", value: "parsa" },
                    { title: "Bara", value: "bara" },
                    { title: "Rautahat", value: "rautahat" },
                    { title: "Sarlahi", value: "sarlahi" },
                    { title: "Dhanusha", value: "dhanusha" },
                    { title: "Mahottari", value: "mahottari" },
                    { title: "Saptari", value: "saptari" },
                    { title: "Siraha", value: "siraha" },
                    
                    // Bagmati Province Districts
                    { title: "Bhaktapur", value: "bhaktapur" },
                    { title: "Chitwan", value: "chitwan" },
                    { title: "Dhading", value: "dhading" },
                    { title: "Dolakha", value: "dolakha" },
                    { title: "Kathmandu", value: "kathmandu" },
                    { title: "Kavrepalanchok", value: "kavrepalanchok" },
                    { title: "Lalitpur", value: "lalitpur" },
                    { title: "Makwanpur", value: "makwanpur" },
                    { title: "Nuwakot", value: "nuwakot" },
                    { title: "Ramechhap", value: "ramechhap" },
                    { title: "Rasuwa", value: "rasuwa" },
                    { title: "Sindhuli", value: "sindhuli" },
                    { title: "Sindhupalchok", value: "sindhupalchok" },
                    
                    // Gandaki Province Districts
                    { title: "Baglung", value: "baglung" },
                    { title: "Gorkha", value: "gorkha" },
                    { title: "Kaski", value: "kaski" },
                    { title: "Lamjung", value: "lamjung" },
                    { title: "Manang", value: "manang" },
                    { title: "Mustang", value: "mustang" },
                    { title: "Myagdi", value: "myagdi" },
                    { title: "Nawalpur", value: "nawalpur" },
                    { title: "Parbat", value: "parbat" },
                    { title: "Syangja", value: "syangja" },
                    { title: "Tanahu", value: "tanahu" },
                    
                    // Lumbini Province Districts
                    { title: "Arghakhanchi", value: "arghakhanchi" },
                    { title: "Banke", value: "banke" },
                    { title: "Bardiya", value: "bardiya" },
                    { title: "Dang", value: "dang" },
                    { title: "Gulmi", value: "gulmi" },
                    { title: "Kapilvastu", value: "kapilvastu" },
                    { title: "Parasi", value: "parasi" },
                    { title: "Palpa", value: "palpa" },
                    { title: "Pyuthan", value: "pyuthan" },
                    { title: "Rolpa", value: "rolpa" },
                    { title: "Rukum East", value: "rukum_east" },
                    { title: "Rupandehi", value: "rupandehi" },
                    
                    // Karnali Province Districts
                    { title: "Dailekh", value: "dailekh" },
                    { title: "Dolpa", value: "dolpa" },
                    { title: "Humla", value: "humla" },
                    { title: "Jajarkot", value: "jajarkot" },
                    { title: "Jumla", value: "jumla" },
                    { title: "Kalikot", value: "kalikot" },
                    { title: "Mugu", value: "mugu" },
                    { title: "Rukum West", value: "rukum_west" },
                    { title: "Salyan", value: "salyan" },
                    { title: "Surkhet", value: "surkhet" },
                    
                    // Sudurpashchim Province Districts
                    { title: "Achham", value: "achham" },
                    { title: "Baitadi", value: "baitadi" },
                    { title: "Bajhang", value: "bajhang" },
                    { title: "Bajura", value: "bajura" },
                    { title: "Dadeldhura", value: "dadeldhura" },
                    { title: "Darchula", value: "darchula" },
                    { title: "Doti", value: "doti" },
                    { title: "Kailali", value: "kailali" },
                    { title: "Kanchanpur", value: "kanchanpur" }
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "city",
            title: "City/Municipality",
            type: "string",
            description: "Enter your city or municipality name",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "streetAddress",
            title: "Street Address",
            type: "text",
            description: "Full street address with ward number, tole, etc.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "zipCode",
            title: "ZIP Code",
            type: "string",
            description: "Postal code (if available)",
            validation: (Rule) => Rule.min(3).max(10),
        }),
        defineField({
            name: "phone",
            title: "Phone Number",
            type: "string",
            description: "Contact phone number for delivery",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "isDefault",
            title: "Default Address",
            type: "boolean",
            description: "Set as default shipping address",
            initialValue: false,
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
            province: 'province',
            district: 'district',
            city: 'city',
            isDefault: 'isDefault'
        },
        prepare(selection) {
            const { title, subtitle, province, district, city, isDefault } = selection;
            
            // Format province name for display
            const provinceNames: { [key: string]: string } = {
                province1: "Province 1",
                madhesh: "Madhesh",
                bagmati: "Bagmati",
                gandaki: "Gandaki",
                lumbini: "Lumbini",
                karnali: "Karnali",
                sudurpashchim: "Sudurpashchim"
            };
            
            const formattedProvince = provinceNames[province] || province;
            
            return {
                title: `${title} ${isDefault ? '⭐' : ''}`,
                subtitle: `${subtitle} • ${formattedProvince}, ${district}, ${city}`
            };
        }
    },
    orderings: [
        {
            title: 'Created Date, New',
            name: 'createdAtDesc',
            by: [
                { field: 'createdAt', direction: 'desc' }
            ]
        },
        {
            title: 'Created Date, Old',
            name: 'createdAtAsc',
            by: [
                { field: 'createdAt', direction: 'asc' }
            ]
        },
        {
            title: 'Address Name',
            name: 'nameAsc',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        }
    ]
});