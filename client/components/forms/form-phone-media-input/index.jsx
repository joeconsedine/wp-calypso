/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import PhoneInput from 'components/phone-input';
import FormLabel from 'components/forms/form-label';
import FormInputValidation from 'components/forms/form-input-validation';

export default function FormPhoneMediaInput( {
	additionalClasses,
	label,
	name,
	value,
	countryCode,
	className,
	disabled,
	errorMessage,
	isError,
	onChange,
	countriesList,
	enableStickyCountry,
	children,
} ) {
	return (
		<div className={ classnames( additionalClasses, 'phone' ) }>
			<div>
				<FormLabel htmlFor={ name }>{ label }</FormLabel>
				<PhoneInput
					name={ name }
					onChange={ onChange }
					value={ value }
					countriesList={ countriesList }
					enableStickyCountry={ enableStickyCountry }
					countryCode={ countryCode.toUpperCase() }
					className={ className }
					isError={ isError }
					disabled={ disabled }
				/>
				{ children }
			</div>
			{ errorMessage && <FormInputValidation text={ errorMessage } isError /> }
		</div>
	);
}
