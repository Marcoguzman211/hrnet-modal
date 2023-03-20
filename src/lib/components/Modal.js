import React from "react";
import PropTypes from "prop-types";

const Modal = ({ onClose, employeeName, headerText, bodyText, buttonText, buttonClass, sizeClass, bgColorClass }) => {
	// Define default classes
	const defaultButtonClass = "bg-indigo-600";
	const defaultSizeClass = "sm:max-w-lg";
	const defaultBgColorClass = "bg-gray-500";

	// Combine default classes with any custom classes provided
	const buttonClasses = `${defaultButtonClass} ${buttonClass}`;
	const sizeClasses = `${defaultSizeClass} ${sizeClass}`;
	const bgColorClasses = `${defaultBgColorClass} ${bgColorClass}`;

	return (
		<div className={`fixed z-50 inset-0 overflow-y-auto`}>
			<div className="flex items-center justify-center min-h-screen px-4">
				<div className={`fixed inset-0 opacity-75 ${bgColorClasses}`}></div>
				<div className={`rounded-lg overflow-hidden shadow-xl transform transition-all bg-white ${sizeClasses}`}>
					<div className="px-4 py-5 sm:p-6">
						<div className="sm:flex sm:items-start">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
								<svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 className="text-lg leading-6 font-medium text-indigo-900">{headerText}</h3>
								<div className="mt-2">
									<p className="text-sm text-indigo-500">
										{bodyText} {employeeName}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							onClick={onClose}
							type="button"
							className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${buttonClasses} text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm`}
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	employeeName: PropTypes.string.isRequired,
	headerText: PropTypes.string,
	bodyText: PropTypes.string,
	buttonText: PropTypes.string,
	buttonClass: PropTypes.string,
	sizeClass: PropTypes.string,
	bgColorClass: PropTypes.string,
};

Modal.defaultProps = {
	headerText: "Employee Created",
	bodyText: "New user created:",
	buttonText: "OK",
	buttonClass: "",
	sizeClass: "sm:max-w-lg",
	bgColorClass: "bg-gray-500",
};
