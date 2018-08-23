module.exports = {
	ACTOR: {
		name: 'Actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-actor',
		description: 'Any one of the individuals participating in the appointment.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-date',
		description: 'Appointment date/time.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-identifier',
		description: 'An Identifier of the Appointment.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-location',
		description: 'This location is listed in the participants of the appointment.',
	},
	PART_STATUS: {
		name: 'Part_status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-part-status',
		description: 'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-patient',
		description: 'One of the individuals of the appointment is this patient.',
	},
	PRACTITIONER: {
		name: 'Practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-practitioner',
		description: 'One of the individuals of the appointment is this practitioner.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-status',
		description: 'The overall status of the appointment.',
	},
};
