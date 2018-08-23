module.exports = {
	ACTOR: {
		name: 'Actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-actor',
		description: 'Any one of the individuals participating in the appointment.',
	},
	APPOINTMENT_TYPE: {
		name: 'Appointment_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-appointment-type',
		description: 'The style of appointment or patient that has been booked in the slot (not service type).',
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
	INCOMINGREFERRAL: {
		name: 'Incomingreferral',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-incomingreferral',
		description: 'The ReferralRequest provided as information to allocate to the Encounter.',
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
	SERVICE_TYPE: {
		name: 'Service_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-service-type',
		description: 'The specific service that is to be performed during this appointment.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-status',
		description: 'The overall status of the appointment.',
	},
};
