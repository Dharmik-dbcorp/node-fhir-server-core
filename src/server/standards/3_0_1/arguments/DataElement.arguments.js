module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-code',
		description: 'A code for the data element (server may choose to do subsumption).',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-date',
		description: 'The data element publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-description',
		description: 'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-identifier',
		description: 'External identifier for the data element.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-jurisdiction',
		description: 'Intended jurisdiction for the data element.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-name',
		description: 'Computationally friendly name of the data element.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-publisher',
		description: 'Name of the publisher of the data element.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-status',
		description: 'The current status of the data element.',
	},
	STRINGENCY: {
		name: 'Stringency',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-stringency',
		description: 'The stringency of the data element definition.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-title',
		description: 'The human-friendly name of the data element.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-url',
		description: 'The uri that identifies the data element.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-version',
		description: 'The business version of the data element.',
	},
	OBJECTCLASS: {
		name: 'ObjectClass',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClass',
		description: 'Matches on the 11179-objectClass extension value.',
	},
	OBJECTCLASSPROPERTY: {
		name: 'ObjectClassProperty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClassProperty',
		description: 'Matches on the 11179-objectClassProperty extension value.',
	},
};
