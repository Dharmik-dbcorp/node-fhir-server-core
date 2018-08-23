module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-category',
		description: 'The classification of the type of observation.',
	},
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code',
		description: 'The code of the observation type.',
	},
	CODE_VALUE_[X]: {
		name: 'Code_value_[x]',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-x',
		description: 'Both code and one of the value parameters.',
	},
	COMPONENT_CODE: {
		name: 'Component_code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code',
		description: 'The component code of the observation type.',
	},
	COMPONENT_CODE_VALUE_[X]: {
		name: 'Component_code_value_[x]',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code-value-x',
		description: 'Both component code and one of the component value parameters.',
	},
	COMPONENT_DATA_ABSENT_REASON: {
		name: 'Component_data_absent_reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason',
		description: 'The reason why the expected value in the element Observation.component.value[x] is missing.',
	},
	COMPONENT_VALUE_CONCEPT: {
		name: 'Component_value_concept',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-concept',
		description: 'The value of the component observation, if the value is a CodeableConcept.',
	},
	COMPONENT_VALUE_QUANTITY: {
		name: 'Component_value_quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity',
		description: 'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data).',
	},
	COMPONENT_VALUE_STRING: {
		name: 'Component_value_string',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-string',
		description: 'The value of the component observation, if the value is a string, and also searches in CodeableConcept.text.',
	},
	DATA_ABSENT_REASON: {
		name: 'Data_absent_reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason',
		description: 'The reason why the expected value in the element Observation.value[x] is missing.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-date',
		description: 'Obtained date/time. If the obtained element is a period, a date that falls in the period.',
	},
	DEVICE: {
		name: 'Device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-device',
		description: 'The Device that generated the observation data.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-encounter',
		description: 'Healthcare event related to the observation.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-identifier',
		description: 'The unique id for a particular observation.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-patient',
		description: 'The subject that the observation is about (if patient).',
	},
	PERFORMER: {
		name: 'Performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-performer',
		description: 'Who performed the observation.',
	},
	RELATED: {
		name: 'Related',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related',
		description: 'Related Observations - search on related-type and related-target together.',
	},
	RELATED_TARGET: {
		name: 'Related_target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-target',
		description: 'Resource that is related to this one.',
	},
	RELATED_TYPE: {
		name: 'Related_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-type',
		description: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by.',
	},
	SPECIMEN: {
		name: 'Specimen',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-specimen',
		description: 'Specimen used for this observation.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-status',
		description: 'The status of the observation.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-subject',
		description: 'The subject that the observation is about.',
	},
	VALUE_CONCEPT: {
		name: 'Value_concept',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-concept',
		description: 'The value of the observation, if the value is a CodeableConcept.',
	},
	VALUE_DATE: {
		name: 'Value_date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-date',
		description: 'The value of the observation, if the value is a date or period of time.',
	},
	VALUE_QUANTITY: {
		name: 'Value_quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-quantity',
		description: 'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data).',
	},
	VALUE_STRING: {
		name: 'Value_string',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-string',
		description: 'The value of the observation, if the value is a string, and also searches in CodeableConcept.text.',
	},
};
