import React, { FC, useState } from 'react'
import { WithSteps } from '../resources'
import { WithUserType } from 'types/user'
import { WithProjectType } from 'types/projects'
import { UserSteps } from './UserSteps'
import { UserStepContent } from './UserStepContent'
import { BoxFade } from '../../Common/BoxFade/BoxFade'
import { useMediaQuery, useTheme } from '@material-ui/core'

export type UserJourneyProps = WithUserType & WithProjectType & WithSteps

export const UserJourney: FC<UserJourneyProps> = ({
  userType,
  projectType,
  steps,
}) => {
  const [step, setStep] = useState(0)
  const stepList = steps[userType][projectType]
  const stepKeys = Object.keys(stepList)
  const stepInfo = Object.values(stepList)[step]
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <BoxFade down marginY={2} marginX={isPhone ? 2 : 10}>
      <UserSteps
        userType={userType}
        projectType={projectType}
        stepListKeys={stepKeys}
        activeStep={step}
        isPhone={isPhone}
      />
      <UserStepContent
        userType={userType}
        projectType={projectType}
        activeStep={step}
        setStep={setStep}
        dates={stepInfo[0] as string}
        content={stepInfo[1] as string}
        links={stepInfo[2] as Record<string, string>}
        length={stepKeys.length - 1}
        isPhone={isPhone}
      />
    </BoxFade>
  )
}
