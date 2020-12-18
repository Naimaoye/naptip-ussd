/**
 *
 * @param ussdResponse
 * @returns array with first index represent response without next or back number
 * and second index represents the last selected option
 */

export const parseResponseString = (ussdResponse) => {
	if (ussdResponse === '0') {
		return ['', '0'];
	} else {
		const parsedResponse = ussdResponse.split('*');
		const lastSelectedOption = parsedResponse.slice(-1)[0];
		// remove 00 or 0 from the parsed response
		const updatedResponse = parsedResponse.filter((item) => {
			if (item == '0' || item == '00') {
				return false;
			} else {
				return true;
			}
		});

		/**
		 * return empty string for empty array in case the array only consist of 0 and 00.
		 * return string with *
		 */

		const ussdText = updatedResponse.join('*');
		return [ussdText, lastSelectedOption];
	}
};
