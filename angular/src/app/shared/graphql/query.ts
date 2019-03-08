/**
 * List of all select queries
 */

const AddressFields = '_id, street, city, zip, additional, title, country,';
const OrganisationFields = '_id, title, logo,'
const OrganisationTranslationFields = '_id, description, contact, claim,';
const ProductFields = '_id, title, logo, source_code_link, links,';
const SuccessStoryTranslationFields = '_id, title, lead, base, goal, proposal, outcome,';


export const VendorQuery = { "query" : `query vendor($_id : Int, $title : String){
    list : Vendor(_id : $_id, title : $title ) { 
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
  }`, 'variables' : { '_id' : null, 'title' : null }};
export const ClientQuery = { "query" : `query client($_id : ID, $title : String){ 
    list : Client(_id : $_id, title : $title) { 
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
	} }`, 'variables' : { '_id' : null, 'title' : null}};
export const CommunityQuery = { "query" : `query community($_id : ID, $title : String){
    list : Community(_id : $_id, title : $title) {
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
}`, 'variables' : {'_id' : null, 'title' : null }};

export const OrganisationTranslationQuery = null;

export const CategoryQuery = null;

export const AddressQuery = null;

export const ProductQuery = { 'query' : `query res($_id : ID, $title : String){
    list : Product(_id : $_id, title : $title){ ${ProductFields}
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
}`, 'variables' : {'_id' : null, 'title' : null}};

export const ProductTranslationQuery = null;

export const SuccessStoryQuery = { 'query' : `query res($_id : ID, $title : String){
    list : SuccessStory(_id : $_id, title : $title){
        translations { ${SuccessStoryTranslationFields} }
        vendor { ${OrganisationFields } }
        client { ${OrganisationFields } }
    }
}`, 'variables' : {'_id' : null, 'title' : null}};

export const SuccessStoryTranslationQuery = null;


