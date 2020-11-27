import StepType from "./type"
import StepQuota from "./quota"
import StepInformation from "./information"

export default {
  0: props => StepType(props),
  1: props => StepQuota(props),
  2: props => StepInformation(props),
}
