const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class PaymentReconciliation extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'PaymentReconciliation';
		Object.assign(this, opt);
	}

	// This is a PaymentReconciliation resource
	static get __resourceType () {
		return 'PaymentReconciliation';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__PaymentReconciliation = new_value;
	}

	// The Response business identifier.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// The period of time for which payments have been gathered into this bulk payment for settlement.
	get period () {
		return this.__period;
	}

	set period (new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created () {
		return this.__created;
	}

	set created (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The Insurer who produced this adjudicated response.
	get organization () {
		return this.__organization;
	}

	set organization (new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// Original request resource reference.
	get request () {
		return this.__request;
	}

	set request (new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Transaction status: error, complete.
	get outcome () {
		return this.__outcome;
	}

	set outcome (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this.__disposition;
	}

	set disposition (new_value) {
		this.__disposition = new_value;
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider () {
		return this.__requestProvider;
	}

	set requestProvider (new_value) {
		const Reference = require('./Reference');
		this.__requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization () {
		return this.__requestOrganization;
	}

	set requestOrganization (new_value) {
		const Reference = require('./Reference');
		this.__requestOrganization = new Reference(new_value);
	}

	// List of individual settlement amounts and the corresponding transaction.
	get detail () {
		return this.__detail;
	}

	set detail (new_value) {
		const PaymentReconciliationDetail = require('./PaymentReconciliationDetail');
		this.__detail = Array.isArray(new_value) ? new_value.map(val => new PaymentReconciliationDetail(val)) : [new PaymentReconciliationDetail(new_value)];
	}

	// The form to be used for printing the content.
	get form () {
		return this.__form;
	}

	set form (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Total payment amount.
	get total () {
		return this.__total;
	}

	set total (new_value) {
		const Money = require('./Money');
		this.__total = new Money(new_value);
	}

	// Suite of notes.
	get processNote () {
		return this.__processNote;
	}

	set processNote (new_value) {
		const PaymentReconciliationProcessNote = require('./PaymentReconciliationProcessNote');
		this.__processNote = Array.isArray(new_value) ? new_value.map(val => new PaymentReconciliationProcessNote(val)) : [new PaymentReconciliationProcessNote(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			period: this.__period && this.__period.toJSON(),
			created: this.__created,
			organization: this.__organization && this.__organization.toJSON(),
			request: this.__request && this.__request.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			disposition: this.__disposition,
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON(),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
			form: this.__form && this.__form.toJSON(),
			total: this.__total && this.__total.toJSON(),
			processNote: this.__processNote && this.__processNote.map(v => v.toJSON())
		});
	}
}

module.exports = PaymentReconciliation;
