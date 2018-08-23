module.exports = {
	CONNECTION_TYPE: {
		name: 'Connection_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-connection-type',
		description: 'Protocol/Profile/Standard to be used with this endpoint connection.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-identifier',
		description: 'Identifies this endpoint across multiple systems.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-name',
		description: 'A name that this endpoint can be identified by.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-organization',
		description: 'The organization that is managing the endpoint.',
	},
	PAYLOAD_TYPE: {
		name: 'Payload_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-payload-type',
		description: 'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries).',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-status',
		description: 'The current status of the Endpoint (usually expected to be active).',
	},
};
