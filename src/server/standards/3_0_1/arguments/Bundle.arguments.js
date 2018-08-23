module.exports = {
	COMPOSITION: {
		name: 'Composition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-composition',
		description: 'The first resource in the bundle, if the bundle type is \'document\' - this is a composition, and this parameter provides access to searches its contents.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-identifier',
		description: 'Persistent identifier for the bundle.',
	},
	MESSAGE: {
		name: 'Message',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-message',
		description: 'The first resource in the bundle, if the bundle type is \'message\' - this is a message header, and this parameter provides access to search its contents.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-type',
		description: 'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.',
	},
};
