export class Committee{
    name: string
    type: string
    email: string
    description: string | null
    facebook: string | null
    instagram: string | null
    website: string | null
    logo_url: string | null
    banner_url: string | null

    constructor(data: {
        name: string,
        type: string,
        email: string,
        description?: string | null,
        facebook?: string | null,
        instagram?: string | null,
        website?: string | null,
        logo_url?: string | null,
        banner_url?: string | null
    }) {
        this.name = data.name
        this.type = data.type
        this.email = data.email
        this.description = data.description ?? null
        this.facebook = data.facebook ?? null
        this.instagram = data.instagram ?? null
        this.website = data.website ?? null
        this.logo_url = data.logo_url ?? null
        this.banner_url = data.banner_url ?? null
    }
}
