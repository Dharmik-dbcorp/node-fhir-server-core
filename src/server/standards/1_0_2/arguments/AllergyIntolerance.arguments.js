module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category',
		description: 'food | medication | environment | other - Category of Substance.',
	},
	CRITICALITY: {
		name: 'Criticality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality',
		description: 'CRITL | CRITH | CRITU.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-date',
		description: 'When recorded.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-identifier',
		description: 'External ids for this item.',
	},
	LAST_DATE: {
		name: 'Last_date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date',
		description: 'Date(/time) of last known occurrence of a reaction.',
	},
	MANIFESTATION: {
		name: 'Manifestation',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation',
		description: 'Clinical symptoms/signs associated with the Event.',
	},
	ONSET: {
		name: 'Onset',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset',
		description: 'Date(/time) when manifestations showed.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-patient',
		description: 'Who the sensitivity is for.',
	},
	RECORDER: {
		name: 'Recorder',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder',
		description: 'Who recorded the sensitivity.',
	},
	REPORTER: {
		name: 'Reporter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-reporter',
		description: 'Source of the information about the allergy.',
	},
	ROUTE: {
		name: 'Route',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route',
		description: 'How the subject was exposed to the substance.',
	},
	SEVERITY: {
		name: 'Severity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity',
		description: 'mild | moderate | severe (of event as a whole).',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-status',
		description: 'active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error.',
	},
	SUBSTANCE: {
		name: 'Substance',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-substance',
		description: 'Substance, (or class) considered to be responsible for risk.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-type',
		description: 'allergy | intolerance - Underlying mechanism (if known).',
	},
};
