module.exports = {
	BASE: {
		name: 'Base',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-base',
		description: 'Marks this as a profile of the base.',
	},
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-code',
		description: 'Name used to invoke the operation.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-date',
		description: 'The operation definition publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-description',
		description: 'The description of the operation definition.',
	},
	INSTANCE: {
		name: 'Instance',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-instance',
		description: 'Invoke on an instance?.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction',
		description: 'Intended jurisdiction for the operation definition.',
	},
	KIND: {
		name: 'Kind',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-kind',
		description: 'operation | query.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-name',
		description: 'Computationally friendly name of the operation definition.',
	},
	PARAM_PROFILE: {
		name: 'Param_profile',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-param-profile',
		description: 'Profile on the type.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher',
		description: 'Name of the publisher of the operation definition.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-status',
		description: 'The current status of the operation definition.',
	},
	SYSTEM: {
		name: 'System',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-system',
		description: 'Invoke at the system level?.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-type',
		description: 'Invole at the type level?.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-url',
		description: 'The uri that identifies the operation definition.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-version',
		description: 'The business version of the operation definition.',
	},
};
