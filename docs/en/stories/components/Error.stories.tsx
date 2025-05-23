import { Meta } from '@storybook/react'
import { DefaultFieldStoryArgs } from '../Elements'
import Template from '../../../helpers/Template'
import React from 'react'
import variables from '../../../helpers/theme'
import { TemplateProps } from '../../../types/Templates'

const ErrorTemplate = (props: TemplateProps) => {
    return (
        <Template
            template={window.formcentric.formapp.components.error}
            props={props}
            variables={variables}
        />
    )
}

const meta: Meta<typeof ErrorTemplate> = {
    title: 'EN/Template Properties/Components/Error',
    component: ErrorTemplate,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Implementation of an `error` template located in `templates/components/`. Formcentric client passes the listed properties as the second argument to the template function, enabling dynamic rendering of form elements in various states.',
            },
        },
    },
}

export default meta

export const Default = {
    args: {
        ...DefaultFieldStoryArgs.args,
        fieldError: {
            defaultMessage: 'A concise error message',
        },
    },
    argTypes: {
        ...DefaultFieldStoryArgs.argTypes,
    },
    name: 'Default',
}
