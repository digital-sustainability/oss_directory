export const createVendor = { "query" : `mutation createVendor($title : String!, $logo : String){
    list : CreateVendor(title : $title, logo : $logo){
      _id
    }
  }`, 'variables' : { 'title' : null, 'logo' : null}};

export const createClient = { "query" : `mutation createClient($title : String!, logo : String){
  list : CreateClient(title : $title, logo : $logo){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null}};

export const createCommunity = { "query" : `mutation createCommunity($title : String!, logo : String){
  list : CreateCommunity(title : $title, logo : $logo){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null}};

export const createOrganisationTranslation = { "query" : `mutation createOrganisationTranslation(
  $description : String, $contact : String, $claim : String){
    list : CreateOrganisationTranslation(description : $description, contact : $contact, claim : $claim){
      _id
    }
  }`, 'variables' : { 'description' : null, 'contact' : null, 'claim': null}};

export const createCategory = { "query" : `mutation createCategory($title : String!){
  list : CreateProductCategory(title : $title){
    _id
  }
}`, 'variables' : { 'title': null}};

export const createAddress = { "query" : `mutation createAddress(
  $street : string!, $city : string!, $zip : string!, $additional : string, $title : string, $country : string )
  {
    list : CreateAddress(street : $street, city : $city, zip : $zip, additional : $additional, title : $title, country : $country){
      _id
    }
  }`, 'variables' : { 'street' : null, 'city' : null, 'zip' : null, 'additional' : null, 'title' : null, 'country' : null}};

export const createProduct = { "query" : `mutation createProduct($title : String!, $logo : String, $source_code_link : String, $links : $String){
  list : CreateProduct(title : $title, logo : $logo, source_code_link : $source_code_link, links : $links){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null, 'source_code_link' : null, 'links' : null }};

export const createProductTranslation = { "query" : `mutation createProductTranslation($description : String){
  list : CreateProductTranslation(description : $description){
    _id
  }
}`, 'variables' : { 'description' : null}};

export const createSuccessStory = { "query" : `mutation createSuccessStory(){
  list : CreateSuccessStory(){
    _id
  }
}`};

export const createSuccessStoryTranslation = { "query" : `mutation createSuccessStoryTranslation($title : String!, $lead : String, $base : String, $goal : String, $proposal : String, $outcome : String){
  list : CreateSuccessStoryTranslation(title : $title, lead : $lead, base : $base, goal : $goal, proposal : $proposal, outcome : $outcome){
    _id
  }
}`, 'variables' : { 'title' : null, 'lead' : null, 'base' : null, 'goal' : null, 'proposal' : null, 'outcome' : null}};

export const updateVendor = { "query" : `mutation updateVendor($title : String!, $logo : String){
  list : UpdateVendor(title : $title, logo : $logo){
    _id
    title
  }
}`, 'variables' : { 'title' : null, 'logo' : null}};

export const updateClient = { "query" : `mutation updateClient($title : String, logo : String){
  list : UpdateClient(title : $title, logo : $logo){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null}};

export const updateCommunity = { "query" : `mutation updateCommunity($title : String, logo : String){
  list : UpdateCommunity(title : $title, logo : $logo){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null}};

export const updateOrganisationTranslation = { "query" : `mutation updateOrganisationTranslation(
  $description : String, $contact : String, $claim : String){
    list : UpdateOrganisationTranslation(description : $description, contact : $contact, claim : $claim){
      _id
    }
  }`, 'variables' : { 'description' : null, 'contact' : null, 'claim': null}};

export const updateCategory = { "query" : `mutation updateCategory($title : String){
  list : UpdateProductCategory(title : $title){
    _id
  }
}`, 'variables' : { 'title': null}};

export const updateAddress = { "query" : `mutation updateAddress(
  $street : string, $city : string, $zip : string, $additional : string, $title : string, $country : string )
  {
    list : UpdateAddress(street : $street, city : $city, zip : $zip, additional : $additional, title : $title, country : $country){
      _id
    }
  }`, 'variables' : { 'street' : null, 'city' : null, 'zip' : null, 'additional' : null, 'title' : null, 'country' : null}};

export const updateProduct = { "query" : `mutation updateProduct($title : String, $logo : String, $source_code_link : String, $links : $String){
  list : UpdateProduct(title : $title, logo : $logo, source_code_link : $source_code_link, links : $links){
    _id
  }
}`, 'variables' : { 'title' : null, 'logo' : null, 'source_code_link' : null, 'links' : null }};

export const updateProductTranslation = { "query" : `mutation updateProductTranslation($description : String){
  list : UpdateProductTranslation(description : $description){
    _id
  }
}`, 'variables' : { 'description' : null}};

export const updateSuccessStory = null;

export const updateSuccessStoryTranslation = { "query" : `mutation updateSuccessStoryTranslation($title : String!, $lead : String, $base : String, $goal : String, $proposal : String, $outcome : String){
  list : UpdateSuccessStoryTranslation(title : $title, lead : $lead, base : $base, goal : $goal, proposal : $proposal, outcome : $outcome){
    _id
  }
}`, 'variables' : { 'title' : null, 'lead' : null, 'base' : null, 'goal' : null, 'proposal' : null, 'outcome' : null}};

export const deleteVendor = null;

export const deleteClient = null;

export const deleteCommunity = null;

export const deleteOrganisationTranslation = null;

export const deleteCategory = null;

export const deleteAddress = null;

export const deleteProduct = null;

export const deleteProductTranslation = null;

export const deleteSuccessStory = null;

export const deleteSuccessStoryTranslation = null;


