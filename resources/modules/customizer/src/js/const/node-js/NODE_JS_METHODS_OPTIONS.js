import RESPONSE_OPTIONS from "./RESPONSE_OPTIONS";
import REQUEST_OPTIONS from "./REQUEST_OPTIONS";
import SESSION_OPTIONS from "./SESSION_OPTIONS";
import ARRAY_OPTIONS from "./ARRAY_OPTIONS";
import NUMBER_OPTIONS from "./NUMBER_OPTIONS";
import OBJECT_OPTIONS from "./OBJECT_OPTIONS";
import STRING_OPTIONS from "./STRING_OPTIONS";
import USER_OPTIONS from "./../methods-options/USER_OPTIONS"


const JS_METHODS_OPTIONS = [
  {
    value: '',
    label: 'None',
  },
  ...REQUEST_OPTIONS,
  ...RESPONSE_OPTIONS,
  ...SESSION_OPTIONS,
  ...ARRAY_OPTIONS,
  ...OBJECT_OPTIONS,
  ...STRING_OPTIONS,
  ...NUMBER_OPTIONS,
  ...USER_OPTIONS,
]
export default JS_METHODS_OPTIONS
