import StepType from "./type"
import StepQuantity from "./quantity"
import StepCompanyInformation from "./company-information"

export default {
  0: props => StepType(props),
  1: props => StepQuantity(props),
  2: props => StepCompanyInformation(props),
}
