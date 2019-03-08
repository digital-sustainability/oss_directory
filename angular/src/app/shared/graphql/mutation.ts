
export const createVendor = { "query" : `mutation createVendor($title : string!, $logo : string){
    CreateVendor(title : $title, logo : $logo){
      _id
    }
  }`, 'variables' : { 'title' : null, 'logo' : null}};
export const createClient = { "query" : "query { Client { title } }"};
export const createCommunity = {};
export const createOrganisationTranslation = { "query" : `mutation createOrganisationTranslation($description : string, $contact : string, $claim : string){
    CreateOrganisationTranslation(description : $description, contact : $contact, claim : $claim){
      _id
    }
  }`, 'variables' : { 'description' : null, 'contact' : null, 'claim': null}};
export const createCategory = {};
export const createAddress = { "query" : `mutation createAddress($street : string!, $city : string!, $zip : string!, $additional :string, $title : string, $country : string ){
    CreateAddress(street : $street, city : $city, zip : $zip, additional : $additional, title : $title, country : $country){
      _id
    }
  }`, 'variables' : { 'street' : null, 'city' : null, 'zip' : null, 'additional' : null, 'title' : null, 'country' : null}};
export const createProduct = {};
export const createProductTranslation = {};
export const createSuccessStory = {};
export const createSuccessStoryTranslation = {};

export const updateVendor = { "query" : "query { Vendor { title } }"};
export const updateClient = { "query" : "query { Client { title } }"};
export const updateCommunity = {};
export const updateOrganisationTranslation = {};
export const updateCategory = {};
export const updateAddress = {};
export const updateProduct = {};
export const updateProductTranslation = {};
export const updateSuccessStory = {};
export const updateSuccessStoryTranslation = {};


export const deleteVendor = { "query" : "query { Vendor { title } }"};
export const deleteClient = { "query" : "query { Client { title } }"};
export const deleteCommunity = {};
export const deleteOrganisationTranslation = {};
export const deleteCategory = {};
export const deleteAddress = {};
export const deleteProduct = {};
export const deleteProductTranslation = {};
export const deleteSuccessStory = {};
export const deleteSuccessStoryTranslation = {};


export const addRelation = { "query" : `mutation {
    add_relation(id1 : 10, id2 : 11, name : "")
  }`};



