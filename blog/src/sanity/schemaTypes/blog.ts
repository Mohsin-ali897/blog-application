import { defineField, defineType, defineArrayMember } from "sanity"
export const blog =defineType( {
    name:'Blog',
    title: 'Blog',
    type : 'document',
    fields:[
        defineField({
        name:'Tittle',
        title:'Tittle',
        type :'string',
        
        }),
        defineField({
            name:'paragraph',
            title:'Paragraph',
            type:'text',
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'Tittle'

            }

        }),
        defineField({
            name:'Poster',
            title:'Poster',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'Block',
            title:'Block',
            type:'array',
            of:[{type:'block'}]
        }),
    ] 
})