module.exports = {
	ACTIVE: {
		name: 'Active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-active',
		description: 'Whether the patient record is active.',
	},
	ADDRESS: {
		name: 'Address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  .',
	},
	ADDRESS_CITY: {
		name: 'Address_city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-city',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Patient](patient.html): A city specified in an address  .',
	},
	ADDRESS_COUNTRY: {
		name: 'Address_country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-country',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Patient](patient.html): A country specified in an address  .',
	},
	ADDRESS_POSTALCODE: {
		name: 'Address_postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-postalcode',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Patient](patient.html): A postalCode specified in an address  .',
	},
	ADDRESS_STATE: {
		name: 'Address_state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-state',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Patient](patient.html): A state specified in an address  .',
	},
	ADDRESS_USE: {
		name: 'Address_use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-use',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Patient](patient.html): A use code specified in an address  .',
	},
	ANIMAL_BREED: {
		name: 'Animal_breed',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-breed',
		description: 'The breed for animal patients.',
	},
	ANIMAL_SPECIES: {
		name: 'Animal_species',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-species',
		description: 'The species for animal patients.',
	},
	BIRTHDATE: {
		name: 'Birthdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): The Related Person\'s date of birth  * [Person](person.html): The person\'s date of birth  * [Patient](patient.html): The patient\'s date of birth  .',
	},
	DEATH_DATE: {
		name: 'Death_date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-death-date',
		description: 'The date of death has been provided and satisfies this search value.',
	},
	DECEASED: {
		name: 'Deceased',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-deceased',
		description: 'This patient has been marked as deceased, or as a death date entered.',
	},
	EMAIL: {
		name: 'Email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description: 'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  .',
	},
	FAMILY: {
		name: 'Family',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-family',
		description: 'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the family name  * [Patient](patient.html): A portion of the family name of the patient  .',
	},
	GENDER: {
		name: 'Gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  .',
	},
	GENERAL_PRACTITIONER: {
		name: 'General_practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-general-practitioner',
		description: 'Patient\'s nominated general practitioner, not the organization that manages the record.',
	},
	GIVEN: {
		name: 'Given',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-given',
		description: 'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the given name  * [Patient](patient.html): A portion of the given name of the patient  .',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
		description: 'A patient identifier.',
	},
	LANGUAGE: {
		name: 'Language',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-language',
		description: 'Language code (irrespective of use value).',
	},
	LINK: {
		name: 'Link',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-link',
		description: 'All patients linked to the given patient.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-name',
		description: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-organization',
		description: 'The organization at which this person is a patient.',
	},
	PHONE: {
		name: 'Phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		description: 'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  .',
	},
	PHONETIC: {
		name: 'Phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phonetic',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  .',
	},
	TELECOM: {
		name: 'Telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		description: 'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  .',
	},
};
