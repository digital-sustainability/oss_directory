
const AddressFields = '_id, street, city, zip, additional, title, country,';
const OrganisationFields = '_id, title, logo,'
const OrganisationTranslationFields = '_id, description, contact, claim,';
const ProductFields = '_id, title, logo, source_code_link, links,';
const SuccessStoryTranslationFields = '_id, title, lead, base, goal, proposal, outcome,';


export const VendorQuery = { "query" : `query vendor($id : String, $title : String){
    list : Vendor(_id : $id, title : $title ) { 
        ${OrganisationFields}
      address { ${AddressFields} }
      translations { ${OrganisationTranslationFields} }
      products { service_type
        Product { ${ProductFields}
            category { _id, title }
            translations { _id, description }
        }  
      }
      successStories { _id
        client { ${OrganisationFields}
          address { ${AddressFields} }
          translations { ${OrganisationTranslationFields} }
        }
        translations { ${SuccessStoryTranslationFields} }
      }
      communities { ${OrganisationFields}
        translations { ${OrganisationTranslationFields} }
      }
    }
  }`, 'variables' : { 'id' : null, 'title' : null }};
export const ClientQuery = { "query" : `query client($id : String, $title : String){ 
    list : Client(_id : $id, title : $title) { 
        ${OrganisationFields}
	    address { ${AddressFields} }
        industry { _id, title, description }
	    translations { ${OrganisationTranslationFields} }
        products { ${ProductFields}
                category { _id, title }
                translations { _id, description }
            }  
          }
        successStories { _id,
            vendor { ${OrganisationFields}
                address { ${AddressFields} }
                translations { ${OrganisationTranslationFields} }
            }
            translations { ${SuccessStoryTranslationFields} }
        communities { ${OrganisationFields}
            translations { ${OrganisationTranslationFields} }
        }
	} }`, 'variables' : { 'id' : null, 'title' : null}};
export const CommunityQuery = { "query" : `query community($id : String, $title : String){
    list : Community(_id : $id, title : $title) {
        ${OrganisationFields}
        address { ${AddressFields} }
        translations { ${OrganisationTranslationFields} }
        products { service_type
            Product { ${ProductFields}
                category { _id, title }
                translations { _id, description }
            }  
        }
        vendors {
            ${OrganisationFields}
            address { ${AddressFields} }
            translations { ${OrganisationTranslationFields} }
        }
        clients {
            ${OrganisationFields}
            address { ${AddressFields} }
            translations { ${OrganisationTranslationFields} }
        }
    }
}`, 'variables' : {'id' : null, 'title' : null }};
export const OrganisationTranslationQuery = {};
export const CategoryQuery = {};
export const AddressQuery = {};
export const ProductQuery = { 'query' : `query res($id : String, $title : String){
    list : Product(_id : $id, title : $title){ ${ProductFields}
    translations { _id, description }
    vendors { 
        service_type
        Vendor { ${OrganisationFields} } }
    clients { ${OrganisationFields} }
    communities { ${OrganisationFields} }
    successStories { 
        translations { ${SuccessStoryTranslationFields} }
    }
    }
}`, 'variables' : {'id' : null, 'title' : null}};
export const ProductTranslationQuery = {};
export const SuccessStoryQuery = { 'query' : `query res(id : String, title : String){
    list : SuccessStory(_id : $id, title : $title){
        translations { ${SuccessStoryTranslationFields} }
        vendor { ${OrganisationFields } }
        client { ${OrganisationFields } }
    }
}`, 'variables' : {'id' : null, 'title' : null}};
export const SuccessStoryTranslationQuery = {};


