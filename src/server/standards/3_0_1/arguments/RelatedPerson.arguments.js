module.exports = {
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
	BIRTHDATE: {
		name: 'Birthdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): The Related Person\'s date of birth  * [Person](person.html): The person\'s date of birth  * [Patient](patient.html): The patient\'s date of birth  .',
	},
	EMAIL: {
		name: 'Email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description: 'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  .',
	},
	GENDER: {
		name: 'Gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		description: 'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  .',
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
	ACTIVE: {
		name: 'Active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-active',
		description: 'Indicates if the related person record is active.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier',
		description: 'An Identifier of the RelatedPerson.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-name',
		description: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-patient',
		description: 'The patient this related person is related to.',
	},
};
