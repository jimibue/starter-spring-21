import React from 'react'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import LoadDataDemo from '../components/LoadDataDemo'
import RegisterFormDemo from '../components/RegisterFormDemo'

const ComponentDemo = () => {
    return (
        <>
            <h1>My components</h1>
            <Card header='Load Data Demo'>
                <LoadDataDemo />
                <LoadDataDemo err/>
                <LoadDataDemo err fullErr/>
            </Card>
            
            <Card header='Buttons'>
                <ButtonGroup>
                    <Button primary>Primary Button</Button>
                    <Button>Inverted Button</Button>
                    <Button disabled>Disabled Button</Button>
                    <Button loading>Disabled Button</Button>
                </ButtonGroup>
            </Card>
            <Card header='FormattedMessage'>
                <FormattedMessage type='alert'>
                    Alert message
              </FormattedMessage>
                <FormattedMessage type='warn'>
                    Warn message
              </FormattedMessage>
                <FormattedMessage>
                    Notify message
              </FormattedMessage>
            </Card>
            <Card header='Register'>
                <RegisterFormDemo />
            </Card>




        </>
    )
}

export default ComponentDemo