/**
 * Specifies the interface for Committee & CommitteeListMember
 */

export interface CommitteeListMember {
  name: string
  type: string
  logo_url: string | null
}

export interface Committee{
  id: number
  name: string
  fullname: string
  type: string
  email: string
  description: string | null
  facebook: string | null
  instagram: string | null
  website: string | null
  logo_url: string | null
  banner_url: string | null
}
